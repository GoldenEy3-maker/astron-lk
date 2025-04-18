import { useQuery } from "@tanstack/react-query";
import { Icons } from "@/shared/ui/icons";
import { Button } from "@/shared/ui/button";
import { getProjectsCountText } from "../lib/get-projects-count-text";
import { getCooperationYearsText } from "../lib/get-cooperation-years-text";
import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/lib/cn";
import {
  getPartnerByIdQueryOptions,
  getPartnerBySessionQueryOptions,
} from "../api/partner-query";
import { PartnerStatusKeyToValueMap } from "../constants/partner-status-map";

type PartnerCardProps = { id?: string } & React.ComponentProps<"article">;

export function PartnerCard({ id, className, ...props }: PartnerCardProps) {
  const { data, isLoading } = useQuery(
    id ? getPartnerByIdQueryOptions(id) : getPartnerBySessionQueryOptions(),
  );

  return (
    <article
      className={cn(
        "flex items-start rounded-main border-b-[3px] bg-card ~gap-7/14 ~px-7/14 ~py-5/9",
        {
          "border-platinum": data?.status === "platinum",
          "border-gold": data?.status === "gold",
          "border-silver": data?.status === "silver",
        },
        className,
      )}
      {...props}
    >
      {!isLoading && data ? (
        data.logo ? (
          <img
            src={data.logo}
            alt={data.title}
            className="~h-16/24 ~w-[5rem]/[8rem] max-sm:hidden"
          />
        ) : null
      ) : (
        <Skeleton className="!rounded-main ~h-16/24 ~w-[5rem]/[8rem] max-sm:hidden" />
      )}
      <div className="flex-1">
        <div className="flex flex-col items-start justify-between gap-x-6 gap-y-3 sm:flex-row">
          {!isLoading && data ? (
            <h2 className="order-2 max-w-[31.25rem] text-h2 text-heading-h3 sm:order-1">
              {data.title}
            </h2>
          ) : (
            <div className="w-full space-y-2">
              <Skeleton className="h-4 w-3/5 !rounded-full" />
              <Skeleton className="h-4 w-2/5 !rounded-full" />
            </div>
          )}
          {!isLoading && data ? (
            data.status ? (
              <div
                className={cn(
                  "order-1 flex items-center gap-3 font-medium sm:order-2",
                  {
                    "text-platinum": data.status === "platinum",
                    "text-gold": data.status === "gold",
                    "text-silver": data.status === "silver",
                  },
                )}
              >
                <Icons.Cup className="shrink-0" />
                <span className="~text-sm/base">
                  {PartnerStatusKeyToValueMap[data.status]}
                </span>
              </div>
            ) : null
          ) : (
            <Skeleton className="h-5 w-1/4 !rounded-full" />
          )}
        </div>
        <div
          // className="grid grid-cols-2 gap-x-4 gap-y-2 ~mt-4/5 sm:grid-cols-3"
          className="grid grid-cols-2 gap-x-4 gap-y-2 ~mt-4/5"
        >
          {!isLoading && data ? (
            data.projects ? (
              <div className="flex flex-col items-start">
                <>
                  <Button
                    asChild
                    variant="underline"
                    size="hug"
                    className="justify-start font-normal"
                  >
                    <a className="text-h4" href={data.projects.link}>
                      {getProjectsCountText(data.projects.count || 0)}
                    </a>
                  </Button>
                  <span className="mt-0.5 leading-tight text-muted ~text-sm/base">
                    на карте проектов Astron
                  </span>
                </>
              </div>
            ) : null
          ) : (
            <div className="flex flex-col items-start">
              <Skeleton className="h-4 w-24 !rounded-full" />
              <Skeleton className="mt-2 h-4 w-4/5 !rounded-full" />
            </div>
          )}
          {/* {!isLoading && data ? (
            data.projects?.implementedArea ? (
              <div className="flex flex-col items-start">
                <>
                  <h4 className="text-h4">
                    {new Intl.NumberFormat("ru-RU", {
                      minimumFractionDigits: 0,
                    }).format(data.projects.implementedArea || 0)}
                    &nbsp;м²
                  </h4>
                  <span className="mt-0.5 leading-tight text-muted ~text-sm/base">
                    реализовано проектов
                  </span>
                </>
              </div>
            ) : null
          ) : (
            <div className="flex flex-col items-start">
              <Skeleton className="h-4 w-24 !rounded-full" />
              <Skeleton className="mt-2 h-4 w-4/5 !rounded-full" />
            </div>
          )} */}
          {!isLoading && data ? (
            data.cooperationYears ? (
              <div className="flex flex-col items-start">
                <>
                  <h4 className="text-h4">
                    {getCooperationYearsText(data.cooperationYears || 0)}
                  </h4>
                  <span className="mt-0.5 leading-tight text-muted ~text-sm/base">
                    сотрудничества
                  </span>
                </>
              </div>
            ) : null
          ) : (
            <div className="flex flex-col items-start">
              <Skeleton className="h-4 w-24 !rounded-full" />
              <Skeleton className="mt-2 h-4 w-4/5 !rounded-full" />
            </div>
          )}
        </div>
        <div className="~mt-4/5">
          {!isLoading && data ? (
            data.certificate ? (
              <Button
                asChild
                variant="link"
                size="sm"
                className="p-0 font-normal ~text-sm/base"
              >
                <a href={data.certificate} target="_blank">
                  <Icons.DocumentDownload />
                  <span>Сертификат Партнёра-Строителя</span>
                </a>
              </Button>
            ) : null
          ) : (
            <Skeleton className="h-7 w-3/4 !rounded-main" />
          )}
        </div>
      </div>
    </article>
  );
}
