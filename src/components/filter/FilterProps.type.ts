export type FilterProps = {
  id: string;
  checkedInputs: string[];
  changeHandler: (checked: boolean, id: string) => void;
};
