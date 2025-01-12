import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utlils/constant";
import { ENDPOINTS } from "../routes/routes";

// interface IUpdateUserDetails {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
// }

const { USER_ROUTES } = ENDPOINTS;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL.concat("user") }),
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: USER_ROUTES.USER_LIST,
        method:"GET"
      }),
    }),
    getUser: builder.query({
      query: (userId) => `/${userId}`,
    }),

    updateUserDetail: builder.mutation({
      query: (data) => ({
        url: USER_ROUTES.USER_UPDATE,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllUserQuery, useGetUserQuery,useUpdateUserDetailMutation } = userApi;
