import { ComponentType, ReactNode } from "react";

export interface IButtonProps {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  customStyles?: string;
}
