export type CheckBoxLabelProps = {
  filterValue: string;
  checked: boolean;
  changeHandler: (checked: boolean, filterValue: string) => void;
};
