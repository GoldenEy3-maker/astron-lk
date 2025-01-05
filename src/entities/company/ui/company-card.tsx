import { useQuery } from "@tanstack/react-query";
import { getUserCompanyQueryOptions } from "../api/company-query";
import { Icons } from "@/shared/ui/icons";
import { Button } from "@/shared/ui/button";
import { getProjectsCountText } from "../lib/get-projects-count-text";
import { getCooperationYearsText } from "../lib/get-cooperation-years-text";

export function CompanyCard() {
  const { data } = useQuery(getUserCompanyQueryOptions());

  return (
    <article className="bg-card rounded-main items-start flex gap-14 py-9 px-14 border-b-2 border-gold">
      <img src={data?.logo} alt={data?.title} />
      <div className="flex-1">
        <div className="flex justify-between items-start gap-6">
          <h2 className="text-h2 text-heading-h3 max-w-[31.25rem]">
            {data?.title}
          </h2>
          <div className="flex items-center gap-3 text-gold font-medium">
            <Icons.Cup />
            <span>Золотой Партнёр</span>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-5">
          <div className="flex flex-col items-start">
            <Button
              asChild
              variant="underline"
              size="hug"
              className="font-normal justify-start">
              <a className="text-h4" href={data?.projectsLink}>
                {getProjectsCountText(data?.projects || 0)}
              </a>
            </Button>
            <span className="text-muted">реализовано с Astron</span>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-h4">
              {new Intl.NumberFormat("ru-RU", {
                minimumFractionDigits: 0,
              }).format(data?.projectsImplementedArea || 0)}
              &nbsp;м²
            </h4>
            <span className="text-muted">реализовано проектов</span>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-h4">
              {getCooperationYearsText(data?.cooperationYears || 0)}
            </h4>
            <span className="text-muted">сотрудничества</span>
          </div>
        </div>
        <div className="mt-5">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="font-normal text-primary">
            <a href={data?.certificate} target="_blank">
              <Icons.DocumentDownload />
              <span>Сертификат Партнёра-Строителя</span>
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
