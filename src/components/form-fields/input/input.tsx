import { FieldValues } from "react-hook-form";
import { IInputField } from "./input.interface";
import cls from "./input.module.scss";

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
    <div className={`${cls.fieldWrapper} ${customStyles}`}>
      <label htmlFor={fieldName} className={cls.label}>
        {!hideRequiredStar ? <span className={cls.requiredStar}>*</span> : null}
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
        className={cls.inputField}
      />
      {errors && errors[fieldName] && (
        <p className="field-error-message">{errors[fieldName].message}</p>
      )}
    </div>
  );
};
