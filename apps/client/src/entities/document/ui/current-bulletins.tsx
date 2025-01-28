import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Routes } from "@/shared/constants/routes";
import { Link } from "react-router-dom";
import { cn } from "@/shared/lib/cn";
import { Documents } from "./documents";

type CurrentBulletinsProps = {} & React.ComponentProps<"section">;

export function CurrentBulletins({
  className,
  ...props
}: CurrentBulletinsProps) {
  return (
    <Section className={cn("grid grid-cols-subgrid", className)} {...props}>
      <SectionHeader className="col-span-full">
        <h1 className="text-h1 text-heading-h2">Актуальные бюллетени</h1>
        <Button asChild variant="link" size="hug" className="font-normal">
          <Link to={Routes.Bulletins}>
            <span>Все бюллетени</span>
            <Icons.ArrowRightLong />
          </Link>
        </Button>
      </SectionHeader>
      <SectionContent className="current-section-layout space-y-0">
        <div className="current-section-layout__first">
          <div className="current-section-layout__text">
            <p>
              Наши бюллетени&nbsp;&mdash; это надёжный источник информации
              о&nbsp;последних тенденциях в&nbsp;строительстве быстровозводимых
              зданий. Вы&nbsp;всегда будете в&nbsp;курсе самых актуальных
              новостей и&nbsp;сможете принимать обоснованные решения, основанные
              на&nbsp;проверенных данных.
            </p>
          </div>
        </div>
        <Documents
          queryKey="bulletins"
          className="current-section-layout__second"
          documentsListClassName="!grid-cols-1"
          limit={3}
        />
      </SectionContent>
    </Section>
  );
}
