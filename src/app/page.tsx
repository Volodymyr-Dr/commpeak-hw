import Link from "next/link";
import { SectionContainer } from "@/components/section-container";
import cls from "./home.module.scss";

export default async function Home() {
  return (
    <section className={cls.aboutSection}>
      <SectionContainer>
        <h1>CommPeak Careers</h1>
        <Link href="/job-position-list">View Job Positions</Link>
      </SectionContainer>
    </section>
  );
}
