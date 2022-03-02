import { Checkbox, Divider, TableCell } from '@mui/material';
import React, { ReactElement } from 'react';
import * as M from './OrderSheetRow.styled';
import { MUProps } from 'types/props';
import OrderSheetRowProps from './OrderSheetRow.type';
import { ORDER_SHEET_KEY_MAP } from 'consts/orderSheet';
import { Order } from 'redux/services/orderSheet.type';

const OrderSheetRow = ({
  order,
  isHeader,
  hover = false,
  stickyTop,
  sx,
  onClickHandler,
  modalHandler,
}: MUProps<OrderSheetRowProps>): ReactElement => {
  return (
    <M.MUITableRow
      hover={hover}
      {...(stickyTop !== undefined && {
        sx: { position: 'sticky', zIndex: 1, top: stickyTop, ...sx },
      })}
      onClick={() => modalHandler?.(order.orderId)}
    >
      <TableCell component={isHeader ? 'th' : undefined} scope="row" align="center">
        <Checkbox
          checked={order.isFixed}
          onClick={event => (
            <>
              {event.stopPropagation()}
              {isHeader ? onClickHandler?.() : onClickHandler?.(order.orderId)}
            </>
          )}
        />
      </TableCell>
      {(isHeader ? Object.keys(order) : Object.values(order)).map((value, index) => (
        <TableCell component={isHeader ? 'th' : undefined} scope="row" key={index}>
          <M.MUITableCellInnerContainer>
            <Divider orientation="vertical" flexItem />
            <span>{isHeader ? ORDER_SHEET_KEY_MAP[value as keyof Order] : value}</span>
          </M.MUITableCellInnerContainer>
        </TableCell>
      ))}
    </M.MUITableRow>
  );
};

export default React.memo(OrderSheetRow);
