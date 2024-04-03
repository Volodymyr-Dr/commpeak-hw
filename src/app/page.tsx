import { CompanyDescription } from "@/components/company-description";
import { ApplyForm } from "@/components/forms";
import cls from "./home.module.scss";
import { SectionContainer } from "@/components/section-container";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-500 flex-col items-center justify-between">
      <section className={cls.heroSection}>
        <SectionContainer>
          <h1>CommPeak Careers</h1>
        </SectionContainer>
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
    </main>
  );
}
