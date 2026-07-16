import { Request, Response } from 'express'
import { supabase } from '../db/supabase'
import { sendResponse } from '../utils/response'

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) return sendResponse(res, 401, error.message)

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('name, position, role')
    .eq('id', data.user.id)
    .single()

  if (profileError) return sendResponse(res, 400, profileError.message)

  res.cookie('refresh_token', data.session.refresh_token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  })

  return sendResponse(res, 200, 'Login successful', {
    session: {
      access_token: data.session.access_token,
    },
    user: {
      id: data.user.id,
      email: data.user.email,
      name: profile.name,
      position: profile.position,
      role: profile.role,
    }
  })
}

export const logout = async (req: Request, res: Response) => {
  const { error } = await supabase.auth.signOut()

  if (error) return sendResponse(res, 400, error.message)

  res.clearCookie('refresh_token')

  return sendResponse(res, 200, 'Logged out successfully')
}

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.FRONTEND_URL}/auth/updatepassword`,
  })

  console.log('Supabase error:', JSON.stringify(error))

  if (error) {
    return sendResponse(res, 400, error.message || 'Failed to send reset email')
  }

  return sendResponse(res, 200, 'Password reset link sent to your email')
}

export const updatePassword = async (req: Request, res: Response) => {
  const { password } = req.body

  const { error } = await supabase.auth.updateUser({
    password,
  })

  if (error) {
    return sendResponse(res, 400, error.message)
  }

  return sendResponse(res, 200, 'Password updated successfully')
}

export const refreshToken = async (req: Request, res: Response) => {
  const refresh_token = req.cookies.refresh_tokenss

  if (!refresh_token) return sendResponse(res, 400, 'Refresh token is required')

  const { data, error } = await supabase.auth.refreshSession({
    refresh_token,
  })

  if (error || !data.session) return sendResponse(res, 401, 'Session expired, please login again')

  res.cookie('refresh_token', data.session.refresh_token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  })

  return sendResponse(res, 200, 'Token refreshed successfully', {
    access_token: data.session.access_token,
  })
}

export const getProfile = async (req: Request, res: Response) => {
  const userId = (req as any).user.id

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) {
    return sendResponse(res, 400, error.message)
  }

  return sendResponse(res, 200, 'Profile fetched successfully', data)
}