import { Request, Response } from 'express'
import { supabase } from '../db/supabase'
import { sendResponse } from '../utils/response'

export const createCategory = async (req: Request, res: Response) => {
  const { name, slug } = req.body

  const { data, error } = await supabase
    .from('categories')
    .insert({ name, slug })
    .select()
    .single()

  if (error) return sendResponse(res, 400, error.message)
  return sendResponse(res, 201, 'Category created successfully', data)
}

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, slug } = req.body

  const { data, error } = await supabase
    .from('categories')
    .update({ name, slug })
    .eq('id', id)
    .select()
    .single()

  if (error) return sendResponse(res, 400, error.message)
  return sendResponse(res, 200, 'Category updated successfully', data)
}

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params

  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id)

  if (error) return sendResponse(res, 400, error.message)
  return sendResponse(res, 200, 'Category deleted successfully')
}

export const getCategories = async (req: Request, res: Response) => {
  const { data, error, count } = await supabase
    .from('categories')
    .select('*, products(id)', { count: 'exact' })
    .order('name', { ascending: true })

  if (error) return sendResponse(res, 400, error.message)

  const categories = data.map((category) => ({
    ...category,
    productCount: category.products.length,
    products: undefined, // remove raw products array
  }))

  return sendResponse(res, 200, 'Categories fetched successfully', {
    totalCategories: count,
    categories,
  })
}