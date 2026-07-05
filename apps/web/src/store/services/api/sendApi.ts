import { ENDPOINTS } from "@/lib/api/endpoints";
import { apiSlice } from "../slice/apiSlice";

const sendApi=apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendAMessage: builder.mutation({
      query: (message) => ({
        url: ENDPOINTS.contact.sendAMessage,
        method: "POST",
        body: message,
      }),
    }),
  }),
});
export const { useSendAMessageMutation } = sendApi