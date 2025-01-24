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
        "~py-3/4 ~px-4/7 group rounded-main ~min-h-[8rem]/[9.25rem] hover:bg-primary transition duration-300 hover:text-primary-foreground bg-primary/10 text-primary relative",
        {
          "after:absolute xs:after:rotate-0 after:rotate-90 after:top-[110%] max-xs:after:-translate-x-1/2 after:left-1/2 after:right-auto xs:after:left-auto xs:after:top-1/2 xs:after:-right-[2.125rem] after:w-[2.125rem] after:bg-[url('/icons/dashed-arrow-line.svg')] after:bg-no-repeat after:bg-center after:h-1.5 after:pointer-events-none":
            isNextArrowLine,
          "xs:before:absolute before:-bottom-8 before:right-0 before:w-[var(--container-width)] before:h-8 min-[56.25rem]:before:bg-[url('/icons/dashed-wrap-arrow-line.svg')] min-[43.75rem]:before:bg-[url('/icons/m-md-dashed-wrap-arrow-line.svg')] before:bg-[url('/icons/md-dashed-wrap-arrow-line.svg')] before:bg-no-repeat before:bg-center before:pointer-events-none":
            isWrapArrowLine,
        }
      )}>
      <Link
        to={Routes.AcademySalesStages + "/?tab=" + slug}
        className="absolute inset-0 z-20 ring-offset-background rounded-main focus:outline-none focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 transition"
      />
      <h3 className="text-h3">
        {title}&nbsp;
        <Icons.ArrowRight className="inline w-3 h-2 opacity-0 group-hover:opacity-100 duration-300 transition-[opacity]" />
      </h3>
      <p className="~text-base/lg ~mt-2/3 !leading-[1.3] opacity-0 group-hover:opacity-100 duration-300 transition-[opacity]">
        {parse(description)}
      </p>
    </article>
  );
}
