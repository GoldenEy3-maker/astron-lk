import { getSessionQueryOptions } from "@/shared/api/session-query";
import { useMobileSheetStore } from "@/shared/store/mobile-sheet-store";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigationLinks } from "@/features/navigation";

export function useMobileSheet() {
  const location = useLocation();
  const containerSelector = "#header";
  const { isOpen, setIsOpen } = useMobileSheetStore();
  const { data: session } = useQuery(getSessionQueryOptions());
  const isTriggerDisabled = !session;
  const [container, setContainer] = useState<HTMLElement | null>(null);

  const navigations = useNavigationLinks();

  function onOpenChange(open: boolean) {
    setIsOpen(open);
  }

  function onPointerDownOutsideHandler(
    event: CustomEvent<{ originalEvent: PointerEvent }>,
  ) {
    if (container?.contains(event.target as Node)) return;
    setIsOpen(false);
  }

  useEffect(() => {
    setContainer(document.querySelector(containerSelector) as HTMLElement);
  }, []);

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [location.pathname]);

  return {
    isOpen,
    onOpenChange,
    isTriggerDisabled,
    container,
    onPointerDownOutsideHandler,
    navigations,
  };
}
