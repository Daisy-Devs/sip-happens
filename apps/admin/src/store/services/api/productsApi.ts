import { ENDPOINTS } from "@/lib/api/endpoints";
import { apiSlice } from "../slice/apiSlice";

export const productsApi=apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints:(builder)=>({
        createProduct:builder.mutation({
            query:(product)=>({
                url:ENDPOINTS.products.create,
                method:"POST",
                headers:{"Content-Type":"application/json","Authorization":`Bearer ${localStorage.getItem("token")}`},
                body:product
            })
        }),
        getProducts:builder.query({
            query:()=>({
                url:ENDPOINTS.products.get,
                method:"GET"
            })
        }),
        deleteProduct:builder.mutation({
            query:(id)=>({
                url:ENDPOINTS.products.delete.replace(":id",id),
                method:"POST",
                headers:{"Content-Type":"application/json","Authorization":`Bearer ${localStorage.getItem("token")}`},
            })
        }),
        updateProduct:builder.mutation({
            query:(product)=>({
                url:ENDPOINTS.products.update.replace(":id",product.id),
                method:"POST",
                headers:{"Content-Type":"application/json","Authorization":`Bearer ${localStorage.getItem("token")}`},
                body:product
            })
        }),
        uploadProductImage:builder.mutation({
            query:(image)=>({
                url:ENDPOINTS.products.uploadImage,
                method:"POST",
                headers:{"Content-Type":"multipart/form-data","Authorization":`Bearer ${localStorage.getItem("token")}`},
                body:image
            })
        }),
        deleteProductImage:builder.mutation({
            query:(id)=>({
                url:ENDPOINTS.products.deleteImage.replace(":id",id),
                method:"POST",
                headers:{"Content-Type":"multipart/form-data","Authorization":`Bearer ${localStorage.getItem("token")}`},
            })
        })
    })
})

export const {useCreateProductMutation,useGetProductsQuery,useDeleteProductMutation,useUpdateProductMutation,useUploadProductImageMutation,useDeleteProductImageMutation}=productsApi