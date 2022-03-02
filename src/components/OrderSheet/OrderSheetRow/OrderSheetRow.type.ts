import { Order } from 'redux/services/orderSheet.type';

export default interface OrderSheetRowProps {
  order: Order;
  columns: (keyof Order)[];
  hover?: boolean;
  isHeader?: boolean;
  stickyTop?: number;
  sx?: { [key: string]: string };
  onClickHandler?: (orderId?: number) => void;
}
