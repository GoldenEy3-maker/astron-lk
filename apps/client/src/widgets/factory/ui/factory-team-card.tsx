import { schemas } from "@/shared/api/v1";
import { formatPhone } from "@/shared/lib/format-phone";
import { Button } from "@/shared/ui/button";
import { z } from "zod";

type FactoryTeamCardProps = {} & z.infer<typeof schemas.FactoryTeam>;

export function FactoryTeamCard({
  id,
  img,
  role,
  title,
  phone,
  email,
}: FactoryTeamCardProps) {
  return (
    <article key={id} className="flex flex-col items-start">
      <img
        src={img.src}
        className="h-80 w-full rounded-main object-cover"
        alt={img.alt}
      />
      <span className="mt-5 text-sm text-muted">{role}</span>
      <h2 className="mt-2 text-h2">{title}</h2>
      <span className="mt-3">{formatPhone(phone)}</span>
      <Button variant="link" size="hug" className="mt-2 font-normal">
        <a href={`mailto:${email}`}>{email}</a>
      </Button>
    </article>
  );
}
