import { schemas } from "@/shared/api/v1";
import { Routes } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/cn";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";
import { z } from "zod";
import parse from "html-react-parser";

type AcademySalesCardProps = {
  isWrapArrowLine?: boolean;
  isNextArrowLine?: boolean;
} & z.infer<typeof schemas.AcademySales>;

export function AcademySalesCard({
  title,
  description,
  slug,
  isNextArrowLine,
  isWrapArrowLine,
}: AcademySalesCardProps) {
  return (
    <article
      key={slug}
      className={cn(
        "group relative rounded-main bg-primary/10 text-primary transition duration-300 ~min-h-[8rem]/[9.25rem] ~px-4/7 ~py-3/4 hover:bg-primary hover:text-primary-foreground",
        {
          "after:pointer-events-none after:absolute after:left-1/2 after:right-auto after:top-[110%] after:h-1.5 after:w-[2.125rem] after:rotate-90 after:bg-[url('/icons/dashed-arrow-line.svg')] after:bg-center after:bg-no-repeat max-xs:after:-translate-x-1/2 xs:after:-right-[2.125rem] xs:after:left-auto xs:after:top-1/2 xs:after:rotate-0":
            isNextArrowLine,
          "before:pointer-events-none before:-bottom-8 before:right-0 before:h-8 before:w-[var(--container-width)] before:bg-[url('/icons/md-dashed-wrap-arrow-line.svg')] before:bg-center before:bg-no-repeat xs:before:absolute min-[43.75rem]:before:bg-[url('/icons/m-md-dashed-wrap-arrow-line.svg')] min-[56.25rem]:before:bg-[url('/icons/dashed-wrap-arrow-line.svg')]":
            isWrapArrowLine,
        },
      )}
    >
      <Link
        to={Routes.AcademySalesStages + "/?tab=" + slug}
        className="absolute inset-0 z-20 rounded-main ring-offset-background transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
      <h3 className="text-h3">
        {title}&nbsp;
        <Icons.ArrowRight className="inline h-2 w-3 opacity-0 transition-[opacity] duration-300 group-hover:opacity-100" />
      </h3>
      {description ? (
        <p className="!leading-[1.3] opacity-0 transition-[opacity] duration-300 ~text-base/lg ~mt-2/3 group-hover:opacity-100">
          {parse(description)}
        </p>
      ) : null}
    </article>
  );
}
