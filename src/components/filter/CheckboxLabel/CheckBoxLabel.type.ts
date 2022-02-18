export type CheckBoxLabelProps = {
  filterKey: string;
  checked: boolean;
  changeHandler: (checked: boolean, filterKey: string) => void;
};
