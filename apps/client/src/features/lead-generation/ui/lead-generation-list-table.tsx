import { schemas } from "@/shared/api/v1";
import { cn } from "@/shared/lib/cn";
import { formatDate } from "@/shared/lib/format-date";
import { getFiscalQuarter } from "@repo/date";
import { Skeleton } from "@/shared/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { Fragment } from "react/jsx-runtime";
import { z } from "zod";

type LeadGenerationListTableProps = {
  data?: {
    data: z.infer<typeof schemas.LeadGenerationItem>[];
    uploadedAt: string;
    updatedAt: string;
  };
  isLoading?: boolean;
};

export function LeadGenerationListTable({
  data,
  isLoading,
}: LeadGenerationListTableProps) {
  const quarters = data?.data.reduce((acc, item) => {
    const fixedAtDate = new Date(item.fixedAt);
    const quarter = getFiscalQuarter(fixedAtDate);

    if (acc.has(quarter)) {
      acc.set(quarter, [...acc.get(quarter)!, item]);
    } else {
      acc.set(quarter, [item]);
    }

    return acc;
  }, new Map<number, typeof data.data>());

  return (
    <Table>
      <TableHeader className="border-b border-stroke">
        <TableRow>
          <TableHead className="!pb-3.5 leading-none">Дата</TableHead>
          <TableHead className="!pb-3.5 leading-none">Номер проекта</TableHead>
          <TableHead className="!pb-3.5 text-right leading-none text-foreground ~text-base/lg">
            {data?.data.length} лида
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!isLoading && quarters ? (
          Array.from(quarters).map(([quarter, leads]) => (
            <Fragment key={quarter}>
              <TableRow className="border-none">
                <TableCell
                  colSpan={3}
                  className={cn("!p-0 !pt-3 leading-none", {
                    "!pt-2.5": quarter === 1,
                  })}
                >
                  {quarter} квартал
                </TableCell>
              </TableRow>
              {leads.map((lead, idx) => (
                <TableRow
                  key={lead.id}
                  className={cn({ "border-none": idx === leads.length - 1 })}
                >
                  <TableCell className="text-muted">
                    {formatDate(new Date(lead.fixedAt), "dd.MM.yyyy")}
                  </TableCell>
                  <TableCell>{lead.project.id}</TableCell>
                  <TableCell>{lead.project.name}</TableCell>
                </TableRow>
              ))}
            </Fragment>
          ))
        ) : (
          <>
            <TableRow className="border-none">
              <TableCell colSpan={3} className="!p-0 !pt-2.5">
                <Skeleton className="h-4 w-24 rounded-full" />
              </TableCell>
            </TableRow>
            {Array.from({ length: 4 }, (_, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <Skeleton className="h-4 w-20 rounded-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-20 rounded-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-64" />
                </TableCell>
              </TableRow>
            ))}
          </>
        )}
      </TableBody>
    </Table>
  );
}
