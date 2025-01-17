import { EmployeeTestingCard } from "@/features/employee-testing";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";

export function EmployeeTestingPage() {
  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Тестирование сотрудников</h1>
      </SectionHeader>
      <SectionContent>
        <EmployeeTestingCard />
      </SectionContent>
    </Section>
  );
}
