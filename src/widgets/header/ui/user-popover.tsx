import { getUserCompanyQueryOptions } from "@/entities/company";
import { Routes } from "@/shared/constants/routes";
import { useSession } from "@/shared/lib/session-store";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Separator } from "@/shared/ui/separator";
import { TextMorph } from "@/shared/ui/text-morph";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export function UserPopover() {
  const user = useSession((state) => state.user);
  const { data: company, isLoading: isCompanyLoading } = useQuery({
    ...getUserCompanyQueryOptions(),
    enabled: user !== null,
  });

  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-3 !ml-0" asChild>
        <Button variant="ghost" size="sm" disabled={user === null}>
          <Icons.User className="text-foreground-accent" />
          <TextMorph as="span" className="font-normal">
            {user ? `${user.surname} ${user.name}` : "Личный кабинет"}
          </TextMorph>
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" className="pb-3">
        <div className="text-heading-h3">
          <TextMorph as="h3" className="text-h3">
            {!isCompanyLoading && company ? company.title : "Загрузка..."}
          </TextMorph>
        </div>
        {/* {!isCompanyLoading && company ? (
          <h3 className="text-h3">{company.title}</h3>
        ) : (
          <Skeleton className="rounded-md h-6 w-32" />
        )} */}
        <nav className="mt-2">
          <Button
            variant="ghost"
            asChild
            size="sm"
            className="font-normal w-full justify-start">
            <a href="https://astronbuildings.com/" target="_blank">
              <span>Основной сайт</span>
              <Icons.ExternalLink className="text-border" />
            </a>
          </Button>
          <Separator className="my-2" />
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="w-full justify-start font-normal">
            <Link
              to={`${Routes.Favorites}?filter=projects`}
              className="justify-between">
              <span>Избранные проекты</span>
              <span className="text-muted">12</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="w-full justify-start font-normal">
            <Link
              to={`${Routes.Favorites}?filter=docs`}
              className="justify-between">
              <span>Избранные документы</span>
              <span className="text-muted">8</span>
            </Link>
          </Button>
          <Separator className="my-2" />
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="w-full justify-start font-normal">
            <Link to={Routes.Profile}>Мой профиль</Link>
          </Button>
        </nav>
      </PopoverContent>
    </Popover>
  );
}
