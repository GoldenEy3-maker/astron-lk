import { schemas } from "@/shared/api/client";
import { cn } from "@/shared/lib/cn";
import { Skeleton } from "@/shared/ui/skeleton";
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
  data?: z.infer<typeof schemas.EmployeeTesting>[];
  isLoading?: boolean;
};

export function EmployeeTestingTable({
  data,
  isLoading,
}: EmployeeTestingTableProps) {
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
        {!isLoading && data
          ? data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.test}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell
                  className={cn("text-success", {
                    "text-destructive": item.result < item.threshold,
                  })}
                >
                  {item.result}%
                </TableCell>
                <TableCell
                  className={cn("whitespace-nowrap text-success", {
                    "text-destructive": item.result < item.threshold,
                  })}
                >
                  {item.result >= item.threshold ? "Пройден" : "Не заcчитан"}
                </TableCell>
              </TableRow>
            ))
          : Array.from({ length: 3 }, (_, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <Skeleton className="h-4 ~w-24/60" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 ~w-24/60" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 ~w-14/20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 ~w-16/20" />
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
}
