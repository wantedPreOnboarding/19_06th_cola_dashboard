import React from 'react';
import { useGetOrderSheetQuery } from 'redux/services/orderSheet';
import { OrderSheet } from 'components';

const Dashboard = () => {
  const { data, error, isLoading } = useGetOrderSheetQuery(null);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (data) {
    return <OrderSheet orderSheet={data} />;
  }

  return null;
};
export default Dashboard;
