import { schemas } from "@/shared/api/v1";
import { formatPhone } from "@/shared/lib/format-phone";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { z } from "zod";

type FactoryTeamCardProps = {} & z.infer<typeof schemas.FactoryTeam>;

export function FactoryTeamCard({
  img,
  role,
  title,
  phone,
  email,
}: FactoryTeamCardProps) {
  return (
    <article className="flex flex-col items-start">
      <div className="relative inline-flex w-full items-center justify-center overflow-hidden rounded-main bg-white ~h-60/80">
        {img ? (
          <img src={img.src} className="size-full object-cover" alt={img.alt} />
        ) : (
          <Icons.FactoryTeamNoImage className="text-primary/50" />
        )}
      </div>
      <h2 className="mt-5 text-h2">{title}</h2>
      <span className="mt-2 text-sm text-muted">{role}</span>
      <span className="mt-3">{formatPhone(phone)}</span>
      {email ? (
        <Button variant="link" size="hug" className="mt-2 font-normal">
          <a href={`mailto:${email}`}>{email}</a>
        </Button>
      ) : null}
    </article>
  );
}
