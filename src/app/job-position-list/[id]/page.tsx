import React from "react";

import { notFound } from "next/navigation";
import { getJobPosition } from "@/shared/utils";
import { SectionContainer } from "@/components/section-container";
import { ApplyForm } from "@/components/forms";
import { CompanyDescription } from "@/components/company-description";
import { JobPosition } from "@/components/job-position";
import cls from "./job-position.module.scss";

export default async function JobPositionPage({ params }: IJobPositionProps) {
  const jobPosition = await getJobPosition(params.id);

  if (!jobPosition) {
    return notFound();
  }

  return (
    <>
      <section className={cls.heroSection}>
        <JobPosition {...jobPosition} customStyles={cls.heroContent} />
      </section>

      <section className={cls.formSection}>
        <SectionContainer customStyles={cls.formSectionContainer}>
          <ApplyForm />
          <CompanyDescription />
        </SectionContainer>
      </section>
      <section className={cls.footerSection}>
        <SectionContainer customStyles={cls.footerContent}>
          <p>
            Included footer section to show on ui: Company description following
            scroll - so it will always displayed fully
          </p>
          <p>© 2024 CommPeak</p>
        </SectionContainer>
      </section>
    </>
  );
}
