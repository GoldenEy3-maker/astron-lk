import { Routes } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";
import { UserPopover } from "./user-popover";
import { MobileSheet } from "@/widgets/mobile-sheet";
import { useMobileSheetStore } from "@/shared/model/mobile-sheet-store";
import { cn } from "@/shared/lib/cn";

export function Actions() {
  const isMobileSheetOpen = useMobileSheetStore((state) => state.isOpen);

  return (
    <div className="flex items-center space-x-1 ~gap-2/4">
      <Button
        asChild
        variant="ghost"
        size="icon"
        className={cn("", {
          hidden: isMobileSheetOpen,
        })}>
        <Link to={Routes.Search}>
          <Icons.Search />
        </Link>
      </Button>
      <Button
        asChild
        variant="ghost"
        size="icon"
        className={cn("", {
          hidden: isMobileSheetOpen,
        })}>
        <Link to={Routes.Favorites}>
          <Icons.Favorites />
        </Link>
      </Button>
      {!isMobileSheetOpen ? <UserPopover /> : null}
      <MobileSheet />
    </div>
  );
}
