import { apiSlice } from "../slice/apiSlice";

export const authApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(credentials)=>({
                url:"/admin/login",
                method:"POST",
                body:credentials
            })
        })
    })
})

export const {useLoginMutation}=authApi