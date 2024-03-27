import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({

    baseUrl: "http://localhost:8090",

  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/authenticate",
        method: "POST",
        body,
      }),
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
    test: builder.query({
      query: () => ({
        url: "/todos/1",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useTestQuery,
} = userApiSlice;

export default userApiSlice;
