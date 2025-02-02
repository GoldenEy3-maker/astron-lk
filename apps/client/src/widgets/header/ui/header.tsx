import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";
import { Actions } from "./actions";
import { Breadcrumbs } from "@/widgets/breadcrumbs";
import { useMobileSheetStore } from "@/shared/store/mobile-sheet-store";
import { cn } from "@/shared/lib/cn";

export function Header() {
  const isMobileSheetOpen = useMobileSheetStore((state) => state.isOpen);

  return (
    <div className="col-span-full grid grid-cols-subgrid" id="header">
      <div
        className={cn(
          "relative z-50 col-[main] rounded-b-main bg-background transition-all duration-500 ~pt-4/5",
          {
            "bg-card": isMobileSheetOpen,
          },
        )}
      >
        <header
          className={cn(
            "col-[main] flex items-center justify-between gap-4 rounded-main bg-card shadow-[0_0_0.75rem_0] shadow-black/5 transition-all duration-300 ~px-3/6 ~py-2/3.5",
            {
              "!pointer-events-auto rounded-none shadow-none":
                isMobileSheetOpen,
            },
          )}
        >
          <Link
            to={Routes.Home}
            className="inline-flex items-center text-primary ~text-base/lg ~gap-3/4"
          >
            <Icons.Logo className="max-w-full ~h-10/11" />
            <span className="hidden sm:block">Личный кабинет</span>
          </Link>
          <Actions />
        </header>
      </div>
      <Breadcrumbs className="col-[main] mt-6" />
    </div>
  );
}
