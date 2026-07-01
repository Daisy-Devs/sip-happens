import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.email('Invalid email'),
  password: z.string().min(6, 'Password too short'),
})

export const ProfileSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1),
  email: z.email(),
  role: z.enum(['admin']),
  position: z.string(),
})

export type LoginInput = z.infer<typeof LoginSchema>
export type Profile = z.infer<typeof ProfileSchema>