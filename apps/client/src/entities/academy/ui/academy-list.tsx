import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";

const academyListData = [
  {
    title: "Процесс продаж",
    icon: (
      <Icons.AcademySales className="shrink-0 ~w-10/[3.75rem] h-10/[3.75rem]" />
    ),
    href: Routes.AcademySales,
    bgImg: "/background-image-1.webp",
  },
  {
    title: "Подготовка к переговорам",
    icon: (
      <Icons.AcademyConversations className="shrink-0 ~w-10/[3.75rem] h-10/[3.75rem]" />
    ),
    href: Routes.AcademyConversations,
    bgImg: "/background-image-2.webp",
  },
  {
    title: "Конъюнктурный анализ",
    icon: (
      <Icons.AcademyAnalysis className="shrink-0 ~w-10/[3.75rem] h-10/[3.75rem]" />
    ),
    href: Routes.AcademyAnalysis,
    bgImg: "/background-image-3.webp",
  },
  {
    title: "Оформление коммерческого предложения",
    icon: (
      <Icons.AcademyCommercial className="shrink-0 ~w-10/[3.75rem] h-10/[3.75rem]" />
    ),
    href: Routes.AcademyCommercial,
    bgImg: "/background-image-4.webp",
  },
  {
    title: "Подборки проектов и отзывы",
    icon: (
      <Icons.AcademyProjects className="shrink-0 ~w-10/[3.75rem] h-10/[3.75rem]" />
    ),
    href: Routes.AcademyProjects,
    bgImg: "/background-image-5.webp",
  },
  {
    title: "Вебинары",
    icon: (
      <Icons.AcademyWebinars className="shrink-0 ~w-10/[3.75rem] h-10/[3.75rem]" />
    ),
    href: Routes.AcademyWebinars,
    bgImg: "/background-image-6.webp",
  },
  {
    title: "Преимущества",
    icon: (
      <Icons.AcademyBenefits className="shrink-0 ~w-10/[3.75rem] h-10/[3.75rem]" />
    ),
    href: Routes.AcademyBenefits,
    bgImg: "/background-image-7.webp",
  },
];

export function AcademyList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] ~gap-x-6/14 ~gap-y-4/10">
      {academyListData.map((item) => (
        <article
          key={item.href}
          className="text-primary flex flex-col group hover:text-primary-foreground bg-primary/10 px-7 py-7 ~min-h-[12rem]/[17.5rem] rounded-main relative transition duration-300">
          <Link
            to={item.href}
            className="absolute inset-0 z-10 ring-offset-background rounded-main focus:outline-none focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 transition"
          />
          <img
            src={item.bgImg}
            alt={`Фоновое изображение ссылки академии - ${item.title}`}
            className="absolute inset-0 size-full -z-[1] rounded-main object-cover opacity-0 group-hover:opacity-100 duration-300 transition"
          />
          <div className="flex items-start justify-between gap-6">
            <h3 className="text-h3">{item.title}</h3>
            {item.icon}
          </div>
          <div className="flex items-center gap-3 mt-auto">
            <span>Перейти в раздел</span>
            <Icons.ArrowRight className="w-5 h-3.5" />
          </div>
        </article>
      ))}
    </div>
  );
}
