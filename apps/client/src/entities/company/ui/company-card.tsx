import { useQuery } from "@tanstack/react-query";
import { getUserCompanyQueryOptions } from "../api/company-query";
import { Icons } from "@/shared/ui/icons";
import { Button } from "@/shared/ui/button";
import { getProjectsCountText } from "../lib/get-projects-count-text";
import { getCooperationYearsText } from "../lib/get-cooperation-years-text";
import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/lib/cn";

type CompanyCardProps = {} & React.ComponentProps<"article">;

export function CompanyCard({ className, ...props }: CompanyCardProps) {
  const { data, isLoading } = useQuery(getUserCompanyQueryOptions());

  return (
    <article
      className={cn(
        "bg-card rounded-main items-start flex ~gap-7/14 ~py-5/9 ~px-7/14 border-b-2 border-gold",
        className
      )}
      {...props}>
      {!isLoading ? (
        <img
          src={data?.logo}
          alt={data?.title}
          className="~w-[5rem]/[8rem] max-sm:hidden ~h-16/24"
        />
      ) : (
        <Skeleton className="~w-[5rem]/[8rem] max-sm:hidden ~h-16/24 !rounded-main" />
      )}
      <div className="flex-1">
        <div className="flex justify-between items-start flex-col sm:flex-row gap-x-6 gap-y-3">
          {!isLoading ? (
            <h2 className="text-h2 text-heading-h3 order-2 sm:order-1 max-w-[31.25rem]">
              {data?.title}
            </h2>
          ) : (
            <div className="space-y-2 w-full">
              <Skeleton className="w-3/5 h-4 !rounded-full" />
              <Skeleton className="w-2/5 h-4 !rounded-full" />
            </div>
          )}
          {!isLoading ? (
            <div className="flex items-center gap-3 text-gold font-medium order-1 sm:order-2">
              <Icons.Cup className="shrink-0" />
              <span className="~text-sm/base">Золотой Партнёр</span>
            </div>
          ) : (
            <Skeleton className="w-1/4 h-5 !rounded-full" />
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 ~mt-4/5">
          <div className="flex flex-col items-start">
            {!isLoading ? (
              <>
                <Button
                  asChild
                  variant="underline"
                  size="hug"
                  className="font-normal justify-start">
                  <a className="text-h4" href={data?.projects.link}>
                    {getProjectsCountText(data?.projects.count || 0)}
                  </a>
                </Button>
                <span className="text-muted leading-tight ~text-sm/base mt-0.5">
                  реализовано с Astron
                </span>
              </>
            ) : (
              <>
                <Skeleton className="w-24 h-4 !rounded-full" />
                <Skeleton className="w-4/5 mt-2 h-4 !rounded-full" />
              </>
            )}
          </div>
          <div className="flex flex-col items-start">
            {!isLoading ? (
              <>
                <h4 className="text-h4">
                  {new Intl.NumberFormat("ru-RU", {
                    minimumFractionDigits: 0,
                  }).format(data?.projects.implementedArea || 0)}
                  &nbsp;м²
                </h4>
                <span className="text-muted leading-tight ~text-sm/base mt-0.5">
                  реализовано проектов
                </span>
              </>
            ) : (
              <>
                <Skeleton className="w-24 h-4 !rounded-full" />
                <Skeleton className="w-4/5 mt-2 h-4 !rounded-full" />
              </>
            )}
          </div>
          <div className="flex flex-col items-start">
            {!isLoading ? (
              <>
                <h4 className="text-h4">
                  {getCooperationYearsText(data?.cooperationYears || 0)}
                </h4>
                <span className="text-muted leading-tight ~text-sm/base mt-0.5">
                  сотрудничества
                </span>
              </>
            ) : (
              <>
                <Skeleton className="w-24 h-4 !rounded-full" />
                <Skeleton className="w-4/5 mt-2 h-4 !rounded-full" />
              </>
            )}
          </div>
        </div>
        <div className="~mt-4/5">
          {!isLoading ? (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="font-normal ~text-sm/base text-primary">
              <a href={data?.certificate} target="_blank">
                <Icons.DocumentDownload />
                <span>Сертификат Партнёра-Строителя</span>
              </a>
            </Button>
          ) : (
            <Skeleton className="w-3/4 h-7 !rounded-main" />
          )}
        </div>
      </div>
    </article>
  );
}
