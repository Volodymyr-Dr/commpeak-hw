import { UseFormRegister, FieldValues, Path } from "react-hook-form";

export interface ICheckboxField<T extends FieldValues> {
  fieldName: Path<T>;
  errors?: any;
  register: UseFormRegister<T>;
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  customStyles?: string;
  showLink?: boolean;
  linkText?: string;
  linkPath?: string;
}
