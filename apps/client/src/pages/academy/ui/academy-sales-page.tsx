import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { AcademySalesList } from "./academy-sales-list";

export function AcademySalesPage() {
  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Процесс продаж</h1>
      </SectionHeader>
      <SectionContent>
        <AcademySalesList />
      </SectionContent>
    </Section>
  );
}
