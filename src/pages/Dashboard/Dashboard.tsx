import React, { ReactElement } from 'react';
import { useGetOrderSheetQuery } from 'redux/services/orderSheet';
import { FloatFilterBox } from 'components/Filtering';
import MenuBox from 'components/MenuBox/MenuBox';
import OrderSheet from 'components/OrderSheet/OrderSheet';

const Dashboard = (): ReactElement => {
  const { data, error, isLoading } = useGetOrderSheetQuery(null);
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : (
        <>
          <MenuBox />
          <FloatFilterBox />
          <OrderSheet orderSheet={data} isLoading={isLoading} />
        </>
      )}
    </div>
  );
};
export default Dashboard;
