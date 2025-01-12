import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utlils/constant";
import { ICartData } from "../interface/interface";

// interface ICartList{
//   data: ICartData[]
// }

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL.concat("cart") }),
  tagTypes:["cart"],
  endpoints: (builder) => ({
    getCartItem: builder.query({
      query: (userId:number) => `list/${userId}`,
      providesTags:["cart"],
    }),
    updateCartItem: builder.mutation({
      query: (data: ICartData) => ({
        url: "update",
        method: "POST",
        body: data,
      }),
      invalidatesTags:["cart"]
    }),
    deleteCartItem: builder.mutation({
      query: ({
        userId,
        productId,
      }: {
        productId: number;
        userId: number;
      }) => ({
        url: `delete`,
        method: "DELETE",
        body:{userId, productId}
      }),
      invalidatesTags:["cart"]
    }),
  }),
});

export const {
  useGetCartItemQuery,
  useUpdateCartItemMutation,
  useDeleteCartItemMutation,
} = cartApi;
