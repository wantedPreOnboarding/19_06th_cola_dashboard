export default interface filterSearchProps {
  inputValue?: string;
  data: string[];
  result?: result[];
}

export interface result {
  id: number;
  value: string;
}
