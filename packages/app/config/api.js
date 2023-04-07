import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mastrade.masvn.com/api/v2/vs",
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  // overrideExisting: true,
  tagTypes: ["FinancialReport"],
  endpoints: (builder) => ({}),
});
