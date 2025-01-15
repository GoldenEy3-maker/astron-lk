import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Routes } from "@/shared/constants/routes";
import { Link } from "react-router-dom";
import { Bulletins } from "./bulletins";
import { cn } from "@/shared/lib/cn";

type CurrentBulletinsProps = {} & React.ComponentProps<"section">;

export function CurrentBulletins({
  className,
  ...props
}: CurrentBulletinsProps) {
  return (
    <Section className={cn("grid grid-cols-subgrid", className)} {...props}>
      <SectionHeader className="col-span-full">
        <h1 className="text-h1 text-heading-h2">Актуальные бюллетени</h1>
        <Button asChild variant="link" size="hug">
          <Link to={Routes.Bulletins}>
            <span>Все бюллетени</span>
            <Icons.ArrowRightLong />
          </Link>
        </Button>
      </SectionHeader>
      <SectionContent className="grid col-span-full gap-y-8 grid-cols-subgrid space-y-0">
        <div className="m-xl:col-span-8 m-md:col-span-11 md:col-span-9 col-span-full ~text-base/lg leading-[1.3]">
          <p>
            Наши бюллетени&nbsp;&mdash; это надёжный источник информации
            о&nbsp;последних тенденциях в&nbsp;строительстве быстровозводимых
            зданий. Вы&nbsp;всегда будете в&nbsp;курсе самых актуальных новостей
            и&nbsp;сможете принимать обоснованные решения, основанные
            на&nbsp;проверенных данных.
          </p>
        </div>
        <Bulletins
          className="m-xl:col-[11/span_9] m-md:col-[15/span_10] md:col-[13/span_12] col-span-full"
          limit={3}
        />
      </SectionContent>
    </Section>
  );
}
