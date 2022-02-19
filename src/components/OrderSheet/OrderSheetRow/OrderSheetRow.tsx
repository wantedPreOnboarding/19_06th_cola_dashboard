import { Checkbox, Divider, TableCell, TableRow } from '@mui/material';
import React, { ReactElement } from 'react';
import * as M from './OrderSheetRow.styled';
import { MUProps } from 'types/props';
import OrderSheetRowProps from './OrderSheetRow.type';
import { ORDER_SHEET_KEY_MAP } from 'consts/orderSheet';

const OrderSheetRow = ({
  orderName,
  order,
  isHeader,
  hover = false,
  stickyTop,
  sx,
  onClickHandler,
}: MUProps<OrderSheetRowProps>): ReactElement => {
  return (
    <TableRow
      hover={hover}
      {...(stickyTop !== undefined && {
        sx: { position: 'sticky', zIndex: 1, top: stickyTop, ...sx },
      })}
      onClick={() => (isHeader ? onClickHandler?.() : onClickHandler?.(order.orderId))}
    >
      <TableCell component={isHeader ? 'th' : undefined} scope="row" align="center">
        <Checkbox aria-label={`${orderName} 선택`} />
      </TableCell>
      {(isHeader ? Object.keys(order) : Object.values(order)).map((value, index) => (
        <TableCell component={isHeader ? 'th' : undefined} scope="row" key={index}>
          <M.TableCellInnerContainer>
            <Divider orientation="vertical" flexItem />
            <span>{isHeader ? ORDER_SHEET_KEY_MAP[value as keyof typeof order] : value}</span>
          </M.TableCellInnerContainer>
        </TableCell>
      ))}
    </TableRow>
  );
};
export default React.memo(OrderSheetRow);
