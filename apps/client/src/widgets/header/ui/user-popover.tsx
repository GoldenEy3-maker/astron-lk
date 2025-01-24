import { getUserCompanyQueryOptions } from "@/entities/company";
import { getSessionQueryOptions } from "@/shared/api/session-query";
import { Routes } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Separator } from "@/shared/ui/separator";
import { TextMorph } from "@/shared/ui/text-morph";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

type UserPopoverProps = {} & Omit<
  React.ComponentProps<typeof PopoverTrigger>,
  "asChild"
>;

export function UserPopover({ className, ...props }: UserPopoverProps) {
  const [open, setOpen] = useState(false);
  const isMobileSm = useMediaQuery("(max-width: 640px)");
  const { data: session } = useQuery(getSessionQueryOptions());
  const { data: company, isLoading: isCompanyLoading } = useQuery({
    ...getUserCompanyQueryOptions(),
    enabled: session !== null,
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn("flex items-center gap-3 !ml-0", className)}
        variant="ghost"
        size={isMobileSm ? "icon" : "sm"}
        disabled={!session}
        {...props}>
        <Icons.User className="text-foreground-accent" />
        <TextMorph as="span" className="font-normal sm:block hidden">
          {session ? `${session.surname} ${session.name}` : "Личный кабинет"}
        </TextMorph>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" className="pb-3 px-0">
        <div className="text-heading-h3 px-5">
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
            className="font-normal w-full justify-start px-5 rounded-none">
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
            className="w-full justify-start font-normal px-5 rounded-none">
            <a
              href="https://astronbuildings.com/"
              target="_blank"
              className="justify-between">
              <span>Избранные проекты</span>
              <span className="text-muted">
                {session?.favoriteProjects ?? 0}
              </span>
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            onClick={() => setOpen(false)}
            className="w-full justify-start font-normal px-5 rounded-none">
            <Link to={Routes.Favorites} className="justify-between">
              <span>Избранные документы</span>
              <span className="text-muted">
                {session?.favorites.length ?? 0}
              </span>
            </Link>
          </Button>
          <Separator className="my-2" />
          <Button
            asChild
            variant="ghost"
            size="sm"
            onClick={() => setOpen(false)}
            className="w-full justify-start font-normal px-5 rounded-none">
            <Link to={Routes.Profile}>Мой профиль</Link>
          </Button>
        </nav>
      </PopoverContent>
    </Popover>
  );
}
