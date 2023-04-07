// import { error } from "console";

export const financialReport = (
  stockCode: string,
  reportType: "CDKT" | "KQKD" | "LCTT" | "CSTC" | "CTKH",
  termType: "Y" | "Q",
  periodFrom: string
) => {
//   if (stockCode == "" || periodFrom == "")
//     throw error("financialReport must have stockCode, period");
  //
  let periodString = "";
  if (termType == "Y") {
    const year = Number(periodFrom);
    for (let index = year; index >= year - 4; index--) {
      periodString += index.toString();
      if (index > year - 4) periodString += ",";
    }
  }
  //
  let path = `/financialReport?query=query{vsFinancialReportList(StockCode:%22${stockCode}%22,Type:%22${reportType}%22,TermType:%22${termType}%22,Reports:%22${periodString}%22){_id,ID,TermCode,YearPeriod,Content{Values{Name,NameEn,Value}}}}`;
  return path;
};
