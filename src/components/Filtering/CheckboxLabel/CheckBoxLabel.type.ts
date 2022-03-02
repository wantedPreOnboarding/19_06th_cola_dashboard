import { Order } from 'redux/services/orderSheet.type';
export type CheckBoxLabelProps = {
  filterKey:keyof Order;
  filterValue: string;
  checked: boolean;
  changeHandler: (checked: boolean, filterKey: keyof Order) => void;
};
