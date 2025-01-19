import { EmployeeTestingChart } from "./employee-testing-chart";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { DataPeriodSelect } from "@/shared/ui/data-period-select";
import { DataPeriodSelectKeyMap } from "@/shared/constants/data-perido-select-maps";
import { EmployeeTestingTable } from "./employee-testing-table";
import { useEmployeeTesting } from "../lib/use-employee-testing";
import { useMemo } from "react";

type EmployeeTestingCardProps = {
  period?: DataPeriodSelectKeyMap;
  onPeriodChange?: (period: DataPeriodSelectKeyMap) => void;
  extended?: boolean;
};

export function EmployeeTestingCard({
  period,
  onPeriodChange,
  extended = false,
}: EmployeeTestingCardProps) {
  const { controlledPeriod, setControlledPeriod, data, isLoading } =
    useEmployeeTesting({
      period,
      onPeriodChange,
    });

  const chartData = useMemo(() => {
    if (!data) return [];

    const groupedData = data.reduce((acc, item) => {
      if (acc.has(item.test)) {
        acc.get(item.test)?.push(item);
      } else {
        acc.set(item.test, [item]);
      }
      return acc;
    }, new Map<string, typeof data>());

    const result = [];

    for (const [key, value] of groupedData.entries()) {
      result.push({
        name: key,
        isCompleted:
          value.reduce((acc, item) => acc + item.result, 0) / value.length >=
          80,
      });
    }

    return result;
  }, [data]);

  return (
    <Section space="lg" className="rounded-main bg-card ~py-6/9 ~px-6/14">
      <SectionHeader className="gap-y-3 items-center">
        {extended ? (
          <>
            <h2 className="text-h2 text-heading-h3">
              Результаты выгрузки 01.12.2024
            </h2>
            <span className="text-muted text-lg">Обновлён 21.12.24</span>
          </>
        ) : (
          <>
            <Button
              asChild
              variant="link"
              size="hug"
              className="gap-3 font-normal items-baseline">
              <Link
                to={Routes.EmployeeTesting}
                className="text-h3 leading-none">
                <span>Тестирование сотрудников</span>
                <Icons.ArrowRight />
              </Link>
            </Button>
            <DataPeriodSelect
              value={controlledPeriod}
              onValueChange={setControlledPeriod}
            />
          </>
        )}
      </SectionHeader>
      <SectionContent className="space-y-5">
        <div className="flex justify-center">
          <EmployeeTestingChart
            data={chartData}
            labelKey="name"
            isCompletedKey="isCompleted"
            isLoading={isLoading}
          />
        </div>
        <EmployeeTestingTable
          data={extended ? data : data?.slice(0, 3)}
          isLoading={isLoading}
        />
      </SectionContent>
    </Section>
  );
}
