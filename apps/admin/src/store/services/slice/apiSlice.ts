import baseQueryWithAuth from "@/lib/api/baseQuery";
import {
  createApi,
} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ['Products', 'Categories'],
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}),
});
