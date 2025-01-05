import { CompanyCard } from "@/entities/company";
import { useDocumentTitle } from "usehooks-ts";

export function HomePage() {
  useDocumentTitle("Главная");
  return (
    <div>
      <CompanyCard />
      {/* <section className="min-h-screen"></section> */}
      {/* <section className="min-h-screen"></section> */}
    </div>
  );
}
