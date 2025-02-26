import { cn } from "@/shared/lib/cn";
import { Icons } from "@/shared/ui/icons";
import { Table, TableBody, TableCell, TableRow } from "@/shared/ui/table";
import { useLeadGenerationPlan } from "../lib/use-lead-generation-plan";
import { Fragment } from "react/jsx-runtime";
import { Skeleton } from "@/shared/ui/skeleton";

type LeadGenerationPlanTableProps = {
  monthLeads?: { monthIdx: number; value: number }[];
  quarterPassed?: Record<number, number>;
  isMonthLeadsLoading?: boolean;
  isQuarterPassedLoading?: boolean;
};

export function LeadGenerationPlanTable({
  monthLeads,
  quarterPassed,
  isMonthLeadsLoading,
  isQuarterPassedLoading,
}: LeadGenerationPlanTableProps) {
  const {
    data,
    renderMonth,
    renderProgress,
    checkIsDestructiveMonth,
    checkIsSuccessMonth,
    checkIsDestructiveQuarter,
    checkIsSuccessQuarter,
    checkIsEmptyQuarter,
  } = useLeadGenerationPlan({ monthLeads });

  return (
    <Table>
      <TableBody className="text-sm [&_tr>td:first-child]:w-[30%]">
        <TableRow>
          <TableCell className="!pt-0">Квартал</TableCell>
          {data.map((quarter) => (
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
          {data.map((quarter) => (
            <TableCell key={quarter.quarter} className="text-center">
              <div className="grid grid-cols-3 place-items-center">
                {quarter.months.map((month) => (
                  <Fragment key={month.idx}>
                    {!isMonthLeadsLoading ? (
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
          {data.map((quarter) => (
            <TableCell key={quarter.quarter} className="text-center">
              <div className="grid grid-cols-3 place-items-center">
                {quarter.months.map((month) => (
                  <Fragment key={month.idx}>
                    {!isMonthLeadsLoading ? (
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
          {data.map((quarter) => (
            <TableCell key={quarter.quarter} className="text-center">
              <div className="grid grid-cols-3 place-items-center">
                {quarter.months.map((month) => (
                  <Fragment>
                    {!isMonthLeadsLoading ? (
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
          {data.map((quarter) => (
            <TableCell key={quarter.quarter}>
              <div
                className={cn("flex items-center justify-center text-center", {
                  "text-secondary": checkIsEmptyQuarter(quarter),
                })}
              >
                {!isQuarterPassedLoading ? (
                  quarterPassed ? (
                    (quarterPassed[quarter.quarter] ?? "-")
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
          {data.map((quarter) => (
            <TableCell key={quarter.quarter}>
              <div
                className={cn("flex items-center justify-center", {
                  "text-destructive": checkIsDestructiveQuarter(quarter),
                  "text-success": checkIsSuccessQuarter(quarter),
                  "text-secondary": checkIsEmptyQuarter(quarter),
                })}
              >
                {!isMonthLeadsLoading ? (
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
