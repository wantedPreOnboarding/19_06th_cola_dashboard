export type CheckBoxLabelProps = {
  checked: boolean;
};

export type CheckBoxProps = {
  id: string;
  checkedInputs: string[];
  changeHandler: (checked: boolean, id: string) => void;
};
