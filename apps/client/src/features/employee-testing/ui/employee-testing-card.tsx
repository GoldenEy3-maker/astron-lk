import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { EmployeeTestingChart } from "./employee-testing-chart";
import { cn } from "@/shared/lib/cn";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { parseAsStringEnum, useQueryState } from "nuqs";
import {
  EmployeeTestingPeriodKeys,
  TranslateEmployeeTestingPeriodValues,
} from "../model/employee-testing-period-keys";
import { TextMorph } from "@/shared/ui/text-morph";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";

const data = [
  {
    test: "Специалист по монтажу",
    name: "Иванов-Петров Кладиславослав",
    value: 1,
    result: 81,
  },
  {
    test: "Специалист по продажам",
    name: "Овощов-Ягодкин Помидорослав",
    value: 1,
    result: 95,
  },
  {
    test: "Инженер-расчетчик",
    name: "Бахчёв-Ягодов Арбузослав",
    value: 1,
    result: 79,
  },
];

export function EmployeeTestingCard() {
  const [period, setPeriod] = useQueryState(
    "period",
    parseAsStringEnum(Object.values(EmployeeTestingPeriodKeys)).withDefault(
      "year"
    )
  );

  return (
    <Section space="lg" className="rounded-main bg-card ~py-6/9 ~px-6/14">
      <SectionHeader>
        <Button asChild variant="link" size="hug" className="gap-3 font-normal">
          <Link to={Routes.EmployeeTesting} className="text-h3">
            <span>Тестирование сотрудников</span>
            <Icons.ArrowRight />
          </Link>
        </Button>
        <Select
          value={period}
          onValueChange={(value) =>
            setPeriod(value as EmployeeTestingPeriodKeys)
          }>
          <SelectTrigger variant="outline" size="sm" className="font-normal">
            <SelectValue>
              <TextMorph as="span">
                {TranslateEmployeeTestingPeriodValues[period]}
              </TextMorph>
            </SelectValue>
          </SelectTrigger>
          <SelectContent align="end">
            {Object.entries(TranslateEmployeeTestingPeriodValues).map(
              ([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
      </SectionHeader>
      <SectionContent className="space-y-5">
        <div className="flex justify-center">
          <EmployeeTestingChart
            data={data}
            dataKey="value"
            nameKey="test"
            isDestructive={(entry) => entry.result < 80}
          />
        </div>
        <Table className="~text-sm/base">
          <TableHeader>
            <TableRow>
              <TableHead>Тест</TableHead>
              <TableHead>Сотрудник</TableHead>
              <TableHead colSpan={2} className="whitespace-nowrap">
                Лучший результат
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.test}>
                <TableCell>{item.test}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell
                  className={cn("text-success", {
                    "text-destructive": item.result < 80,
                  })}>
                  {item.result}%
                </TableCell>
                <TableCell
                  className={cn("text-success whitespace-nowrap", {
                    "text-destructive": item.result < 80,
                  })}>
                  {item.result >= 80 ? "Пройден" : "Не пройден"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </SectionContent>
    </Section>
  );
}
