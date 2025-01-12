import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utlils/constant";

interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const contactusApi = createApi({
  reducerPath: "contactusApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL.concat("contact") }),
  endpoints: (builder) => ({
    postData: builder.mutation({
      query: (data: IContact) => ({
        url: "",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostDataMutation } = contactusApi;
