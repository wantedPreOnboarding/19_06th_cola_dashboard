import React from 'react';
import { useGetOrderSheetQuery } from 'redux/services/orderSheet';
import { FloatFilterBox } from 'components/Filtering';
import OrderSheet from 'components/OrderSheet/OrderSheet';
import { Modal } from 'components/common';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Dashboard = () => {
  const { data, error, isLoading } = useGetOrderSheetQuery(null);
  if (isLoading) {
    return (
      <Box sx={{position:'absolute',top:'50%',left:'50%', transform: 'translate(-50%, -50%)'}} >
        <CircularProgress disableShrink />;
      </Box>
    )
  }

  else if (error) {
    return <div>Error!</div>;
  }

  else if (data) {
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
