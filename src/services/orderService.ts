import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utlils/constant";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL.concat("order") }),
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url: "list",
      }),
    }),
    getOrder: builder.query({
      query: (orderId) => `/${orderId}`,
    }),
  }),
});

export const { useGetAllOrderQuery } = orderApi;
