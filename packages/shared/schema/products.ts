import { z } from 'zod'

export const ProductSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  category_id: z.string().min(1, 'Category is required'),
  price: z.number().positive('Price must be positive'),
  description: z.string().optional(),
  image_url: z.string().optional(),
  featured: z.boolean().default(false),
})

export const UpdateProductSchema = ProductSchema.partial()

export type ProductInput = z.infer<typeof ProductSchema>
export type UpdateProductInput = z.infer<typeof UpdateProductSchema>