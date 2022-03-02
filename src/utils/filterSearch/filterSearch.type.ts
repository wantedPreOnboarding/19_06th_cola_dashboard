import SearchProps from "components/common/Search/Search.type"
import { Order } from 'redux/services/orderSheet.type';
export default interface filterSearchProps {
  inputValue?: string;
  datas: SearchProps["datas"];
  result?: result[];
}

export interface result {
  id: number;
  key: keyof Order;
}
