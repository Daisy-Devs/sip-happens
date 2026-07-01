import { Request, Response } from 'express'
import { sendResponse } from '../utils/response'
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/cloundinary'

export const uploadProductImage = async (req: Request & { file?: Express.Multer.File }, res: Response) => {
  const file = req.file

  if (!file) return sendResponse(res, 400, 'Image is required')
  if (!file.mimetype.startsWith('image/')) return sendResponse(res, 400, 'Only image files allowed')
  if (file.size > 2 * 1024 * 1024) return sendResponse(res, 400, 'Max size is 2MB')

  const result = await uploadToCloudinary(file.buffer)

  return sendResponse(res, 200, 'Image uploaded successfully', {
    image: {
      name: file.originalname,
      url: result.secure_url,
      public_id: result.public_id,
      type: 'image',
    }
  })
}

export const deleteProductImage = async (req: Request, res: Response) => {
  const { public_id } = req.body

  if (!public_id) return sendResponse(res, 400, 'public_id is required')

  await deleteFromCloudinary(public_id)

  return sendResponse(res, 200, 'Image deleted successfully')
}