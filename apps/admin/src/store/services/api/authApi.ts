import { ENDPOINTS } from "@/lib/api/endpoints";
import { apiSlice } from "../slice/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: ENDPOINTS.auth.login,
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: ENDPOINTS.auth.logout,
        method: "POST",
      }),
    }),
    forgotPassword: builder.mutation<{ message: string }, { email: string }>({
      query: (body) => ({
        url: ENDPOINTS.auth.forgotPassword,
        method: "POST",
        body,
      }),
    }),
    updatePassword: builder.mutation<{ message: string }, { password: string }>(
      {
        query: (body) => ({
          url: ENDPOINTS.auth.updatePassword,
          method: "POST",
          body,
        }),
      },
    ),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useUpdatePasswordMutation,
} = authApi;
