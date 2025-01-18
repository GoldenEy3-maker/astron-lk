import { EmployeeTestingChart } from "./employee-testing-chart";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { parseAsStringEnum, useQueryState } from "nuqs";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { z } from "zod";
import { schemas } from "@/shared/api/v1";
import { DataPeriodSelect } from "@/shared/ui/data-period-select";
import { DataPeriodSelectKeyMap } from "@/shared/constants/data-perido-select-maps";
import { EmployeeTestingTable } from "./employee-testing-table";

const data: z.infer<typeof schemas.EmployeeTesting>[] = [
  {
    id: "1",
    test: "Специалист по монтажу",
    name: "Иванов-Петров Кладиславослав",
    result: 81,
  },
  {
    id: "2",
    test: "Специалист по продажам",
    name: "Овощов-Ягодкин Помидорослав",
    result: 95,
  },
  {
    id: "3",
    test: "Инженер-расчетчик",
    name: "Бахчёв-Ягодов Арбузослав",
    result: 79,
  },
];

export function EmployeeTestingCard() {
  const [period, setPeriod] = useQueryState(
    "period",
    parseAsStringEnum(Object.values(DataPeriodSelectKeyMap)).withDefault("year")
  );

  return (
    <Section space="lg" className="rounded-main bg-card ~py-6/9 ~px-6/14">
      <SectionHeader className="gap-y-3">
        <Button
          asChild
          variant="link"
          size="hug"
          className="gap-3 font-normal items-baseline">
          <Link to={Routes.EmployeeTesting} className="text-h3 leading-none">
            <span>Тестирование сотрудников</span>
            <Icons.ArrowRight />
          </Link>
        </Button>
        <DataPeriodSelect value={period} onValueChange={setPeriod} />
      </SectionHeader>
      <SectionContent className="space-y-5">
        <div className="flex justify-center">
          <EmployeeTestingChart
            data={data.map((item) => ({
              ...item,
              value: 1,
            }))}
            dataKey="value"
            nameKey="name"
            isDestructive={(entry) => entry.result < 80}
          />
        </div>
        <EmployeeTestingTable data={data} />
      </SectionContent>
    </Section>
  );
}
