import { schemas } from "@/shared/api/v1";
import { formatPhone } from "@/shared/lib/phone-format";
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
        className="rounded-main w-full h-80 object-cover"
        alt={img.alt}
      />
      <span className="mt-5 text-sm text-muted">{role}</span>
      <h2 className="text-h2 mt-2">{title}</h2>
      <span className="mt-3">{formatPhone(phone)}</span>
      <Button variant="link" size="hug" className="mt-2 font-normal">
        <a href={`mailto:${email}`}>{email}</a>
      </Button>
    </article>
  );
}
