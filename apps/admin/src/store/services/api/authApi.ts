import { ENDPOINTS } from "@/lib/api/endpoints";
import { apiSlice } from "../slice/apiSlice";

export const authApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(credentials)=>({
                url:ENDPOINTS.auth.login,
                method:"POST",
                body:credentials
            }),
        }),
        logout:builder.mutation<void, void>({
            query:()=>({
                url:ENDPOINTS.auth.logout,
                method:"POST",
            }),
        }),
    })
})

export const {useLoginMutation, useLogoutMutation}=authApi