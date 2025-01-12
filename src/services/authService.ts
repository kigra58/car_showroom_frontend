import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utlils/constant";
import { ENDPOINTS } from "../routes/routes";

interface ISignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// interface ILogin {
//   email: string;
//   password: string;
// }

interface IChangePassword {
  password: string;
  newPassword: string;
  oldPassword: string;
}

interface IForgotPassword {
  email: string;
}

const { AUTH_ROUTES } = ENDPOINTS;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL.concat("auth") }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data: ISignup) => ({
        url: AUTH_ROUTES.SIGNUP,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: AUTH_ROUTES.LOGIN,
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data: IChangePassword) => ({
        url: AUTH_ROUTES.CHANGE_PASSWORD,
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data: IForgotPassword) => ({
        url: AUTH_ROUTES.FORGOT_PASSWORD,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useSignupMutation,
} = authApi;
