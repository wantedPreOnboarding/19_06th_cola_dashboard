import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import OrderSheet from './orderSheet.type';

export const orderSheetApi = createApi({
  reducerPath: 'orderSheetApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  endpoints: builder => ({
    getOrderSheet: builder.query<OrderSheet, null>({
      query: () => `/data/db.json`,
    }),
  }),
});

export const { useGetOrderSheetQuery } = orderSheetApi;
