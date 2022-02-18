import { Order } from 'redux/services/orderSheet.type';

export default interface OrderSheetRowProps {
  orderName: string;
  order: Order;
  hover?: boolean;
  isHeader?: boolean;
  onClickHandler?: () => void;
}
