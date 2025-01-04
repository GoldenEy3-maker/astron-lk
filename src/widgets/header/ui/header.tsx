import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";
import { Actions } from "./actions";

export function Header() {
  return (
    <header className="col-[main] bg-card justify-between gap-4 rounded-main py-[0.875rem] px-6 mt-5 flex items-center shadow-[0_0_0.75rem_0] shadow-black/5">
      <Link
        to={Routes.Home}
        className="inline-flex text-primary items-center gap-4 text-lg">
        <Icons.Logo />
        <span>Личный кабинет</span>
      </Link>
      <Actions />
    </header>
  );
}
