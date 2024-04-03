import React from "react";
import Image from "next/image";

import cls from "./company-description.module.scss";

export interface ICompanyDescriptionProps {}
export const CompanyDescription = () => {
  return (
    <div className={cls.wrapper}>
      <h2>Company Description</h2>
      <p>
        CommPeak makes cloud-based communication easier and more affordable,
        empowering people with superior quality products. Our solutions,
        including A-Z VoIP termination, predictive Dialer, Cloud PBX, and more,
        enable companies to create customized solutions based on unique business
        models.
      </p>
      <Image
        src="/careers.jpg"
        alt="Careers"
        width={700}
        height={400}
        className={cls.image}
      />
    </div>
  );
};
