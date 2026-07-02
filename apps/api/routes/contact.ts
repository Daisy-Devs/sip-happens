import { Router } from 'express'
import { validate } from '../middleware/validations'

import { ContactSchema } from '../../../packages/shared/schema/contact'
import { sendMessage } from '../controllers/contact'


const router = Router()

router.post('/send', validate(ContactSchema), sendMessage)

export default router