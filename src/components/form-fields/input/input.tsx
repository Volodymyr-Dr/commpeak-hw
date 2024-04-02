import { FieldValues } from "react-hook-form";
import { IInputField } from "./input.interface";

export const InputField = <T extends FieldValues>({
  fieldName,
  type,
  errors,
  register,
  label,
  placeholder,
  customStyles,
  hideRequiredStar,
}: IInputField<T>) => {
  return (
    <div className={`mb-4 flex w-full flex-col ${customStyles}`}>
      <label htmlFor={fieldName} className="text-black">
        {!hideRequiredStar ? <span className="text-red-500">*</span> : null}
        {label}
      </label>
      <input
        {...register(fieldName)}
        id={fieldName}
        type={type}
        onChange={(e) => {
          register(fieldName).onChange(e);
        }}
        placeholder={placeholder}
        className={`box-border rounded-md border border-gray-200 outline-none placeholder:text-gray-400 focus:border-gray-600`}
      />
      {errors && errors[fieldName] && (
        <p className="text-xs text-red-500">{errors[fieldName].message}</p>
      )}
    </div>
  );
};
