import React, { ReactElement } from 'react';
import { OrderSheetProps } from './OrderSheet.type';
import { Order } from 'redux/services/orderSheet.type';
import { ORDER_SHEET_KEY_MAP } from 'consts/orderSheet';
import { Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import * as M from './OrderSheet.styled';

const OrderSheet = ({ orderSheet, isLoading }: OrderSheetProps): ReactElement => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      {orderSheet && (
        <M.Container>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell component="th" scope="row" align="center">
                  <Checkbox aria-label="전체 선택" />
                </TableCell>
                {Object.keys(orderSheet[0]).map((col, index) => (
                  <TableCell component="th" scope="row" key={index}>
                    {ORDER_SHEET_KEY_MAP[col as keyof Order]}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orderSheet.map(order => (
                <TableRow key={order.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center">
                    <Checkbox aria-label={`${order.orderName} 선택`} />
                  </TableCell>
                  {Object.values(order).map((value, index) => (
                    <TableCell key={index} scope="row" align="center">
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </M.Container>
      )}
    </div>
  );
};

export default OrderSheet;
