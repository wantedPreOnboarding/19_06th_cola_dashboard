import React, { ReactElement } from 'react';
import { Checkbox, Divider, TableCell } from '@mui/material';
import * as M from './OrderSheetRow.styled';
import { MUProps } from 'types/props';
import { ORDER_SHEET_KEY_MAP } from 'consts/orderSheet';
import OrderSheetRowProps from './OrderSheetRow.type';
import { Order } from 'redux/services/orderSheet.type';

const OrderSheetRow = ({
  order,
  isHeader,
  hover = false,
  columns,
  stickyTop,
  sx,
  onClickHandler,
  modalHandler,
}: MUProps<OrderSheetRowProps>): ReactElement => {
  const filteredOrder = Object.entries(order).filter(([key]: (keyof Order)[]) =>
    (columns as string[]).includes(key),
  );

  return (
    <M.MUITableRow
      hover={hover}
      {...(stickyTop !== undefined && {
        sx: { position: 'sticky', zIndex: 1, top: stickyTop, ...sx },
      })}
      onClick={event => {
        if (event.target instanceof HTMLElement) {
          const { nodeName } = event.target;
          nodeName === 'INPUT'
            ? isHeader
              ? onClickHandler?.()
              : onClickHandler?.(order.orderId)
            : modalHandler?.(order.id);
        }
      }}
    >
      <MemoTableCheckBox isHeader={isHeader} isChecked={!!stickyTop} />

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
