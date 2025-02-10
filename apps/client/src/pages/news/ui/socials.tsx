import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";

const SOCIAL_LINKS = [
  {
    href: "https://vk.com/astron_buildings?roistat_visit=308504",
    icon: <Icons.Vk />,
    label: "ВКонтакте",
  },
  {
    href: "https://t.me/AstronBuildingsCIS?roistat_visit=308504",
    icon: <Icons.Telegram />,
    label: "Telegram",
  },
  {
    href: "https://dzen.ru/astron?roistat_visit=308504",
    icon: <Icons.Dzen />,
    label: "Дзен",
  },
  {
    href: "https://www.youtube.com/@astron_cis?roistat_visit=308504",
    icon: <Icons.Youtube />,
    label: "YouTube",
  },
  // {
  //   href: "#",
  //   icon: <Icons.Facebook />,
  //   label: "Facebook",
  // },

  // {
  //   href: "#",
  //   icon: <Icons.Instagram />,
  //   label: "Instagram",
  // },
];

export function Socials() {
  return (
    <div className="relative z-10 rounded-main bg-card ~py-5/7 ~pr-4/12 ~pb-3/5 ~pl-3/9 before:absolute before:inset-0 before:-z-10 before:bg-[url(/pattern.webp)] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-[0.06]">
      <h3 className="pl-3 text-h3 text-heading-h4">
        Читайте нас&nbsp;в&nbsp;социальных сетях
      </h3>
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
        {SOCIAL_LINKS.map((link) => (
          <Button
            key={link.label}
            asChild
            variant="link"
            size="sm"
            className="flex items-center justify-start gap-3 font-normal text-primary"
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
              <span>{link.label}</span>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
