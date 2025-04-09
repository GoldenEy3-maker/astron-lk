import { getPartnerByIdQueryOptions } from "@/entities/partner";
import { getSessionQueryOptions } from "@/shared/api/session-query";
import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export type NavigationLinkType = {
  url: Routes | string;
  icon?: React.ReactNode;
  label: string;
  isExternal?: boolean;
  notifications?: number;
  end?: boolean;
  subLinks?: NavigationLinkType[];
};

export function useNavigationLinks() {
  const { partnerId } = useParams<{ partnerId: string }>();

  const { data: partner, isFetching: isPartnerFetching } = useQuery({
    ...getPartnerByIdQueryOptions(partnerId!),
    placeholderData: keepPreviousData,
    enabled: !!partnerId,
  });

  const { data: session } = useQuery(getSessionQueryOptions());

  function generateNav() {
    const links: NavigationLinkType[][] = [
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
          url: Routes.OnlineTests,
          icon: <Icons.ExternalResource />,
          label: "Онлайн-тесты",
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
          notifications: session?.unreadBulletins?.length,
        },
      ],
      [
        {
          url: Routes.News,
          icon: <Icons.Notify />,
          label: "Новости",
          notifications: session?.unreadNews?.length,
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
            url: Routes.LeadGeneration,
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
      );
    }
    if (session?.role === "manager" || session?.role === "super-manager") {
      const link: NavigationLinkType = {
        url: Routes.Partners,
        icon: <Icons.UserOctagon />,
        label: "Партнёры-строители",
        end: true,
      };

      if (partner && partnerId && !isPartnerFetching) {
        link.subLinks = [
          {
            url: Routes.Partners + "/" + partner.id,
            label: partner.title,
            end: true,
            subLinks: [
              {
                url:
                  Routes.Partners + "/" + partner.id + Routes.EmployeeTesting,
                label: "Тестирование",
              },
              {
                url: Routes.Partners + "/" + partner.id + Routes.LeadGeneration,
                label: "Лидогенерация",
              },
              {
                url: Routes.Partners + "/" + partner.id + Routes.Booking,
                label: "Букинги",
              },
              {
                url: Routes.Partners + "/" + partner.id + Routes.Sales,
                label: "Продажи",
              },
            ],
          },
        ];
      } else if (partner) {
        link.subLinks = [
          {
            url: Routes.Partners + "/" + partner.id,
            label: partner.title,
            end: true,
          },
        ];
      }

      links.splice(1, 0, [link]);
    }
    return links;
  }

  return generateNav();
}
