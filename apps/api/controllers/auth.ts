import { Request, Response } from 'express'
import { supabase } from '../db/supabase'
import { sendResponse } from '../utils/response'

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return sendResponse(res, 401, error.message)
  }

  return sendResponse(res, 200, 'Login successful', {
    user: data.user,
    session: data.session,
  })
}

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.FRONTEND_URL}/reset-password`,
  })

  if (error) {
    return sendResponse(res, 400, error.message)
  }

  return sendResponse(
    res,
    200,
    'Password reset link sent to your email'
  )
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