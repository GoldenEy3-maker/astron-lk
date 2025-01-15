import { Routes } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";
import { UserPopover } from "./user-popover";
import { MobileSheet } from "@/widgets/mobile-sheet";
import { useMobileSheetStore } from "@/shared/model/mobile-sheet-store";
import { cn } from "@/shared/lib/cn";
import { FavoritesAction } from "./favorites-action";
import { useQuery } from "@tanstack/react-query";
import { getSessionQueryOptions } from "@/shared/api/session-query";

export function Actions() {
  const { data: session } = useQuery(getSessionQueryOptions());
  const isMobileSheetOpen = useMobileSheetStore((state) => state.isOpen);

  return (
    <div className="flex items-center space-x-1 ~gap-2/4">
      <Button
        asChild
        variant="ghost"
        size="icon"
        aria-disabled={!session}
        className={cn({
          hidden: isMobileSheetOpen,
        })}>
        <Link to={Routes.Search}>
          <Icons.Search />
          <span className="sr-only">Поиск</span>
        </Link>
      </Button>
      <FavoritesAction className={cn({ hidden: isMobileSheetOpen })} />
      {!isMobileSheetOpen ? <UserPopover /> : null}
      <MobileSheet />
    </div>
  );
}
