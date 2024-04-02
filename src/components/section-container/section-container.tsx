import React from "react";
import cls from "./section-container.module.scss";

export interface ISectionContainer {
  children: React.ReactNode;
  customStyles?: string;
}

export const SectionContainer = ({
  children,
  customStyles,
}: ISectionContainer) => {
  return (
    <div className={`${cls.sectionContainer} ${customStyles}`}>{children}</div>
  );
};
