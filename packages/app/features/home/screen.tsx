import { A, H1, P, Text, TextLink } from 'app/design/typography';
import { Row } from 'app/design/layout';
import { View } from 'app/design/view';

import { MotiLink } from 'solito/moti';
import { useGetFinancialReportQuery } from 'app/api/financialReport/financialReportApi';
import { financialReport } from 'app/config/urlMAS';
import { loadFinancialReport } from 'app/api/financialReport/financialReportSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export function HomeScreen() {
  const { data, isSuccess } = useGetFinancialReportQuery(
    financialReport('HDC', 'CDKT', 'Y', '2022')
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(loadFinancialReport(data));
    }
    return () => {};
  }, [data]);

  return (
    <View className="flex-1 items-center p-3">
      <H1>Phân Tích</H1>
      <div className="bg-gray-100">
        <div className="-black h-screen p-5">
          <div className="row-span-2 grid h-3/5 grid-cols-5 bg-white  shadow-lg">
            <div className="row-span-2 border pl-4 pt-4 ">
              <h3 className="font-semibold">Key Partners:</h3>
            </div>
            <div className="row-span-1 border pl-4 pt-4 ">
              <h3 className="font-semibold">Key activities:</h3>
            </div>
            <div className="row-span-2 border pl-4 pt-4 ">
              <h3 className="font-semibold">Value propositions:</h3>
            </div>
            <div className="border pl-4 pt-4 font-semibold">
              <h3 className="font-semibold">Customer relationships:</h3>
            </div>
            <div className="row-span-2 border pl-4 pt-4 ">
              <h3 className="font-semibold">Customer segments:</h3>
            </div>
            <div className="border pl-4 pt-4 ">
              <h3 className="font-semibold">Key resources: </h3>
            </div>
            <div className="border pl-4 pt-4 ">
              <h3 className="font-semibold">Channels</h3>
            </div>
          </div>

          <div className="grid h-52 grid-cols-2 bg-white  shadow-lg">
            <div className="border pl-4 pt-4 ">
              <h3 className="font-semibold">Cost structure:</h3>
            </div>
            <div className="border pl-4 pt-4 ">
              <h3 className="font-semibold">Revenue streams:</h3>
            </div>
          </div>

          <div className="my-4 flex items-center space-x-6 bg-white p-5 shadow-lg">
            <div className="flex w-72 space-x-4 rounded-lg bg-gray-100 p-4">
              <input
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Article name or keyword..."
              />
            </div>
            <div className="flex cursor-pointer rounded-lg px-4 py-3 font-semibold text-gray-500">
              <span>All categorie</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="duration-3000 cursor-pointer rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:shadow-lg">
              <span>Add</span>
            </div>
          </div>
        </div>
      </div>
    </View>
  );
}
