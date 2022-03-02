import { Order } from 'redux/services/orderSheet.type';
import { FixedOrder } from '../OrderSheet.type';

export default interface OrderSheetRowProps {
  order: FixedOrder;
  columns: (keyof Order)[];
  hover?: boolean;
  isHeader?: boolean;
  stickyTop?: number;
  sx?: { [key: string]: string };
  onClickHandler?: (orderId?: number) => void;
}
