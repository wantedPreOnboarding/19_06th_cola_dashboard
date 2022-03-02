import { result } from 'utils/filterSearch/filterSearch.type';
import { Order } from 'redux/services/orderSheet.type';
export default interface SearchProps {
  datas: [keyof Order,string][];
  updateResult: (result: result[]) => void;
}
