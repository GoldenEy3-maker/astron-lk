import { Routes } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { Link } from "react-router-dom";
import { AcademySectionsList } from "./academy-sections-list";

type AcademyProps = {} & React.ComponentProps<typeof Section>;

export function Academy(props: AcademyProps) {
  return (
    <Section {...props}>
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Академия Astron</h1>
        <Button variant="link" size="hug" asChild className="font-normal">
          <Link to={Routes.Academy}>
            <span>Академия Astron</span>
            <Icons.ArrowRightLong />
          </Link>
        </Button>
      </SectionHeader>
      <SectionContent>
        <AcademySectionsList />
      </SectionContent>
    </Section>
  );
}
