import React, { FC } from "react";

import cls from "./job-position.module.scss";
import { IJobPositionProps } from "./job-position.interface";
import Image from "next/image";

export const JobPosition: FC<IJobPositionProps> = ({
  title,
  location,
  team,
  type,
  customStyles,
}) => {
  return (
    <div className={`${cls.positionWrapper} ${customStyles}`}>
      <div className={cls.positionDetails}>
        <h2 className={cls.title}>{title}</h2>
        <div className={cls.description}>
          <p>{location}</p>
          <p>{team}</p>
          <p>{type}</p>
        </div>
      </div>
      <Image
        src="/Blog.png"
        alt="Blog"
        priority
        width={400}
        height={300}
        className={cls.image}
      />
    </div>
  );
};
