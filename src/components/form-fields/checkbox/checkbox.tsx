import { FieldValues } from "react-hook-form";
import { ICheckboxField } from "./checkbox.interface";
import cls from "./checkbox.module.scss";

export const CheckboxField = <T extends FieldValues>({
  fieldName,
  errors,
  register,
  label,
  customStyles,
  showLink = false,
  linkText,
  linkPath,
}: ICheckboxField<T>) => {
  return (
    <>
      <div className={`${cls.fieldWrapper} ${customStyles}`}>
        <input
          {...register(fieldName)}
          id={fieldName}
          type="checkbox"
          onChange={(e) => {
            register(fieldName).onChange(e);
          }}
          className={cls.checkboxField}
        />
        <label htmlFor={fieldName} className={cls.label}>
          {label}
          {showLink && linkText && linkPath ? (
            <a
              href={linkPath}
              target="_blank"
              rel="noreferrer"
              className={cls.link}
            >
              {linkText}
            </a>
          ) : null}
        </label>
      </div>
      {errors && errors[fieldName] && (
        <span className="field-error-message">{errors[fieldName].message}</span>
      )}
    </>
  );
};
