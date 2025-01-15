import { Button } from "@/shared/ui/button";
import { useFavorites } from "../lib/use-favorites";
import { Icons } from "@/shared/ui/icons";
import { cn } from "@/shared/lib/cn";
import { z } from "zod";
import { schemas } from "@/shared/api/client";

type FavoriteButtonProps = {
  limit?: number;
} & z.infer<typeof schemas.Favorite>;

export function FavoriteButton({ limit, ...favorite }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites({ limit });
  return (
    <Button
      variant="ghost-primary"
      size="icon"
      className="relative z-10 group/favorite"
      onClick={() => toggleFavorite(favorite)}>
      <Icons.Bookmark
        className={cn(
          "group-hover/favorite:text-primary transition group-hover/favorite:fill-primary/10",
          {
            "!fill-primary !text-primary": isFavorite(favorite.id),
          }
        )}
      />
    </Button>
  );
}
