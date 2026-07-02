import { Request, Response } from 'express'
import { Resend } from 'resend'
import { supabase } from '../db/supabase'
import { sendResponse } from '../utils/response'

const resend = new Resend(process.env.RESEND_API_KEY!)

export const sendMessage = async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body

  // Save to DB
  const { error: dbError } = await supabase
    .from('send_message')
    .insert({ name, email, subject, message })

  if (dbError) return sendResponse(res, 400, dbError.message)

  // Send email
  const { error: mailError } = await resend.emails.send({
    from: 'Sip Happens <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL!,
    subject: `New Message: ${subject}`,
    html: `
      <h2>New message from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  })

  if (mailError) return sendResponse(res, 400, mailError.message)

  return sendResponse(res, 200, 'Message sent successfully')
}