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
    <div className="bg-card py-7 pb-5 pl-9 pr-12 rounded-main">
      <h3 className="text-h3 text-heading-h4 pl-3">
        Читайте нас&nbsp;в&nbsp;социальных сетях
      </h3>
      <div className="flex items-center gap-3 lex-wrap mt-3">
        {SOCIAL_LINKS.map((link) => (
          <Button asChild variant="link" size="sm" className="font-normal">
            <a
              href={link.href}
              target="_blank"
              className="flex items-center gap-3 text-primary">
              {link.icon}
              <span>{link.label}</span>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
