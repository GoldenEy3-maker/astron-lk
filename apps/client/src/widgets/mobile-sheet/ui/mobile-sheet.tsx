import { getSessionQueryOptions } from "@/shared/api/session-query";
import { cn } from "@/shared/lib/cn";
import { useMobileSheetStore } from "@/shared/model/mobile-sheet-store";
import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { useSidebarNav } from "@/widgets/sidebar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function MobileSheet() {
  const containerSelector = "#header";
  const { isOpen, setIsOpen } = useMobileSheetStore();
  const { data: session } = useQuery(getSessionQueryOptions());
  const sidebarNav = useSidebarNav();
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.querySelector(containerSelector) as HTMLElement);
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        variant="ghost"
        size="icon"
        disabled={!session}
        className={cn(
          "relative m-xl:hidden before:absolute before:inset-x-2.5 before:bg-primary before:h-0.5 before:top-3.5 after:absolute after:inset-x-2.5 after:bg-primary after:h-0.5 after:bottom-3.5 before:transition-all before:duration-300 after:transition-all after:duration-300",
          {
            "before:top-5 after:bottom-5 before:opacity-0 after:opacity-0":
              isOpen,
          }
        )}>
        <span className={cn("absolute inset-x-2.5 bg-primary h-0.5")}></span>
        <span className="sr-only">Открыть/закрыть меню</span>
      </SheetTrigger>
      <SheetContent
        side="top"
        container={container}
        className="h-full pt-20 shadow-none group/content z-40"
        wrapperClassName="max-container main-container opacity-0 p-0 py-8 transition-all duration-100 group-data-[state=open]/content:opacity-100"
        overlayClassName="z-40"
        onPointerDownOutside={(e) => {
          if ((e.target as HTMLElement).closest(containerSelector))
            e.preventDefault();
        }}>
        <VisuallyHidden>
          <SheetTitle>Мобильное меню</SheetTitle>
          <SheetDescription>Навигация по сайту</SheetDescription>
        </VisuallyHidden>
        <div className="col-[main] space-y-5">
          {sidebarNav.map((groupLink, index) => (
            <nav key={index} className="flex flex-col items-start gap-1">
              {groupLink.map((link) => (
                <Button
                  variant="ghost"
                  key={link.url}
                  size="sm"
                  asChild
                  className="justify-start text-muted gap-2.5 group/button">
                  <NavLink to={link.url} onClick={() => setIsOpen(false)}>
                    {({ isActive }) => (
                      <>
                        <span
                          className={cn(
                            "transition group-hover/button:text-border-accent",
                            {
                              "!text-primary": isActive,
                            }
                          )}>
                          {link.icon}
                        </span>
                        <span
                          className={cn(
                            "transition group-hover/button:text-foreground",
                            {
                              "!text-foreground": isActive,
                            }
                          )}>
                          {link.label}
                        </span>
                        {link.notifications ? (
                          <span className="h-6 min-w-6 rounded-full text-sm font-normal px-1 inline-flex items-center justify-center bg-primary text-primary-foreground">
                            {link.notifications}
                          </span>
                        ) : null}
                      </>
                    )}
                  </NavLink>
                </Button>
              ))}
            </nav>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
