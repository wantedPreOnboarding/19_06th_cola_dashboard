import React, { ReactElement } from 'react';
import { useGetOrderSheetQuery } from 'redux/services/orderSheet';
import { OrderSheet } from 'components';

const Dashboard = (): ReactElement => {
  const { data, error, isLoading } = useGetOrderSheetQuery(null);
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : (
        <>
          <OrderSheet orderSheet={data} isLoading={isLoading} />
        </>
      )}
    </div>
  );
};
export default Dashboard;
