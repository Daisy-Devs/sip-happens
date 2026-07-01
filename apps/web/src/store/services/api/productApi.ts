import { ENDPOINTS } from "@/lib/api/endpoints";
import { apiSlice } from "../slice/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({ url: ENDPOINTS.products.getCategory, method: "GET" }),
    }),
    
  }),
});
