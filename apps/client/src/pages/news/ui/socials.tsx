import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";

const SOCIAL_LINKS = [
  {
    href: "#",
    icon: <Icons.Vk />,
    label: "ВКонтакте",
  },
  {
    href: "#",
    icon: <Icons.Dzen />,
    label: "Дзен",
  },
  {
    href: "#",
    icon: <Icons.Youtube />,
    label: "YouTube",
  },
  {
    href: "#",
    icon: <Icons.Facebook />,
    label: "Facebook",
  },
  {
    href: "#",
    icon: <Icons.Telegram />,
    label: "Telegram",
  },
  {
    href: "#",
    icon: <Icons.Instagram />,
    label: "Instagram",
  },
];

export function Socials() {
  return (
    <div className="bg-card ~py-5/7 ~pb-3/5 ~pl-3/9 ~pr-4/12 rounded-main relative z-10 before:opacity-[0.06] before:absolute before:-z-10 before:inset-0 before:bg-[url(/pattern.webp)] before:bg-no-repeat before:bg-cover before:bg-center">
      <h3 className="text-h3 text-heading-h4 pl-3">
        Читайте нас&nbsp;в&nbsp;социальных сетях
      </h3>
      <div className="flex items-center flex-wrap gap-x-3 gap-y-2 mt-3">
        {SOCIAL_LINKS.map((link) => (
          <Button
            key={link.label}
            asChild
            variant="link"
            size="sm"
            className="font-normal flex items-center justify-start gap-3 text-primary">
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
