import { Routes } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Separator } from "@/shared/ui/separator";
import { Link } from "react-router-dom";

export function UserPopover() {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-3 !ml-0" asChild>
        <Button variant="ghost" size="sm">
          <Icons.User className="text-foreground-accent" />
          <span className="font-normal">Личный кабинет</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" className="pb-3">
        <h3 className="text-h3">NABUCCO Architecture & Construction</h3>
        <nav className="mt-2">
          <a
            href="https://astronbuildings.com/"
            className="flex items-center gap-2 py-2"
            target="_blank">
            <span>Основной сайт</span>
            <Icons.ExternalLink className="text-border" />
          </a>
          <Separator className="my-2" />
          <Link
            to={`${Routes.Favorites}?filter=projects`}
            className="flex justify-between gap-2 items-center pt-2 pb-[0.375rem]">
            <span>Избранные проекты</span>
            <span className="text-muted">12</span>
          </Link>
          <Link
            to={`${Routes.Favorites}?filter=docs`}
            className="flex justify-between gap-2 items-center pt-[0.375rem] pb-2">
            <span>Избранные документы</span>
            <span className="text-muted">8</span>
          </Link>
          <Separator className="my-2" />
          <Link to={Routes.Profile} className="py-2 flex">
            Мой профиль
          </Link>
        </nav>
      </PopoverContent>
    </Popover>
  );
}
