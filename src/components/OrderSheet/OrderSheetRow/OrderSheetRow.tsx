import { Checkbox, Divider, TableCell } from '@mui/material';
import React, { ReactElement } from 'react';
import * as M from './OrderSheetRow.styled';
import { MUProps } from 'types/props';
import OrderSheetRowProps from './OrderSheetRow.type';
import { ORDER_SHEET_KEY_MAP } from 'consts/orderSheet';
import { Order } from 'redux/services/orderSheet.type';
import { FixedOrder } from '../OrderSheet.type';

const OrderSheetRow = ({
  order,
  isHeader,
  hover = false,
  columns,
  stickyTop,
  sx,
  onClickHandler,
}: MUProps<OrderSheetRowProps>): ReactElement => {
  const filteredOrder = Object.entries(order).filter(([key]: (keyof FixedOrder)[]) =>
    (columns as string[]).includes(key),
  );

  return (
    <M.MUITableRow
      hover={hover}
      {...(stickyTop !== undefined && {
        sx: { position: 'sticky', zIndex: 1, top: stickyTop, ...sx },
      })}
      onClick={() => (isHeader ? onClickHandler?.() : onClickHandler?.(order.orderId))}
    >
      <TableCell
        component={isHeader ? 'th' : undefined}
        scope="row"
        align="center"
        sx={{ width: '40px' }}
      >
        <Checkbox checked={order.isFixed} />
      </TableCell>
      {filteredOrder.map(([key, value], index) => (
        <TableCell component={isHeader ? 'th' : undefined} scope="row" key={key + index}>
          <M.MUITableCellInnerContainer>
            <Divider orientation="vertical" flexItem />
            <span>{isHeader ? ORDER_SHEET_KEY_MAP[key as keyof Order] : value}</span>
          </M.MUITableCellInnerContainer>
        </TableCell>
      ))}
    </M.MUITableRow>
  );
};

export default React.memo(OrderSheetRow);
