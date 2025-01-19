import { EmployeeTestingCard } from "@/features/employee-testing";
import { DataPeriodSelectKeyMap } from "@/shared/constants/data-perido-select-maps";
import { DataPeriodSelect } from "@/shared/ui/data-period-select";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { parseAsStringEnum, useQueryState } from "nuqs";

export function EmployeeTestingPage() {
  const [period, setPeriod] = useQueryState(
    "period",
    parseAsStringEnum(Object.values(DataPeriodSelectKeyMap)).withDefault("year")
  );

  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Тестирование сотрудников</h1>
        <DataPeriodSelect value={period} onValueChange={setPeriod} />
      </SectionHeader>
      <SectionContent>
        <EmployeeTestingCard period={period} extended />
      </SectionContent>
    </Section>
  );
}
