import { z } from 'zod'

export const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message too short'),
})

export type ContactInput = z.infer<typeof ContactSchema>