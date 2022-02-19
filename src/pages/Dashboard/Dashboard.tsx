import React from 'react';
import { useGetOrderSheetQuery } from 'redux/services/orderSheet';
import { FloatFilterBox } from 'components/Filtering';
import OrderSheet from 'components/OrderSheet/OrderSheet';
import { Modal } from 'components/common';
const Dashboard = () => {
  const { data, error, isLoading } = useGetOrderSheetQuery(null);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (data) {
    return (
      <>
        <Modal />
        <FloatFilterBox />
        <OrderSheet orderSheet={data} />;
      </>
    );
  }

  return null;
};
export default Dashboard;
