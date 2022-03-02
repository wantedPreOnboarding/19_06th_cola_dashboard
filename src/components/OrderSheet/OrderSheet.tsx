import React, { ReactElement, useCallback, useState } from 'react';
//component
import OrderSheetRow from './OrderSheetRow/OrderSheetRow';
import MenuBox from 'components/MenuBox/MenuBox';
//redux
import { useAppSelector } from 'hooks';
import { Order } from 'redux/services/orderSheet.type';
//style
import { Table, TableHead, TableBody } from '@mui/material';
import * as M from './OrderSheet.styled';
import { FixedOrderSheet, OrderSheetProps } from './OrderSheet.type';

const OrderSheet = ({ orderSheet }: OrderSheetProps): ReactElement => {
  const selectedColumns = useAppSelector(state => state.orderSheet.columns) as (keyof Order)[];

  const initialFixedRows = orderSheet.map(row => ({ ...row, isFixed: false }));

  const [hasFixStatusRows, setFixedRows] = useState<FixedOrderSheet>(initialFixedRows);

  const updateRowFix = useCallback(
    (rowId?: number) => {
      setFixedRows(
        hasFixStatusRows.map(row => {
          return row.orderId === rowId ? { ...row, isFixed: !row.isFixed } : row;
        }),
      );
    },
    [hasFixStatusRows],
  );

  const getIndexOfFixedRows = useCallback(
    (id: number) => {
      return (
        hasFixStatusRows
          .filter(({ isFixed }) => isFixed)
          .findIndex(({ orderId }) => orderId === id) + 1
      );
    },
    [hasFixStatusRows],
  );

  return (
    <>
      {orderSheet && (
        <M.OrderSheetContainer>
          <MenuBox />
          <Table
            sx={{ position: 'relative', borderCollapse: 'initial' }}
            padding="none"
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <OrderSheetRow
                order={orderSheet[0]}
                isHeader={true}
                stickyTop={0}
                columns={selectedColumns}
                sx={{ backgroundColor: 'primary.xlight' }}
              />
            </TableHead>
            <TableBody>
              {orderSheet.map(order => {
                return (
                  <OrderSheetRow
                    key={order.orderId}
                    order={order}
                    stickyTop={getIndexOfFixedRows(order.orderId) * 43 || undefined}
                    hover
                    columns={selectedColumns}
                    onClickHandler={updateRowFix}
                  />
                );
              })}
            </TableBody>
          </Table>
        </M.OrderSheetContainer>
      )}
    </>
  );
};

export default OrderSheet;
