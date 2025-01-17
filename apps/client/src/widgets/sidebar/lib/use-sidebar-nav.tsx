import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { useMemo } from "react";

type SidebarNavLink = {
  url: Routes | string;
  icon: React.ReactNode;
  label: string;
  isExternal?: boolean;
  notifications?: number;
};

export function useSidebarNav() {
  const nav = useMemo(() => {
    const links: SidebarNavLink[][] = [
      [
        {
          url: Routes.Home,
          icon: <Icons.Home />,
          label: "Главная",
        },
        {
          url: Routes.EmployeeTesting,
          icon: <Icons.PersonalCard />,
          label: "Тестирование",
        },
        {
          url: Routes.Leads,
          icon: <Icons.Graph />,
          label: "Лидогенерация",
        },
        {
          url: Routes.Booking,
          icon: <Icons.Diagram />,
          label: "Букинги",
        },
        {
          url: Routes.Sales,
          icon: <Icons.StatusUp />,
          label: "Продажи",
        },
      ],
      [
        {
          url: Routes.Academy,
          icon: <Icons.Academy />,
          label: "Академия Astron",
        },
        {
          url: "/path/to/external/link",
          icon: <Icons.ExternalResource />,
          label: "Онлайн-тесты",
          isExternal: true,
        },
        {
          url: Routes.Documents,
          icon: <Icons.Document />,
          label: "Документы",
        },
        {
          url: Routes.Bulletins,
          icon: <Icons.Notebook />,
          label: "Бюллетени",
          notifications: 12,
        },
      ],
      [
        {
          url: Routes.News,
          icon: <Icons.Notify />,
          label: "Новости",
          notifications: 10,
        },
        {
          url: Routes.Factory,
          icon: <Icons.Factory />,
          label: "Завод Astron",
        },
      ],
    ];
    return links;
  }, []);

  return nav;
}
