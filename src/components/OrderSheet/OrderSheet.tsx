import React, { ReactElement, useCallback, useState } from 'react';
import OrderSheetRow from './OrderSheetRow/OrderSheetRow';
import { Table, TableHead, TableBody } from '@mui/material';
import * as M from './OrderSheet.styled';
import { OrderSheetProps } from './OrderSheet.type';
import { Order } from 'redux/services/orderSheet.type';

const OrderSheet = ({ orderSheet }: OrderSheetProps): ReactElement => {
  const initialFixedRows = orderSheet.map(row => ({ ...row, isFixed: false }));

  const [isFixedAllRows, setIsFixedAllRows] = useState<boolean>(false);
  const [hasFixStatusRows, setFixedRows] = React.useState(initialFixedRows);

  const updateRowFix = (rowId?: number) => {
    setFixedRows(
      hasFixStatusRows.map(row => {
        return row.orderId === rowId ? { ...row, isFixed: !row.isFixed } : row;
      }),
    );
  };

  const updateEveryRowsFix = useCallback(() => {
    setFixedRows(hasFixStatusRows.map(row => ({ ...row, isFixed: !isFixedAllRows })));
    setIsFixedAllRows(!isFixedAllRows);
  }, []);

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
        <M.MUIContainer>
          <Table
            sx={{ position: 'relative', borderCollapse: 'initial' }}
            padding="none"
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <OrderSheetRow
                orderName="전체"
                order={hasFixStatusRows[0]}
                isHeader={true}
                stickyTop={0}
                sx={{ backgroundColor: 'primary.xlight' }}
                onClickHandler={updateEveryRowsFix}
              />
            </TableHead>
            <TableBody>
              {hasFixStatusRows.map((order, index) => (
                <OrderSheetRow
                  key={index}
                  orderName={order.orderName}
                  order={order}
                  stickyTop={order.isFixed ? getIndexOfFixedRows(order.orderId) * 43 : undefined}
                  hover
                  onClickHandler={updateRowFix}
                />
              ))}
            </TableBody>
          </Table>
        </M.MUIContainer>
      )}
    </>
  );
};

export default OrderSheet;
