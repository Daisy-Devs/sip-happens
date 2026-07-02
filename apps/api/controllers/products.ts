import { Request, Response } from 'express'
import { supabase } from '../db/supabase'
import { sendResponse } from '../utils/response'

export const createProduct = async (req: Request, res: Response) => {
  const { name, category_id, price, description, image_url, status, featured, tag } = req.body

  const { data, error } = await supabase
    .from('products')
    .insert({ name, category_id, price, description, image_url, status, featured, tag })
    .select()
    .single()

  if (error) return sendResponse(res, 400, error.message)
  return sendResponse(res, 201, 'Product created successfully', data)
}

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, category_id, price, description, image_url, status, featured, tag } = req.body

  const { data, error } = await supabase
    .from('products')
    .update({ name, category_id, price, description, image_url, status, featured, tag })
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
  const { search, category, tag } = req.query

  let query = supabase
    .from('products')
    .select('*, categories(name, slug)')
    .order('created_at', { ascending: false })

  if (search) query = query.ilike('name', `%${search}%`)
  if (category) query = query.eq('category_id', category)
  if (tag) query = query.eq('tag', tag)

  const { data, error } = await query

  if (error) return sendResponse(res, 400, error.message)

  const totalItems = data.length
  const featuredItems = data.filter((p) => p.featured === true).length

  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('id')

  if (catError) return sendResponse(res, 400, catError.message)

  return sendResponse(res, 200, 'Products fetched successfully', {
    stats: {
      totalItems,
      activeCategories: categories.length,
      featuredItems,
    },
    products: data,
  })
}

export const getUserProducts = async (req: Request, res: Response) => {
  const { search, category, tag, page = '1' } = req.query

  const pageSize = 8
  const pageNumber = parseInt(page as string)
  const from = (pageNumber - 1) * pageSize
  const to = from + pageSize - 1

  let query = supabase
    .from('products')
    .select('*, categories(name, slug)', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  if (search) query = query.ilike('name', `%${search}%`)
  if (category && category !== 'all') query = query.eq('category_id', category)
  if (tag) query = query.eq('tag', tag)

  const { data, error, count } = await query

  if (error) return sendResponse(res, 400, error.message)

  return sendResponse(res, 200, 'Products fetched successfully', {
    products: data,
    pagination: {
      currentPage: pageNumber,
      totalPages: Math.ceil((count || 0) / pageSize),
      totalItems: count,
      pageSize,
    }
  })
}

export const getFeaturedProducts = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('products')
    .select('*, categories(name, slug)')
    .eq('featured', true)

  if (error) return sendResponse(res, 400, error.message)
  return sendResponse(res, 200, 'Featured products fetched successfully', data)
}