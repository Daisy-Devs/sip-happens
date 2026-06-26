import { Request, Response } from 'express'

export const sendResponse = (res: Response, status: number, message: string, data: any = null) => {
  return res.status(status).json({
    success: status >= 200 && status < 300,
    statusCode: status,
    message,
    ...(data && { data })
  })
}