import React, { ReactElement } from 'react';
import OrderSheetRow from './OrderSheetRow/OrderSheetRow';
import { Table, TableHead, TableBody } from '@mui/material';
import * as M from './OrderSheet.styled';
import { OrderSheetProps } from './OrderSheet.type';

const OrderSheet = ({ orderSheet }: OrderSheetProps): ReactElement => {
  return (
    <>
      {orderSheet && (
        <M.MUIContainer>
          <Table
            sx={{ minWidth: 650, position: 'relative' }}
            padding="none"
            size="small"
            aria-label="a dense table"
          >
            <TableHead sx={{ backgroundColor: 'primary.xlight' }}>
              <OrderSheetRow orderName="전체" order={orderSheet[0]} isHeader={true} />
            </TableHead>
            <TableBody>
              {orderSheet.map((order, index) => (
                <OrderSheetRow key={index} orderName={order.orderName} order={order} hover />
              ))}
            </TableBody>
          </Table>
        </M.MUIContainer>
      )}
    </>
  );
};

export default OrderSheet;
