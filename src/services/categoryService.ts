import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utlils/constant";
import { ENDPOINTS } from "../routes/routes";

interface IUpdateUserDetails {
  firstName: string;
  lastName: string;
  email: string;
}

const { CATEGORY_ROUTES } = ENDPOINTS;

export const cateogoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL.concat("category") }),
  endpoints: (builder) => ({
    getAllCateogry: builder.query({
      query: () => ({
        url: CATEGORY_ROUTES.CATEGORY_LIST,
      }),
    }),
    getProductByCategory: builder.query({
      query: (categoryId) =>({
        url: `${CATEGORY_ROUTES.PRODUCT_BY_CATEGORY}?categoryId=${categoryId}`,
        method:"GET",
      }),
    }),

    updateCategoryDetail: builder.mutation({
      query: (data: IUpdateUserDetails) => ({
        url: CATEGORY_ROUTES.UPDATE_CATEGORY,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllCateogryQuery,
  useUpdateCategoryDetailMutation,
  useGetProductByCategoryQuery
} = cateogoryApi;
