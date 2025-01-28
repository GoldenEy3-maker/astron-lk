import { cn } from "@/shared/lib/cn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useMobileSheet } from "../lib/use-mobile-sheet";
import { Navigation } from "@/features/navigation";

export function MobileSheet() {
  const {
    isOpen,
    onOpenChange,
    isTriggerDisabled,
    container,
    onPointerDownOutsideHandler,
    navigations,
  } = useMobileSheet();

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger
        variant="ghost"
        size="icon"
        disabled={isTriggerDisabled}
        className={cn(
          "relative m-md:hidden before:absolute before:inset-x-2.5 before:bg-primary before:h-0.5 before:top-3.5 after:absolute after:inset-x-2.5 after:bg-primary after:h-0.5 after:bottom-3.5 before:transition-all before:duration-300 after:transition-all after:duration-300",
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
        onPointerDownOutside={onPointerDownOutsideHandler}>
        <VisuallyHidden>
          <SheetTitle>Мобильное меню</SheetTitle>
          <SheetDescription>Навигация по сайту</SheetDescription>
        </VisuallyHidden>
        <div className="col-[main] space-y-5">
          <Navigation navigations={navigations} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
