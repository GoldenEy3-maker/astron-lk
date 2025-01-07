import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";
import { Actions } from "./actions";
import { Breadcrumbs } from "@/widgets/breadcrumbs";

export function Header() {
  return (
    <div className="col-[main] mt-5">
      <header className="bg-card justify-between gap-4 rounded-main py-[0.875rem] px-6 flex items-center shadow-[0_0_0.75rem_0] shadow-black/5">
        <Link
          to={Routes.Home}
          className="inline-flex text-primary items-center gap-4 text-lg">
          <Icons.Logo />
          <span>Личный кабинет</span>
        </Link>
        <Actions />
      </header>
      <Breadcrumbs />
    </div>
  );
}
