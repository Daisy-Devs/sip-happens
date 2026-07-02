import { ENDPOINTS } from "@/lib/api/endpoints";
import { apiSlice } from "../slice/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({ url: ENDPOINTS.products.getCategory, method: "GET" }),
    }),
    getUserProducts: builder.query({
      query: ({ search, category, tag, page }) => {
        const params = new URLSearchParams();
        if (search) params.append("search", search);
        if (category && category !== "all") {
          params.append("category", category);
        }
        if (tag) {
          params.append("tag", tag);
        }
        if (page) {
          params.append("page", String(page));
        }
        return {
          url: `${ENDPOINTS.products.getProduct}?${params.toString()}`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 300,
    }),
    getFeaturedProducts: builder.query({
      query: () => ({
        url: ENDPOINTS.products.getFeaturedProduct,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetCategoryQuery,
  useGetUserProductsQuery,
  useGetFeaturedProductsQuery,
} = productApi;
