import { CompanyCard } from "@/entities/company";
import { CurrentNews } from "@/entities/news";
import { useDocumentTitle } from "usehooks-ts";

export function HomePage() {
  useDocumentTitle("Главная");
  return (
    <div className="main-space col-span-full">
      <CompanyCard />
      <CurrentNews />
    </div>
  );
}
