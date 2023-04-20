import { A, H1, P, Text, TextLink } from 'app/design/typography';
import { Input, Row } from 'app/design/layout';
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
      {/* <Row className="w-screen justify-around">
        <Input className="w-0 border" />
        <Input className="border" value="abc" />
        <Input className="border" value="abc" />
      </Row> */}
      <View className='w-screen h-2 grid-cols-3 border'>

      </View>
    </View>
  );
}
