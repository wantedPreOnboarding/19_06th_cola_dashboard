import { result } from 'utils/filterSearch/filterSearch.type';

export default interface SearchProps {
  datas: string[][]|string[];
  updateResult: (result: result[]) => void;
}
