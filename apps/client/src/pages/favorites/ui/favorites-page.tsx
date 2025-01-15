import { Favorites } from "@/entities/favorite";
import { useRef } from "react";

export function FavoritesPage() {
  const scrollToRef = useRef<HTMLDivElement>(null);

  return (
    <div className="col-span-full">
      <h1 className="text-h1 text-heading-h2" ref={scrollToRef}>
        Избранное
      </h1>
      <Favorites limit={12} scrollToRef={scrollToRef} className="~mt-1/3" />
    </div>
  );
}
