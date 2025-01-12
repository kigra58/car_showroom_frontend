import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utlils/constant";
import { ENDPOINTS } from "../routes/routes";

interface IAddNewProduct {
  title: string;
  description: string;
  price: number;
  categoryId: number;
  image: string;
}

const { PRODUCT_ROUTES } = ENDPOINTS;

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL.concat("product") }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => ({
        url: PRODUCT_ROUTES.PRODUCT_LIST,
      }),
    }),
    getProduct: builder.query({
      query: (productId) => `/${productId}`,
    }),
    addNewProduct: builder.mutation({
      query: (data) => ({
        url: PRODUCT_ROUTES.CREATE_NEW_PRODUCT,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllProductQuery, useGetProductQuery ,useAddNewProductMutation} = productApi;
