import { ENDPOINTS } from "@/lib/api/endpoints";
import { apiSlice } from "../slice/apiSlice";

export const categoriesApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createCategory:builder.mutation({
            query:(category)=>({
                url:ENDPOINTS.categories.create,
                method:"POST",
                body:category,
                headers:{"Content-Type":"application/json","Authorization":`Bearer ${localStorage.getItem("token")}`}
            })
        }),
        getCategories:builder.query({
            query:()=>({
                url:ENDPOINTS.categories.get,
                method:"GET",
            })
        }),
        deleteCategory:builder.mutation({
            query:(id)=>({
                url:ENDPOINTS.categories.delete.replace(":id",id),
                method:"POST",
                headers:{"Content-Type":"application/json","Authorization":`Bearer ${localStorage.getItem("token")}`}
            })
        }),
        updateCategory:builder.mutation({
            query:(category)=>({
                url:ENDPOINTS.categories.update.replace(":id",category.id),
                method:"POST",
                body:category,
                headers:{"Content-Type":"application/json","Authorization":`Bearer ${localStorage.getItem("token")}`}
            })
        })
    })
})

export const {useCreateCategoryMutation,useGetCategoriesQuery,useDeleteCategoryMutation,useUpdateCategoryMutation}=categoriesApi