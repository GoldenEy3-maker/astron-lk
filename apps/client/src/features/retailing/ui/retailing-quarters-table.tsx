import { schemas } from "@/shared/api/v1";
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

type RetailingQuartresTableProps = {
  data?: z.infer<typeof schemas.RetailingQuartersPlan>["data"];
  isLoading?: boolean;
};

export function RetailingQuartersTable({
  data,
  isLoading,
}: RetailingQuartresTableProps) {
  const quarters = data?.reduce((acc, item) => {
    acc.set(item.quarter, { fact: item.fact, plan: item.plan });

    return acc;
  }, new Map<number, { plan: number; fact: number | undefined }>());

  const yearPlan = data?.reduce((acc, item) => acc + item.plan, 0);

  return (
    <Table className="!text-sm">
      <TableHeader>
        <TableRow>
          {Array.from({ length: 4 }, (_, idx) => (
            <TableHead
              key={idx}
              className="whitespace-nowrap border-r border-stroke !pb-0 text-center"
            >
              {idx + 1} квартал
            </TableHead>
          ))}
          <TableHead className="whitespace-nowrap !pb-0 text-center">
            Год
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {Array.from({ length: 4 }, (_, idx) => (
            <TableCell key={idx} className="min-w-40 border-r border-stroke">
              <dl className="grid grid-cols-2 gap-4">
                <div className="min-w-fit">
                  <dt className="whitespace-nowrap text-center leading-none">
                    План
                  </dt>
                  <dd className="mt-3 inline-flex w-full items-center justify-center whitespace-nowrap text-center leading-none">
                    {!isLoading && quarters ? (
                      quarters?.get(idx + 1)?.plan.toLocaleString("ru-RU")
                    ) : (
                      <Skeleton className="h-3.5 w-16 rounded-full" />
                    )}
                  </dd>
                </div>
                <div className="min-w-fit">
                  <dt className="whitespace-nowrap text-center leading-none">
                    Факт
                  </dt>
                  <dd className="mt-3 inline-flex w-full items-center justify-center whitespace-nowrap text-center leading-none">
                    {!isLoading && quarters ? (
                      quarters?.get(idx + 1)?.fact?.toLocaleString("ru-RU")
                    ) : (
                      <Skeleton className="h-3.5 w-16 rounded-full" />
                    )}
                  </dd>
                </div>
              </dl>
            </TableCell>
          ))}
          <TableCell>
            <dl>
              <dt className="whitespace-nowrap text-center leading-none">
                План
              </dt>
              <dd className="mt-3 inline-flex w-full items-center justify-center whitespace-nowrap text-center leading-none">
                {!isLoading && yearPlan ? (
                  yearPlan?.toLocaleString("ru-RU")
                ) : (
                  <Skeleton className="h-4 w-20 rounded-full" />
                )}
              </dd>
            </dl>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
