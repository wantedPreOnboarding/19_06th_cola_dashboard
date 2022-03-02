export default interface filterSearchProps {
  inputValue?: string;
  datas: string[][]|string[];
  result?: result[];
}

export interface result {
  id: number;
  key: string;
}
