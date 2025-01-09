import { useQuery } from "@tanstack/react-query";
import { getUserCompanyQueryOptions } from "../api/company-query";
import { Icons } from "@/shared/ui/icons";
import { Button } from "@/shared/ui/button";
import { getProjectsCountText } from "../lib/get-projects-count-text";
import { getCooperationYearsText } from "../lib/get-cooperation-years-text";
import { Skeleton } from "@/shared/ui/skeleton";

export function CompanyCard() {
  const { data, isLoading } = useQuery(getUserCompanyQueryOptions());

  return (
    <article className="bg-card rounded-main items-start flex gap-14 py-9 px-14 border-b-2 border-gold">
      {!isLoading ? (
        <img src={data?.logo} alt={data?.title} className="w-[8rem] h-24" />
      ) : (
        <Skeleton className="w-[8rem] h-24 !rounded-main" />
      )}
      <div className="flex-1">
        <div className="flex justify-between items-start gap-6">
          {!isLoading ? (
            <h2 className="text-h2 text-heading-h3 max-w-[31.25rem]">
              {data?.title}
            </h2>
          ) : (
            <div className="space-y-2 w-full">
              <Skeleton className="w-3/5 h-4 !rounded-full" />
              <Skeleton className="w-2/5 h-4 !rounded-full" />
            </div>
          )}
          {!isLoading ? (
            <div className="flex items-center gap-3 text-gold font-medium">
              <Icons.Cup />
              <span>Золотой Партнёр</span>
            </div>
          ) : (
            <Skeleton className="w-1/4 h-5 !rounded-full" />
          )}
        </div>
        <div className="grid grid-cols-3 mt-5">
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
                <span className="text-muted">реализовано с Astron</span>
              </>
            ) : (
              <>
                <Skeleton className="w-24 h-4 !rounded-full" />
                <Skeleton className="w-40 mt-2 h-4 !rounded-full" />
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
                <span className="text-muted">реализовано проектов</span>
              </>
            ) : (
              <>
                <Skeleton className="w-24 h-4 !rounded-full" />
                <Skeleton className="w-40 mt-2 h-4 !rounded-full" />
              </>
            )}
          </div>
          <div className="flex flex-col items-start">
            {!isLoading ? (
              <>
                <h4 className="text-h4">
                  {getCooperationYearsText(data?.cooperationYears || 0)}
                </h4>
                <span className="text-muted">сотрудничества</span>
              </>
            ) : (
              <>
                <Skeleton className="w-24 h-4 !rounded-full" />
                <Skeleton className="w-40 mt-2 h-4 !rounded-full" />
              </>
            )}
          </div>
        </div>
        <div className="mt-5">
          {!isLoading ? (
            <Button
              asChild
              variant="ghost-primary"
              size="sm"
              className="font-normal">
              <a href={data?.certificate} target="_blank">
                <Icons.DocumentDownload />
                <span>Сертификат Партнёра-Строителя</span>
              </a>
            </Button>
          ) : (
            <Skeleton className="w-72 h-7 !rounded-main" />
          )}
        </div>
      </div>
    </article>
  );
}
