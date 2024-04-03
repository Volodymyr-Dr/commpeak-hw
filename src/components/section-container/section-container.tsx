import React from "react";
import cls from "./section-container.module.scss";
import { ISectionContainer } from "./section-container.interface";

export const SectionContainer = ({
  children,
  customStyles,
}: ISectionContainer) => {
  return (
    <div className={`${cls.sectionContainer} ${customStyles}`}>{children}</div>
  );
};
