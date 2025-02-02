import { schemas } from "@/shared/api/v1";
import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";
import { z } from "zod";
import parse from "html-react-parser";
import { AcademyBenefitsTagsBadge } from "./academy-benefits-tags-badge";

type AcademyBenefitsCardProps = {} & z.infer<
  typeof schemas.AcademyBenefitInList
>;

export function AcademyBenefitsCard({
  title,
  description,
  id,
  img,
  tags,
}: AcademyBenefitsCardProps) {
  return (
    <article className="relative flex flex-col gap-y-5 rounded-main bg-primary/10 py-5 ~gap-x-4/8 ~pr-4/7 ~pl-4/9 sm:flex-row">
      <Link
        to={Routes.AcademyBenefits + "/" + id}
        className="absolute inset-0 z-10 rounded-main transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
      <div className="order-2 flex flex-col gap-3 overflow-hidden sm:order-1">
        <h3 className="text-h3 text-primary">{parse(title)}</h3>
        <p className="!leading-[1.3] ~text-base/lg">{parse(description)}</p>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <AcademyBenefitsTagsBadge key={tag.id} label={tag.label} />
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 pt-4 text-primary">
          <span>Перейти</span>
          <Icons.ArrowRight className="h-3.5 w-5" />
        </div>
      </div>
      <div className="relative order-1 ml-auto flex h-[15rem] w-full shrink-0 items-center justify-center overflow-hidden rounded-main bg-card-accent sm:order-2 sm:~w-[15rem]/[26.25rem]">
        <img
          src={img.src}
          alt={img.alt}
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </article>
  );
}
