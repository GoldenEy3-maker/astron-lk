import { getSessionQueryOptions } from "@/shared/api/session-query";
import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

type SidebarNavLink = {
  url: Routes | string;
  icon: React.ReactNode;
  label: string;
  isExternal?: boolean;
  notifications?: number;
};

export function useSidebarNav() {
  const { data: session } = useQuery(getSessionQueryOptions());

  const nav = useMemo(() => {
    const links: SidebarNavLink[][] = [
      [
        {
          url: Routes.Home,
          icon: <Icons.Home />,
          label: "Главная",
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
    if (session?.role === "partner") {
      links[0].push(
        ...[
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
        ]
      );
    }
    if (session?.role === "manager") {
      links.splice(1, 0, [
        {
          url: Routes.Partners,
          icon: <Icons.UserOctagon />,
          label: "Партнёры-строители",
        },
      ]);
    }
    return links;
  }, [session?.role]);

  return nav;
}
