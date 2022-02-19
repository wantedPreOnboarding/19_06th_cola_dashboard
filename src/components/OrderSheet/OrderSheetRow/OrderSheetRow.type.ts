import { Order } from 'redux/services/orderSheet.type';

export default interface OrderSheetRowProps {
  orderName: string;
  order: Order;
  hover?: boolean;
  isHeader?: boolean;
  stickyTop?: number;
  sx?: { [key: string]: string };
  onClickHandler?: (orderId?: number) => void;
}
