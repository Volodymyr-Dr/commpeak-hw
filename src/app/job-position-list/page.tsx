import React from "react";

import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionContainer } from "../../components/section-container";
import { getJobPositions } from "@/shared/utils";
import { JobPosition } from "../../components/job-position";
import cls from "./job-position-list.module.scss";

export default async function JobPositions() {
  const jobPositions = await getJobPositions();

  if (!jobPositions) {
    return notFound();
  }

  return (
    <SectionContainer customStyles={cls.positionContainer}>
      {Object.keys(jobPositions || {}).map((key) => {
        const position = jobPositions[key];

        return (
          <Link href={`/job-position-list/${key}`} key={key}>
            <JobPosition {...position} />
          </Link>
        );
      })}
    </SectionContainer>
  );
}
