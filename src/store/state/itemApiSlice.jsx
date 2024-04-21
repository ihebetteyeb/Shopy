import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../queries";

const itemApiSlice = createApi({
  reducerPath: "itemApi",
  baseQuery,
  tagTypes: ["Item"],
  endpoints: (builder) => ({
    items: builder.query({
      query: () => ({
        url: "/item/getItems",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useItemsQuery } = itemApiSlice;

export default itemApiSlice;
