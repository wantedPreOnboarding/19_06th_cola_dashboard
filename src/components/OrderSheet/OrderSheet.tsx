import React, { ReactElement, useCallback, useState } from 'react';
//component
import OrderSheetRow from './OrderSheetRow/OrderSheetRow';
import MenuBox from 'components/MenuBox/MenuBox';
//redux
import { useAppSelector } from 'hooks';
import { useDispatch } from 'react-redux';
import { Order } from 'redux/services/orderSheet.type';
import { renewalModalId, renewalOpenState } from 'redux/slices/modal';
//style
import { Table, TableHead, TableBody } from '@mui/material';
import * as M from './OrderSheet.styled';
import { FilteredOrder, OrderSheetProps } from './OrderSheet.type';

const OrderSheet = ({ orderSheet }: OrderSheetProps): ReactElement => {
  const dispatch = useDispatch();
  const selectedColumns = useAppSelector(state => state.orderSheet.columns);

  const initialFixedRows = orderSheet.map(row => ({ ...row, isFixed: false }));

  const [isFixedAllRows, setIsFixedAllRows] = useState<boolean>(false);
  const [hasFixStatusRows, setFixedRows] = React.useState(initialFixedRows);
  const [currentModalId, setCurrentModalId] = useState<number>(0);

  const filteredOrderSheet = hasFixStatusRows.map(row =>
    selectedColumns.reduce((acc, cur) => ({ ...acc, [cur]: row[cur as keyof Order] }), {
      fakeId: row.orderId,
      isFixed: row.isFixed,
    }),
  ) as FilteredOrder[];

  const updateModalState = (id?: number) => {
    id && dispatch(renewalModalId(id - 1));
    dispatch(renewalOpenState(true));
  };

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

  const makeDisplayedColumns = (order: FilteredOrder) =>
    Object.keys(order)
      .filter(key => key !== 'fakeId')
      .reduce(
        (obj, key) => ({ ...obj, [key]: order[key as keyof typeof order] }),
        {},
      ) as FilteredOrder;

  return (
    <>
      {orderSheet && (
        <M.MUIContainer>
          <MenuBox />
          <Table
            sx={{ position: 'relative', borderCollapse: 'initial' }}
            padding="none"
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <OrderSheetRow
                order={makeDisplayedColumns(filteredOrderSheet[0])}
                isHeader={true}
                stickyTop={0}
                sx={{ backgroundColor: 'primary.xlight' }}
                onClickHandler={updateEveryRowsFix}
              />
            </TableHead>
            <TableBody>
              {filteredOrderSheet.map((order, index) => {
                const displayedOrder = makeDisplayedColumns(order);
                return (
                  <OrderSheetRow
                    key={index}
                    order={displayedOrder}
                    stickyTop={order.isFixed ? getIndexOfFixedRows(order.fakeId) * 43 : undefined}
                    hover
                    onClickHandler={updateRowFix}
                    modalHandler={updateModalState}
                  />
                );
              })}
            </TableBody>
          </Table>
        </M.MUIContainer>
      )}
    </>
  );
};

export default OrderSheet;
