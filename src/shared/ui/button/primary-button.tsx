import { FC } from "react";
import { IButtonProps } from "./button.interface";
import cls from "./button.module.scss";

export const Button: FC<IButtonProps> = ({
  type = "button",
  onClick,
  children,
  customStyles,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={`${cls.primaryButton} ${customStyles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
