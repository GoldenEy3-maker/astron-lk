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
    <article className="bg-primary/10 flex-col gap-y-5 sm:flex-row flex py-5 ~pl-4/9 ~gap-x-4/8 ~pr-4/7 rounded-main relative">
      <Link
        to={Routes.AcademyBenefits + "/" + id}
        className="absolute inset-0 rounded-main z-10 focus:outline-none focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 transition"
      />
      <div className="flex flex-col order-2 sm:order-1 gap-3 overflow-hidden">
        <h3 className="text-h3 text-primary">{parse(title)}</h3>
        <p className="~text-base/lg !leading-[1.3]">{parse(description)}</p>
        <div className="flex items-center mt-1 flex-wrap gap-2">
          {tags.map((tag) => (
            <AcademyBenefitsTagsBadge key={tag.id} label={tag.label} />
          ))}
        </div>
        <div className="flex text-primary mt-auto pt-4 items-center gap-2">
          <span>Перейти</span>
          <Icons.ArrowRight className="w-5 h-3.5" />
        </div>
      </div>
      <div className="flex items-center order-1 ml-auto sm:order-2 shrink-0 bg-card-accent relative justify-center w-full sm:~w-[15rem]/[26.25rem] rounded-main overflow-hidden h-[15rem]">
        <img
          src={img.src}
          alt={img.alt}
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </article>
  );
}
