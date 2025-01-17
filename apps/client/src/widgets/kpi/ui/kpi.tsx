import { EmployeeTestingCard } from "@/features/employee-testing";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";

type KpiProps = {} & React.ComponentProps<typeof Section>;

export function Kpi(props: KpiProps) {
  return (
    <Section space="lg" {...props}>
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Выполнение KPI</h1>
        <span className="text-muted">Результаты выгрузки от 01.12.2024</span>
      </SectionHeader>
      <SectionContent>
        <EmployeeTestingCard />
      </SectionContent>
    </Section>
  );
}
