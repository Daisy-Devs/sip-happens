import { Request, Response, NextFunction } from 'express'
import { supabase } from '../db/supabase'
import { sendResponse } from '../utils/response'

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return sendResponse(res, 401, 'No token provided')
  }

  const { data, error } = await supabase.auth.getUser(token)

  if (error || !data.user) {
    return sendResponse(res, 401, 'Invalid or expired token')
  }

  (req as any).user = data.user
  next()
}