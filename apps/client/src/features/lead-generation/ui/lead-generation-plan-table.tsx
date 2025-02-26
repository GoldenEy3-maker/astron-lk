import { cn } from "@/shared/lib/cn";
import { Icons } from "@/shared/ui/icons";
import { Table, TableBody, TableCell, TableRow } from "@/shared/ui/table";
import { useLeadGenerationPlan } from "../lib/use-lead-generation-plan";
import { Fragment } from "react/jsx-runtime";
import { Skeleton } from "@/shared/ui/skeleton";
import { z } from "zod";
import { schemas } from "@/shared/api/v1";

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
    renderMonth,
    renderProgress,
    checkIsDestructiveMonth,
    checkIsSuccessMonth,
    checkIsDestructiveQuarter,
    checkIsSuccessQuarter,
    checkIsEmptyQuarter,
  } = useLeadGenerationPlan({ months: data?.months });

  return (
    <Table>
      <TableBody className="text-sm [&_tr>td:first-child]:w-[30%]">
        <TableRow>
          <TableCell className="!pt-0">Квартал</TableCell>
          {quarters?.map((quarter) => (
            <TableCell
              key={quarter.quarter}
              className={cn("!pt-0 text-center", {
                "text-success": checkIsSuccessQuarter(quarter),
                "text-destructive": checkIsDestructiveQuarter(quarter),
                "text-secondary": checkIsEmptyQuarter(quarter),
              })}
            >
              {quarter.quarter} квартал
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Месяц</TableCell>
          {quarters.map((quarter) => (
            <TableCell key={quarter.quarter} className="text-center">
              <div className="grid grid-cols-3 place-items-center">
                {quarter.months.map((month) => (
                  <Fragment key={month.idx}>
                    {!isLoading ? (
                      <span
                        className={cn("capitalize", {
                          "text-destructive": checkIsDestructiveMonth(month),
                          "text-secondary": checkIsEmptyQuarter(quarter),
                        })}
                      >
                        {renderMonth(month.idx)}
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
            <TableCell key={quarter.quarter} className="text-center">
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
            <TableCell key={quarter.quarter} className="text-center">
              <div className="grid grid-cols-3 place-items-center">
                {quarter.months.map((month) => (
                  <Fragment>
                    {!isLoading ? (
                      <span
                        key={month.idx}
                        className={cn({
                          "text-success": checkIsSuccessMonth(month),
                          "text-destructive": checkIsDestructiveMonth(month),
                          "text-secondary": checkIsEmptyQuarter(quarter),
                        })}
                      >
                        {renderProgress(month.value) || "-"}
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
            <TableCell key={quarter.quarter}>
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
            <TableCell key={quarter.quarter}>
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
