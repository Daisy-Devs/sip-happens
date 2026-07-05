import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store/store";
import { toast } from "@sip-happens/shared";
import { updateToken } from "@/store/services/slice/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  responseHandler: async (response) => {
    if (response.status === 204) {
      return null;
    }

    const text = await response.text();

    if (!text) {
      return null;
    }

    const res = JSON.parse(text);

    return res.data ?? res;
  },
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth?.token;    
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error) {    
    switch (result.error.status) {
      case 401: {
        const refreshToken = (api.getState() as RootState).auth.refreshToken;

        const refreshResult = await baseQuery(
          {
            url: "/admin/refresh-token",
            method: "POST",
            body: {
              refresh_token: refreshToken,
            },
          },
          api,
          extraOptions,
        );
        
        if (refreshResult.data) {
          const { access_token } = refreshResult.data as {
            access_token: string;
          };
          const maxAge = 60 * 60 * 24 * 7;
        document.cookie = `token=${access_token}; path=/; max-age=${maxAge}`;
          api.dispatch(updateToken(access_token));

          // Retry the original request
          return await baseQuery(args, api, extraOptions);
        }

        window.location.href = "/session-expired";
        return result;
      }

      case 403:
        toast.error("Access denied");
        break;

      case 500:
        toast.error("Internal server error");
        break;
    }
  }

  return result;
};
export default baseQueryWithAuth;
