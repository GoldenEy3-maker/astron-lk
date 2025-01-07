import { Routes } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";
import { UserPopover } from "./user-popover";

export function Actions() {
  return (
    <div className="flex items-center space-x-1 gap-4">
      <Button asChild variant="ghost" size="icon">
        <Link to={Routes.Search}>
          <Icons.Search />
        </Link>
      </Button>
      <Button asChild variant="ghost" size="icon">
        <Link to={Routes.Favorites}>
          <Icons.Favorites />
        </Link>
      </Button>
      <UserPopover />
    </div>
  );
}
