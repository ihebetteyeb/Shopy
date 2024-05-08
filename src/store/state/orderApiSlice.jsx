import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../queries";

const orderApiSlice = createApi({
  reducerPath: "orderApi",
  baseQuery,
  endpoints: (builder) => ({
    orders: builder.query({
      query: () => ({
        url: "/order/getOrders",
        method: "GET",
      }),
    }),
  }),
});

export const { useOrdersQuery } = orderApiSlice;
export default orderApiSlice;
