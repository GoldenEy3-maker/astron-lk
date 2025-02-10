import { schemas } from "@/shared/api/v1";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";
import { z } from "zod";
import { IconParser } from "../lib/icon-parser";

type AcademySectionCardProps = {
  link: string;
  Icon?: ((props: React.SVGProps<SVGSVGElement>) => React.JSX.Element) | string;
} & React.ComponentProps<"article"> &
  Omit<z.infer<typeof schemas.AcademySectionInList>, "icon" | "id">;

export function AcademySectionCard({
  link,
  title,
  Icon,
  bgImg,
}: AcademySectionCardProps) {
  return (
    <article className="group relative flex flex-col rounded-main bg-primary/10 p-7 text-primary transition duration-300 ~min-h-[12rem]/[17.5rem] hover:bg-primary hover:text-primary-foreground">
      <Link
        to={link}
        className="absolute inset-0 z-20 rounded-main ring-offset-background transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
      {bgImg ? (
        <img
          src={bgImg}
          alt={`Фоновое изображение ссылки академии - ${title}`}
          className="absolute inset-0 size-full rounded-main object-cover opacity-0 transition duration-300 group-hover:opacity-100"
        />
      ) : null}
      <div className="relative z-10 flex items-start justify-between gap-6">
        <h3 className="text-h3">{title}</h3>
        {typeof Icon === "string" ? (
          <IconParser icon={Icon} className="shrink-0 ~size-10/[3.75rem]" />
        ) : Icon ? (
          <Icon className="shrink-0 ~size-10/[3.75rem]" />
        ) : null}
      </div>
      <div className="relative z-10 mt-auto flex items-center gap-3">
        <span>Перейти в раздел</span>
        <Icons.ArrowRight className="h-3.5 w-5" />
      </div>
    </article>
  );
}
