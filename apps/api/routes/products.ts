import { Router } from 'express'
import { authMiddleware } from '../middleware/auth'
import { validate } from '../middleware/validations'
import { ProductSchema, UpdateProductSchema } from '../../../packages/shared/schema/index'
import {
  getProducts,
  getFeaturedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getUserProducts,
} from '../controllers/products'
import { deleteProductImage, uploadProductImage } from '../controllers/cloundinary'
import { upload } from '../middleware/cloundinary'

const router = Router()

// cloudinary
router.post('/image/upload', authMiddleware, upload.single('image'), uploadProductImage)
router.delete('/image/delete', authMiddleware, deleteProductImage)

router.post('/create', authMiddleware, validate(ProductSchema), createProduct)
router.post('/update/:id', authMiddleware, validate(UpdateProductSchema), updateProduct)
router.post('/delete/:id', authMiddleware, deleteProduct)

router.get('/', getProducts)
router.get('/user', getUserProducts)
router.get('/featured', getFeaturedProducts)

export default router