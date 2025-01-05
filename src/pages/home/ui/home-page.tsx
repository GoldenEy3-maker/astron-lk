import { CompanyCard } from "@/entities/company";
import { NewsSection } from "@/entities/news";
import { useDocumentTitle } from "usehooks-ts";

export function HomePage() {
  useDocumentTitle("Главная");
  return (
    <div className="main-space">
      <CompanyCard />
      <NewsSection />
    </div>
  );
}
