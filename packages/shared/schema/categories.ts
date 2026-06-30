import { z } from 'zod'

export const CategorySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  slug: z.string().min(1, 'Slug is required'),
})

export const UpdateCategorySchema = CategorySchema.partial()

export type CategoryInput = z.infer<typeof CategorySchema>
export type UpdateCategoryInput = z.infer<typeof UpdateCategorySchema>