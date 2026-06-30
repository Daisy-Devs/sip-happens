import { Request, Response } from 'express'
import { supabase } from '../db/supabase'
import { sendResponse } from '../utils/response'

export const createProduct = async (req: Request, res: Response) => {
  const { name, category_id, price, description, image_url, featured } = req.body

  const { data, error } = await supabase
    .from('products')
    .insert({ name, category_id, price, description, image_url, featured })
    .select()
    .single()

  if (error) return sendResponse(res, 400, error.message)
  return sendResponse(res, 201, 'Product created successfully', data)
}

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, category_id, price, description, image_url, featured } = req.body

  const { data, error } = await supabase
    .from('products')
    .update({ name, category_id, price, description, image_url, featured })
    .eq('id', id)
    .select()
    .single()

  if (error) return sendResponse(res, 400, error.message)
  return sendResponse(res, 200, 'Product updated successfully', data)
}

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  if (error) return sendResponse(res, 400, error.message)
  return sendResponse(res, 200, 'Product deleted successfully')
}

export const getProducts = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('products')
    .select('*, categories(name, slug)')
    .order('created_at', { ascending: false })

  if (error) return sendResponse(res, 400, error.message)
  return sendResponse(res, 200, 'Products fetched successfully', data)
}

export const getFeaturedProducts = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('products')
    .select('*, categories(name, slug)')
    .eq('featured', true)

  if (error) return sendResponse(res, 400, error.message)
  return sendResponse(res, 200, 'Featured products fetched successfully', data)
}