import { FilteredOrder } from '../OrderSheet.type';

export default interface OrderSheetRowProps {
  order: FilteredOrder;
  hover?: boolean;
  isHeader?: boolean;
  stickyTop?: number;
  sx?: { [key: string]: string };
  onClickHandler?: (orderId?: number) => void;
}
