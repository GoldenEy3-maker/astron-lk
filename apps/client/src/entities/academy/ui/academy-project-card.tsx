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
    <article className="group relative flex flex-col rounded-main bg-primary/10 ~min-h-[12rem]/[17.5rem] ~px-5/7 ~py-5/8">
      <Link
        to={`${
          asWebinars ? Routes.AcademyWebinars : Routes.AcademyProjects
        }/${id}`}
        className="absolute inset-0 z-10 rounded-main ring-offset-background transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
      <img
        src={img.src}
        alt={img.alt}
        className="absolute inset-0 -z-[1] size-full rounded-main object-cover opacity-0 brightness-[60%] transition duration-300 group-hover:opacity-100"
      />
      <h3 className="text-h3 text-primary transition duration-300 group-hover:text-primary-foreground">
        {parse(title)}
      </h3>
      <p className="mt-3 !leading-[1.3] transition duration-300 ~text-base/lg group-hover:text-primary-foreground">
        {parse(description)}
      </p>
      <div className="mt-auto flex items-center gap-3 pt-5 text-primary transition duration-300 group-hover:text-primary-foreground">
        <span>Перейти</span>
        <Icons.ArrowRight className="h-3.5 w-5" />
      </div>
    </article>
  );
}
