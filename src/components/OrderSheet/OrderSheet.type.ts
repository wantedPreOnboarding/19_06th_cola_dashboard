import OrderSheet, { Order } from 'redux/services/orderSheet.type';

export interface OrderSheetProps {
  orderSheet: OrderSheet;
}

export interface IsFixed {
  isFixed: boolean;
}

export type FixedOrder = Order & IsFixed;

export type FixedOrderSheet = FixedOrder[];
