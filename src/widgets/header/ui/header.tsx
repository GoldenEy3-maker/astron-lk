import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="col-[main] bg-card rounded-main py-4 px-6 mt-5 flex items-center">
      <Link to={Routes.Home} className="inline-flex items-center gap-4 text-lg">
        <Icons.Logo />
        <span className="text-primary">Личный кабинет</span>
      </Link>
    </header>
  );
}
