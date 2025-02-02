import { getPartnerBySessionQueryOptions } from "@/entities/partner";
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
  const { data: partner, isLoading: isPartnerLoading } = useQuery({
    ...getPartnerBySessionQueryOptions(),
    enabled: session !== null,
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn("!ml-0 flex items-center gap-3", className)}
        variant="ghost"
        size={isMobileSm ? "icon" : "sm"}
        disabled={!session}
        {...props}
      >
        <Icons.User className="text-foreground-accent" />
        <TextMorph as="span" className="hidden font-normal sm:block">
          {session ? `${session.surname} ${session.name}` : "Личный кабинет"}
        </TextMorph>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        className={cn("px-0 pb-3", {
          "pt-3": session?.role !== "partner",
        })}
      >
        {session?.role === "partner" ? (
          <div className="mb-2 px-5 text-heading-h3">
            <TextMorph as="h3" className="text-h3">
              {!isPartnerLoading && partner ? partner.title : "Загрузка..."}
            </TextMorph>
          </div>
        ) : null}
        {/* {!isCompanyLoading && company ? (
          <h3 className="text-h3">{company.title}</h3>
        ) : (
          <Skeleton className="rounded-md h-6 w-32" />
        )} */}
        <nav>
          <Button
            variant="ghost"
            asChild
            size="sm"
            className="w-full justify-start rounded-none px-5 font-normal"
          >
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
            className="w-full justify-start rounded-none px-5 font-normal"
          >
            <a
              href="https://astronbuildings.com/"
              target="_blank"
              className="justify-between"
            >
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
            className="w-full justify-start rounded-none px-5 font-normal"
          >
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
            className="w-full justify-start rounded-none px-5 font-normal"
          >
            <Link to={Routes.Profile}>Мой профиль</Link>
          </Button>
        </nav>
      </PopoverContent>
    </Popover>
  );
}
