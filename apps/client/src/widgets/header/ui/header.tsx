import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";
import { Actions } from "./actions";
import { Breadcrumbs } from "@/widgets/breadcrumbs";
import { useMobileSheetStore } from "@/shared/model/mobile-sheet-store";
import { cn } from "@/shared/lib/cn";

export function Header() {
  const isMobileSheetOpen = useMobileSheetStore((state) => state.isOpen);

  return (
    <div className="grid col-span-full grid-cols-subgrid" id="header">
      <div
        className={cn(
          "col-[main] ~pt-4/5 bg-background transition-all duration-500 rounded-b-main z-50 relative",
          {
            "bg-card": isMobileSheetOpen,
          }
        )}>
        <header
          className={cn(
            "bg-card justify-between gap-4 transition-all col-[main] duration-300 rounded-main ~py-2/3.5 ~px-3/6 flex items-center shadow-[0_0_0.75rem_0] shadow-black/5",
            {
              "shadow-none rounded-none !pointer-events-auto":
                isMobileSheetOpen,
            }
          )}>
          <Link
            to={Routes.Home}
            className="inline-flex text-primary items-center ~gap-3/4 ~text-base/lg">
            <Icons.Logo className="max-w-full ~h-10/11" />
            <span className="sm:block hidden">Личный кабинет</span>
          </Link>
          <Actions />
        </header>
      </div>
      <Breadcrumbs className="col-[main]" />
    </div>
  );
}
