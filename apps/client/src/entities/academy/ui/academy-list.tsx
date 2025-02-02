import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";

const academyListData = [
  {
    title: "Процесс продаж",
    icon: (
      <Icons.AcademySales className="h-10/[3.75rem] shrink-0 ~w-10/[3.75rem]" />
    ),
    href: Routes.AcademySales,
    bgImg: "/cabinet/background-image-1.webp",
  },
  {
    title: "Подготовка к переговорам",
    icon: (
      <Icons.AcademyConversations className="h-10/[3.75rem] shrink-0 ~w-10/[3.75rem]" />
    ),
    href: Routes.AcademyConversations,
    bgImg: "/cabinet/background-image-2.webp",
  },
  {
    title: "Конъюнктурный анализ",
    icon: (
      <Icons.AcademyAnalysis className="h-10/[3.75rem] shrink-0 ~w-10/[3.75rem]" />
    ),
    href: Routes.AcademyAnalysis,
    bgImg: "/cabinet/background-image-3.webp",
  },
  {
    title: "Оформление коммерческого предложения",
    icon: (
      <Icons.AcademyCommercial className="h-10/[3.75rem] shrink-0 ~w-10/[3.75rem]" />
    ),
    href: Routes.AcademyCommercial,
    bgImg: "/cabinet/background-image-4.webp",
  },
  {
    title: "Подборки проектов и отзывы",
    icon: (
      <Icons.AcademyProjects className="h-10/[3.75rem] shrink-0 ~w-10/[3.75rem]" />
    ),
    href: Routes.AcademyProjects,
    bgImg: "/cabinet/background-image-5.webp",
  },
  {
    title: "Вебинары",
    icon: (
      <Icons.AcademyWebinars className="h-10/[3.75rem] shrink-0 ~w-10/[3.75rem]" />
    ),
    href: Routes.AcademyWebinars,
    bgImg: "/cabinet/background-image-6.webp",
  },
  {
    title: "Преимущества",
    icon: (
      <Icons.AcademyBenefits className="h-10/[3.75rem] shrink-0 ~w-10/[3.75rem]" />
    ),
    href: Routes.AcademyBenefits,
    bgImg: "/cabinet/background-image-7.webp",
  },
];

export function AcademyList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] ~gap-x-6/14 ~gap-y-4/10">
      {academyListData.map((item) => (
        <article
          key={item.href}
          className="group relative flex flex-col rounded-main bg-primary/10 px-7 py-7 text-primary transition duration-300 ~min-h-[12rem]/[17.5rem] hover:text-primary-foreground"
        >
          <Link
            to={item.href}
            className="absolute inset-0 z-10 rounded-main ring-offset-background transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          <img
            src={item.bgImg}
            alt={`Фоновое изображение ссылки академии - ${item.title}`}
            className="absolute inset-0 -z-[1] size-full rounded-main object-cover opacity-0 transition duration-300 group-hover:opacity-100"
          />
          <div className="flex items-start justify-between gap-6">
            <h3 className="text-h3">{item.title}</h3>
            {item.icon}
          </div>
          <div className="mt-auto flex items-center gap-3">
            <span>Перейти в раздел</span>
            <Icons.ArrowRight className="h-3.5 w-5" />
          </div>
        </article>
      ))}
    </div>
  );
}
