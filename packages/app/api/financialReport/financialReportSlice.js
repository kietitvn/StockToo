import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  financialReport: {},
};

export const financialReportSlice = createSlice({
  name: "financialReport",
  initialState,
  reducers: {
    loadFinancialReport: (state, action) => {
      state.financialReport = action.payload;
    },
    resetFinancialReport: (state, action) => {
      state.financialReport = initialState;
    },
  },
});

export const { loadFinancialReport, resetFinancialReport } = financialReportSlice.actions;
export const selectFinancialReport = (state) => state.financialReport;
export default financialReportSlice.reducer;
