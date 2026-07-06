import { ENDPOINTS } from "@/lib/api/endpoints";
import { apiSlice } from "../slice/apiSlice";

const productsApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (product) => ({
        url: ENDPOINTS.products.create,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
    getProducts: builder.query({
      query: ({ search }) => {
        const params = new URLSearchParams();
        console.log("pp", params);

        if (search) params.append("search", search);
        return {
          url: `${ENDPOINTS.products.get}?${params.toString()}`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 300,
      providesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: ENDPOINTS.products.delete.replace(":id", id),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: ENDPOINTS.products.update.replace(":id", product.id),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
    uploadProductImage: builder.mutation({
      query: (image) => ({
        url: ENDPOINTS.products.uploadImage,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: image,
      }),
    }),
    deleteProductImage: builder.mutation({
      query: (id) => ({
        url: ENDPOINTS.products.deleteImage.replace(":id", id),
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductImageMutation,
} = productsApi;
