import OrderSheet, { Order } from 'redux/services/orderSheet.type';

export interface OrderSheetProps {
  orderSheet: OrderSheet;
}

export interface IsFixed {
  isFixed: boolean;
  fakeId: number;
}

export type FilteredOrder = Partial<Order> & IsFixed;
