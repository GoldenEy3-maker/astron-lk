import { getSessionQueryOptions } from "@/shared/api/session-query";
import { Routes } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/cn";
import { Button, ButtonProps } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type FavoritesActionProps = {} & ButtonProps;

export function FavoritesAction({ className, ...props }: FavoritesActionProps) {
  const { data: session } = useQuery(getSessionQueryOptions());

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      aria-disabled={!session}
      className={cn("relative", className)}
      {...props}>
      <Link to={Routes.Favorites}>
        <Icons.Favorites />
        <span className="sr-only">Избранное</span>
        {session?.favorites.length ? (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
        ) : null}
      </Link>
    </Button>
  );
}
