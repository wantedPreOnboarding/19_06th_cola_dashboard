import React, { ReactElement } from 'react';
//Redux
import { useDispatch } from 'react-redux';
import { renewalModalId, renewalOpenState } from 'redux/slices/modal';
//Type
import { ORDER_SHEET_KEY_MAP } from 'consts/orderSheet';
import OrderSheetRowProps from './OrderSheetRow.type';
import { Order } from 'redux/services/orderSheet.type';
//Style
import { Checkbox, Divider, TableCell } from '@mui/material';
import * as M from './OrderSheetRow.styled';
import { MUProps } from 'types/props';

const OrderSheetRow = ({
  order,
  isHeader,
  hover = false,
  columns,
  stickyTop,
  sx,
  onClickHandler,
}: MUProps<OrderSheetRowProps>): ReactElement => {
  const dispatch = useDispatch();

  const filteredOrder = Object.entries(order).filter(([key]: (keyof Order)[]) =>
    (columns as string[]).includes(key),
  );

  const updateModalState = (id?: number) => {
    if (!isHeader) {
      id && dispatch(renewalModalId(id - 1));
      dispatch(renewalOpenState(true));
    }
  };

  const modalHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLElement) {
      const { nodeName } = event.target;
      nodeName === 'INPUT'
        ? isHeader
          ? onClickHandler?.()
          : onClickHandler?.(order.orderId)
        : updateModalState?.(order.id);
    }
  };

  return (
    <M.MUITableRow
      hover={hover}
      {...(stickyTop !== undefined && {
        sx: {
          position: 'sticky',
          zIndex: 100,
          top: stickyTop,
          cursor: !isHeader ? 'pointer' : 'default',
          ...sx,
        },
      })}
      onClick={modalHandler}
    >
      {!isHeader ? (
        <MemoTableCheckBox isHeader={isHeader} isChecked={!!stickyTop} />
      ) : (
        <TableCell component={isHeader ? 'th' : undefined} />
      )}

      {filteredOrder.map(([key, value], index) => (
        <MemoTableCell
          key={key + index}
          isHeader={isHeader}
          value={isHeader ? ORDER_SHEET_KEY_MAP[key as keyof Order] : value}
        />
      ))}
    </M.MUITableRow>
  );
};

const MemoTableCheckBox = React.memo(
  ({ isHeader, isChecked }: { isHeader: OrderSheetRowProps['isHeader']; isChecked?: boolean }) => (
    <TableCell
      component={isHeader ? 'th' : undefined}
      scope="row"
      align="center"
      sx={{ width: '40px' }}
    >
      <Checkbox checked={isChecked} />
    </TableCell>
  ),
);

MemoTableCheckBox.displayName = 'MemoTableCheckBox';

const MemoTableCell = React.memo(
  ({ isHeader, value }: { isHeader: OrderSheetRowProps['isHeader']; value: string | number }) => (
    <TableCell component={isHeader ? 'th' : undefined} scope="row">
      <M.MUITableCellInnerContainer>
        <Divider orientation="vertical" flexItem />
        <span>{value}</span>
      </M.MUITableCellInnerContainer>
    </TableCell>
  ),
);

MemoTableCell.displayName = 'MemoTableCell';

export default React.memo(OrderSheetRow);
