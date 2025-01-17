import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../routes/routes";
import { ENDPOINTS } from "../routes/endpoints";



const {PAYMENT_ROUTES}=ENDPOINTS;

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL.concat("payment") }),
  endpoints: (builder) => ({
    getAllPayment: builder.query({
      query: () => ({
        url: PAYMENT_ROUTES.PAYMENT_LIST,
      }),
    }),

    createPayemnt: builder.mutation({
        query: (data ) => ({
          url: PAYMENT_ROUTES.CREATE_NEW_PAYMENT,
          method: "POST",
          body: data,
        }),
      }),

    getPayment: builder.query({
      query: (paymentId) => `/${paymentId}`,
    }),
  }),
});

export const { useGetAllPaymentQuery, useGetPaymentQuery,useCreatePayemntMutation } = paymentApi;
