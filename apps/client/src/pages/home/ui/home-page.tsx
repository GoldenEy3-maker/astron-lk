import { CurrentBulletins } from "@/entities/document";
import { CompanyCard } from "@/entities/company";
import { CurrentNews } from "@/entities/news";
import { useDocumentTitle } from "usehooks-ts";
import { Kpi } from "@/widgets/kpi";
import { FeedbackCard } from "@/features/feedback";
import { Factory } from "@/widgets/factory";

export function HomePage() {
  useDocumentTitle("Главная");
  return (
    <div className="main-space grid grid-cols-subgrid col-span-full">
      <CompanyCard className="col-span-full" />
      <Kpi className="col-span-full" />
      <CurrentNews className="col-span-full" />
      <CurrentBulletins className="col-span-full" />
      <Factory className="col-span-full" />
      <FeedbackCard className="col-span-full" />
    </div>
  );
}
