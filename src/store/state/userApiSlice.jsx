import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => (
        console.log(body),
        {
          url: "/auth/authenticate",
          method: "POST",
          body,
          credentials: "include",
        },
        console.log("testing")
      ),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  userApiSlice;

export default userApiSlice;
