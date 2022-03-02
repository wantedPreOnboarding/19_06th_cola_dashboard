export type CheckBoxLabelProps = {
  filterKey:string;
  filterValue: string;
  checked: boolean;
  changeHandler: (checked: boolean, filterValue: string) => void;
};
