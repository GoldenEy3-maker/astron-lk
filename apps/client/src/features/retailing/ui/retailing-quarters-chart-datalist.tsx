import { Skeleton } from "@/shared/ui/skeleton";

type RetailingQuartersChartDatalistProps = {
  extended?: boolean;
  fact?: number;
  plan?: number;
  progress?: number;
  isLoading?: boolean;
};

export function RetailingQuartersChartDatalist({
  extended,
  fact,
  isLoading,
  plan,
  progress,
}: RetailingQuartersChartDatalistProps) {
  if (extended)
    return (
      <dl className="flex flex-row gap-x-6 gap-y-7 sm:ml-auto sm:w-[calc(20%-0.25rem)] sm:flex-col sm:[grid-area:stack]">
        <div>
          <dt className="text-sm leading-none text-muted">Факт</dt>
          <dd className="mt-2 text-h3 leading-none">
            {fact ? (
              fact.toLocaleString("ru-RU")
            ) : (
              <Skeleton className="h-7 w-24 rounded-full" />
            )}
          </dd>
        </div>
        <div>
          <dt className="text-sm leading-none text-muted">От плана</dt>
          <dd className="mt-2 text-h3 leading-none">
            <span>
              {!isLoading && progress !== undefined ? (
                `${progress}%`
              ) : (
                <Skeleton className="h-7 w-14 rounded-full" />
              )}
            </span>
          </dd>
        </div>
      </dl>
    );

  return (
    <dl className="flex w-full flex-wrap gap-x-4 gap-y-6 font-medium">
      <div className="flex-1">
        <dt className="leading-none text-muted">План</dt>
        <dd className="mt-4 leading-none">
          {!isLoading && plan ? (
            plan.toLocaleString("ru-RU")
          ) : (
            <Skeleton className="h-4 w-20 rounded-full" />
          )}
        </dd>
      </div>
      <div className="flex-1">
        <dt className="leading-none text-muted">Факт</dt>
        <dd className="mt-4 leading-none">
          {!isLoading && fact ? (
            fact?.toLocaleString("ru-RU")
          ) : (
            <Skeleton className="h-4 w-16 rounded-full" />
          )}
        </dd>
      </div>
      <div className="flex-1">
        <dt className="leading-none text-muted">Выполнение</dt>
        <dd className="mt-4 leading-none">
          {!isLoading && progress !== undefined ? (
            `${progress}%`
          ) : (
            <Skeleton className="h-4 w-10 rounded-full" />
          )}
        </dd>
      </div>
    </dl>
  );
}
