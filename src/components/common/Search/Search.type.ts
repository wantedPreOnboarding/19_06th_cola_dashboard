import { result } from 'utils/filterSearch/filterSearch.type';

export default interface SearchProps {
  data: string[];
  updateResult: (result: result[]) => void;
}
