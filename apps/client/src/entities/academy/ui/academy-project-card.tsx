import { schemas } from "@/shared/api/v1";
import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";
import { z } from "zod";
import parse from "html-react-parser";

type AcademyProjectCardProps = { asWebinars?: boolean } & z.infer<
  typeof schemas.AcademyProjectInList
>;

export function AcademyProjectCard({
  title,
  description,
  id,
  img,
  asWebinars,
}: AcademyProjectCardProps) {
  return (
    <article className="flex flex-col ~py-5/8 ~px-5/7 group bg-primary/10 rounded-main relative ~min-h-[12rem]/[17.5rem]">
      <Link
        to={`${
          asWebinars ? Routes.AcademyWebinars : Routes.AcademyProjects
        }/${id}`}
        className="absolute inset-0 z-10 ring-offset-background rounded-main focus:outline-none focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 transition"
      />
      <img
        src={img.src}
        alt={img.alt}
        className="absolute inset-0 size-full -z-[1] rounded-main object-cover opacity-0 group-hover:opacity-100 duration-300 transition brightness-[60%]"
      />
      <h3 className="text-primary text-h3 group-hover:text-primary-foreground transition duration-300">
        {parse(title)}
      </h3>
      <p className="~text-base/lg group-hover:text-primary-foreground transition duration-300 mt-3 !leading-[1.3]">
        {parse(description)}
      </p>
      <div className="flex pt-5 items-center gap-3 text-primary group-hover:text-primary-foreground transition duration-300 mt-auto">
        <span>Перейти</span>
        <Icons.ArrowRight className="w-5 h-3.5" />
      </div>
    </article>
  );
}
