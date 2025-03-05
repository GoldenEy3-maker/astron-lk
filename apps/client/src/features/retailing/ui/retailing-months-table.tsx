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

type RetailingMonthsTableProps = {
  data?: z.infer<typeof schemas.Retailing>[];
  isLoading?: boolean;
};

export function RetailingMonthsTable({
  data,
  isLoading,
}: RetailingMonthsTableProps) {
  const group = data?.reduce((acc, item) => {
    if (acc.has(item.project.name)) {
      const projects = acc.get(item.project.name)!;

      if (projects[item.monthIdx]) {
        acc.set(item.project.name, {
          ...projects,
          ...{ [item.monthIdx]: projects[item.monthIdx] + item.sum },
        });
      } else {
        acc.set(item.project.name, {
          ...projects,
          [item.monthIdx]: item.sum,
        });
      }
    } else {
      acc.set(item.project.name, { [item.monthIdx]: item.sum });
    }

    return acc;
  }, new Map<string, Record<number, number>>());

  return (
    <Table className="!text-sm">
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          {Array.from({ length: 12 }, (_, idx) => (
            <TableHead key={idx} className="text-center capitalize">
              {formatMonthByIdx(idx)}
            </TableHead>
          ))}
          <TableHead className="text-center">Итого</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!isLoading && group ? (
          <>
            {Array.from(group).map(([projectName, monthsSum]) => (
              <TableRow key={projectName}>
                <TableCell className="min-w-28 max-w-36">
                  {projectName}
                </TableCell>
                {Array.from({ length: 12 }, (_, idx) => (
                  <TableCell className="text-center" key={idx}>
                    {monthsSum[idx]?.toLocaleString("ru-RU")}
                  </TableCell>
                ))}
                <TableCell className="text-center">
                  {Object.values(monthsSum)
                    .reduce((acc, sum) => acc + sum, 0)
                    .toLocaleString("ru-RU")}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>Итого</TableCell>
              {Array.from({ length: 12 }, (_, idx) => (
                <TableCell className="text-center" key={idx}>
                  {Array.from(group)
                    .reduce((acc, [, monthsSum]) => {
                      return acc + (monthsSum[idx] ?? 0);
                    }, 0)
                    .toLocaleString("ru-RU")}
                </TableCell>
              ))}
              <TableCell className="text-center">
                {Array.from(group)
                  .reduce((acc, [, monthsSum]) => {
                    const totalProjectSum = Object.values(monthsSum).reduce(
                      (acc, sum) => acc + sum,
                      0,
                    );
                    return acc + totalProjectSum;
                  }, 0)
                  .toLocaleString("ru-RU")}
              </TableCell>
            </TableRow>
          </>
        ) : (
          Array.from({ length: 3 }, (_, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <Skeleton className="h-6 w-28 rounded-full" />
              </TableCell>
              {Array.from({ length: 12 }, (_, idx) => (
                <TableCell key={idx}>
                  <Skeleton className="h-4 w-12 rounded-full" />
                </TableCell>
              ))}
              <TableCell>
                <Skeleton className="h-4 w-12 rounded-full" />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
