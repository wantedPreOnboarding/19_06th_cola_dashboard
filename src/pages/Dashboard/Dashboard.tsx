import React, { ReactElement } from 'react';
import { useGetOrderSheetQuery } from 'redux/services/orderSheet';

const Dashboard = (): ReactElement => {
  const { data, error, isLoading } = useGetOrderSheetQuery(null);
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data[0].id}</h3>
        </>
      ) : null}
    </div>
  );
};
export default Dashboard;
