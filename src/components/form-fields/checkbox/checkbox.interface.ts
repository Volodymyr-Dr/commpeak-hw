import { UseFormRegister, FieldValues, Path } from "react-hook-form";

export interface ICheckboxField<T extends FieldValues> {
  fieldName: Path<T>;
  errors?: any;
  register: UseFormRegister<T>;
  label: string;
  customStyles?: string;
  showLink?: boolean;
  linkText?: string;
  linkPath?: string;
}
