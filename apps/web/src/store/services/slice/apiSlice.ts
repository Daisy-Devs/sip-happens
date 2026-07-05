import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "@sip-happens/shared";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryWithInterceptor = async (args: any, api: any, extraOptions: any) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 500) {
    toast.error("Internal server error");
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: [],
  baseQuery: baseQueryWithInterceptor, 
  endpoints: () => ({}),
});