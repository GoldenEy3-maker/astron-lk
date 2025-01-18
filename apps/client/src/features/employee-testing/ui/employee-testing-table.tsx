import { schemas } from "@/shared/api/client";
import { cn } from "@/shared/lib/cn";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { z } from "zod";

type EmployeeTestingTableProps = {
  data: z.infer<typeof schemas.EmployeeTesting>[];
};

export function EmployeeTestingTable({ data }: EmployeeTestingTableProps) {
  return (
    <Table>
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
          <TableRow key={item.id}>
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
  );
}
