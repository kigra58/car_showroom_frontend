import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../routes/endpoints";
import { BASE_URL } from "../routes/routes";



// interface IUpdateUserDetails {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
// }

const { USER } = ENDPOINTS;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL.concat("user") }),
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: USER.PROFILE,
        method:"GET"
      }),
    }),
    getUser: builder.query({
      query: (userId) => `/${userId}`,
    }),

    updateUserDetail: builder.mutation({
      query: (data) => ({
        url: USER.UPDATE_PROFILE,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllUserQuery, useGetUserQuery,useUpdateUserDetailMutation } = userApi;
