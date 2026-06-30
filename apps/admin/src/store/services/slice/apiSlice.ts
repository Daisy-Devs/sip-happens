import { RootState } from "@/store/store";
import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    responseHandler: (response) => response.json().then((res) => res.data),

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
