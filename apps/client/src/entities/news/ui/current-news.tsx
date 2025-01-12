import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Section, SectionHeader, SectionContent } from "@/shared/ui/section";
import { Link } from "react-router-dom";
import { News } from "./news";
import { Routes } from "@/shared/constants/routes";

export function CurrentNews() {
  return (
    <Section>
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Актуальные новости</h1>
        <Button asChild variant="link" size="hug">
          <Link to={Routes.News}>
            <span>Читать блог</span>
            <Icons.ArrowRightLong />
          </Link>
        </Button>
      </SectionHeader>
      <SectionContent>
        <News limit={4} />
      </SectionContent>
    </Section>
  );
}
