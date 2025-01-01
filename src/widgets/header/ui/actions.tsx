import { Routes } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";

export function Actions() {
  return (
    <div className="flex items-center gap-5">
      <Button asChild variant="icon" size="icon">
        <Link to={Routes.Search}>
          <Icons.Search />
        </Link>
      </Button>
      <Button asChild variant="icon" size="icon">
        <Link to={Routes.Favorites}>
          <Icons.Favorites />
        </Link>
      </Button>
    </div>
  );
}
