import { Order } from 'redux/services/orderSheet.type';
import OrderSheet from 'redux/services/orderSheet.type';

export interface FilterPopupProps {
  rowTitle: keyof Order;
  // rowTitle?: keyof OrderSheet;
  data?: OrderSheet;
  error?: any;
  isLoading?: boolean;
}
