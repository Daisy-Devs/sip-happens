import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

export const validate =
  (schema: z.ZodType) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues[0]?.message,
      })
    }

    req.body = result.data

    next()
  }