import { Router } from 'express'
import { validate } from '../middleware/validations'
import { forgotPassword, getProfile, login, logout, updatePassword } from '../controllers/auth'
import { LoginSchema } from '../../../packages/shared/schema/auth'
import { authMiddleware } from '../middleware/auth'


const router = Router()

router.post('/login', validate(LoginSchema), login)
router.post('/logout', authMiddleware, logout)
router.post('/forgot-password', forgotPassword)
router.post('/update-password', updatePassword)

router.get('/profile', authMiddleware, getProfile)


export default router