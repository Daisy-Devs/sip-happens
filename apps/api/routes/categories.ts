import { Router } from 'express'
import { validate } from '../middleware/validations'
import { authMiddleware } from '../middleware/auth'
import { CategorySchema, UpdateCategorySchema } from '../../../packages/shared/schema'
import { createCategory, deleteCategory, getCategories, updateCategory } from '../controllers/categories'

const router = Router()

router.post('/create', authMiddleware, validate(CategorySchema), createCategory)
router.post('/update/:id', authMiddleware, validate(UpdateCategorySchema), updateCategory)
router.post('/delete/:id', authMiddleware, deleteCategory)

router.get('/', getCategories)


export default router