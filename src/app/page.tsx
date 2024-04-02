import { CompanyDescription } from "@/components/company-description";
import { ApplyForm } from "@/components/forms";
import cls from "./home.module.scss";
import { SectionContainer } from "@/components/section-container";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-500 flex-col items-center justify-between">
      <section className={cls.formSection}>
        <SectionContainer customStyles={cls.formSectionContainer}>
          <ApplyForm />
          <CompanyDescription />
        </SectionContainer>
      </section>
    </main>
  );
}
