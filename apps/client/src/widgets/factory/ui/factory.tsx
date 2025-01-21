import { Routes } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { Link } from "react-router-dom";
import { FactoryAbout } from "./factory-about";

type FactoryProps = {} & React.ComponentProps<typeof Section>;

export function Factory({ className, ...props }: FactoryProps) {
  return (
    <Section
      space="lg"
      className={cn("grid grid-cols-subgrid", className)}
      {...props}>
      <SectionHeader className="col-span-full">
        <h1 className="text-h1 text-heading-h2">О заводе Astron</h1>
        <Button asChild variant="link" size="hug" className="font-normal">
          <Link to={Routes.Factory}>
            <span>О производстве</span>
            <Icons.ArrowRightLong />
          </Link>
        </Button>
      </SectionHeader>
      <SectionContent className="space-y-0 grid grid-cols-subgrid col-span-full">
        <FactoryAbout />
      </SectionContent>
    </Section>
  );
}
