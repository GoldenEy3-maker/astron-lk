import { schemas } from "@/shared/api/v1";
import { formatMonthByIdx } from "@/shared/lib/format-date";
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

type RetailingDaysTableProps = {
  data?: z.infer<typeof schemas.Retailing>[];
  isLoading?: boolean;
};

export function RetailingDaysTable({
  data,
  isLoading,
}: RetailingDaysTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Месяц</TableHead>
          <TableHead>Номер проекта</TableHead>
          <TableHead>Проект</TableHead>
          <TableHead>Сумма, руб</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!isLoading && data
          ? data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="capitalize text-muted">
                  {formatMonthByIdx(item.monthIdx, "long")}
                </TableCell>
                <TableCell>{item.project.id}</TableCell>
                <TableCell className="min-w-28">{item.project.name}</TableCell>
                <TableCell>{item.sum.toLocaleString("ru-RU")}</TableCell>
              </TableRow>
            ))
          : Array.from({ length: 3 }, (_, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <Skeleton className="h-4 w-16 rounded-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-20 rounded-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-60 rounded-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-14 rounded-full" />
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
}
