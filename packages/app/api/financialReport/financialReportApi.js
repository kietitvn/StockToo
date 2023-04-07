
import { api } from "app/config/api";

export const financialReportApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFinancialReport: builder.query({
      query: (url) => ({
        url: url,
        method: "GET",
      }),
      providesTags: ["FinancialReport"],
    }),
  }),
});

export const { useGetFinancialReportQuery } = financialReportApi;
