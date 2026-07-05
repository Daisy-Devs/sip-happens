import { RootState } from "@/store/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "@sip-happens/shared";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    responseHandler: async (response) => {
      if (response.status == 500) toast.error("Internal server error");
    },
  }),
  endpoints: () => ({}),
});
