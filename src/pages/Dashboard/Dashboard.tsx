import React from 'react';
import { useGetOrderSheetQuery } from 'redux/services/orderSheet';
import { FloatFilterBox } from 'components/Filtering';
import MenuBox from 'components/MenuBox/MenuBox';
import OrderSheet from 'components/OrderSheet/OrderSheet';

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
        <MenuBox />
        <FloatFilterBox />
        <OrderSheet orderSheet={data} />;
      </>
    );
  }

  return null;
};
export default Dashboard;
