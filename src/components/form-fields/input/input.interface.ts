import { UseFormRegister, FieldValues, Path } from "react-hook-form";

export interface IInputField<T extends FieldValues> {
  fieldName: Path<T>;
  type: string;
  errors?: any;
  register: UseFormRegister<T>;
  label: string;
  placeholder: string;
  customStyles?: string;
  hideRequiredStar?: boolean;
}
