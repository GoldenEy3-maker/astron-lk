import { cn } from "@/shared/lib/cn";
import { Icons } from "@/shared/ui/icons";
import { Table, TableBody, TableCell, TableRow } from "@/shared/ui/table";
import { useLeadGenerationPlan } from "../lib/use-lead-generation-plan";
import { Fragment } from "react/jsx-runtime";
import { Skeleton } from "@/shared/ui/skeleton";
import { z } from "zod";
import { schemas } from "@/shared/api/v1";
import { formatMonthByIdx } from "@/shared/lib/format-date";

type LeadGenerationPlanTableProps = {
  data?: {
    months: z.infer<typeof schemas.LeadGenerationMonth>[];
    quarterPassed: z.infer<typeof schemas.LeadGenerationQuarterPassed>[];
  };
  isLoading?: boolean;
};

export function LeadGenerationPlanTable({
  data,
  isLoading,
}: LeadGenerationPlanTableProps) {
  const {
    quarters,
    renderMonthProgress,
    checkIsDestructiveMonth,
    checkIsSuccessMonth,
    checkIsDestructiveQuarter,
    checkIsSuccessQuarter,
    checkIsEmptyQuarter,
  } = useLeadGenerationPlan({ months: data?.months });

  return (
    <Table>
      <TableBody className="text-sm [&_tr>td.padding-cell]:!~pl-2/9 [&_tr>td:first-child]:w-[30%] [&_tr>td:first-child]:min-w-32">
        <TableRow>
          <TableCell className="!pt-0">Квартал</TableCell>
          {quarters?.map((quarter) => (
            <TableCell
              key={quarter.quarter}
              className={cn("whitespace-nowrap !pt-0 text-center", {
                "text-success": checkIsSuccessQuarter(quarter),
                "text-destructive": checkIsDestructiveQuarter(quarter),
                "text-secondary": checkIsEmptyQuarter(quarter),
                "padding-cell": quarter.quarter !== 1,
              })}
            >
              {quarter.quarter} квартал
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Месяц</TableCell>
          {quarters.map((quarter) => (
            <TableCell
              key={quarter.quarter}
              className={cn("text-center", {
                "padding-cell": quarter.quarter !== 1,
              })}
            >
              <div className="grid grid-cols-[repeat(3,minmax(3rem,1fr))] place-items-center">
                {quarter.months.map((month) => (
                  <Fragment key={month.idx}>
                    {!isLoading ? (
                      <span
                        className={cn("capitalize", {
                          "text-destructive": checkIsDestructiveMonth(month),
                          "text-secondary": checkIsEmptyQuarter(quarter),
                        })}
                      >
                        {formatMonthByIdx(month.idx)}
                      </span>
                    ) : (
                      <Skeleton className="h-5 w-10 rounded-full" />
                    )}
                  </Fragment>
                ))}
              </div>
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Лиды, шт</TableCell>
          {quarters.map((quarter) => (
            <TableCell
              key={quarter.quarter}
              className={cn("text-center", {
                "padding-cell": quarter.quarter !== 1,
              })}
            >
              <div className="grid grid-cols-3 place-items-center">
                {quarter.months.map((month) => (
                  <Fragment key={month.idx}>
                    {!isLoading ? (
                      <span
                        className={cn({
                          "text-destructive": checkIsDestructiveMonth(month),
                          "text-secondary": checkIsEmptyQuarter(quarter),
                        })}
                      >
                        {month.value ?? "-"}
                      </span>
                    ) : (
                      <Skeleton className="h-5 w-6 rounded-full" />
                    )}
                  </Fragment>
                ))}
              </div>
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Выполнение месяц</TableCell>
          {quarters.map((quarter) => (
            <TableCell
              key={quarter.quarter}
              className={cn("text-center", {
                "padding-cell": quarter.quarter !== 1,
              })}
            >
              <div className="grid grid-cols-3 place-items-center">
                {quarter.months.map((month) => (
                  <Fragment key={month.idx}>
                    {!isLoading ? (
                      <span
                        className={cn({
                          "text-success": checkIsSuccessMonth(month),
                          "text-destructive": checkIsDestructiveMonth(month),
                          "text-secondary": checkIsEmptyQuarter(quarter),
                        })}
                      >
                        {renderMonthProgress(month.value) || "-"}
                      </span>
                    ) : (
                      <Skeleton className="h-5 w-10 rounded-full" />
                    )}
                  </Fragment>
                ))}
              </div>
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Зачтено за квартал, шт</TableCell>
          {quarters.map((quarter) => (
            <TableCell
              key={quarter.quarter}
              className={cn({
                "padding-cell": quarter.quarter !== 1,
              })}
            >
              <div
                className={cn("flex items-center justify-center text-center", {
                  "text-secondary": checkIsEmptyQuarter(quarter),
                })}
              >
                {!isLoading ? (
                  data?.quarterPassed ? (
                    (data.quarterPassed.reduce<Record<number, number>>(
                      (acc, item) => {
                        acc[item.quarter] = item.value;

                        return acc;
                      },
                      {},
                    )[quarter.quarter] ?? "-")
                  ) : (
                    "-"
                  )
                ) : (
                  <Skeleton className="size-5 rounded-full" />
                )}
              </div>
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Общий квартальный зачёт</TableCell>
          {quarters.map((quarter) => (
            <TableCell
              key={quarter.quarter}
              className={cn({
                "padding-cell": quarter.quarter !== 1,
              })}
            >
              <div
                className={cn("flex items-center justify-center", {
                  "text-destructive": checkIsDestructiveQuarter(quarter),
                  "text-success": checkIsSuccessQuarter(quarter),
                  "text-secondary": checkIsEmptyQuarter(quarter),
                })}
              >
                {!isLoading ? (
                  checkIsSuccessQuarter(quarter) ? (
                    <Icons.Check className="size-3.5" />
                  ) : checkIsDestructiveQuarter(quarter) ? (
                    <Icons.X className="size-3.5" />
                  ) : (
                    <Icons.Dash className="size-3.5" />
                  )
                ) : (
                  <Skeleton className="size-5 rounded-full" />
                )}
              </div>
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
