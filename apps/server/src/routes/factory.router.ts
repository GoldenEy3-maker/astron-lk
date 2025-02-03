import { Request, Response, Router } from "express";
import { Document, FactoryTeam, Image, Video } from "../types/globals";
import dbService from "../services/db.service";

const factoryRouter = Router();

factoryRouter.get(
  "/",
  (
    req: Request,
    res: Response<{
      text: string;
      img: Image;
      video: Video;
      document: Document;
    }>
  ) => {
    const documents = dbService.get("documents");

    res.json({
      text: `
      <p>
        Наш завод&nbsp;&mdash; наша гордость. Общая площадь комплекса
        составляет 25&nbsp;000&nbsp;м&sup2;, а&nbsp;производственные
        мощности включают 3-этажный АБК, цехи и&nbsp;крытый склад площадью
        2600&nbsp;м&sup2;.
      </p>
      <p>
        Цепочка поставок Astron локализована и&nbsp;не&nbsp;подвержена
        санкционным ограничениям. Пул поставщиков сформирован
        из&nbsp;проверенных российских производителей, что гарантирует
        стабильность поставок сырья, прогнозируемость ценообразования
        и&nbsp;соблюдение обязательств Astron перед заказчиками.
      </p>
      `,
      img: {
        src: "/video-poster-2.webp",
        alt: "Картинка завода Астрон",
      },
      video: {
        src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1",
        thumbnail: "/video-poster-2.webp",
        alt: "Видео завода Астрон",
      },
      document: documents[Math.floor(Math.random() * documents.length)],
    });
  }
);

factoryRouter.get("/team", (req: Request, res: Response<FactoryTeam[]>) => {
  res.json([
    {
      id: "1",
      img: {
        src: "/factory-team-1.webp",
        alt: "Фотография сотрудника Астрон",
      },
      role: "Генеральный директор",
      title: "Ягодкин Помидорослав",
      phone: "+79000000000",
      email: "email@astron.biz",
    },
    {
      id: "2",
      img: {
        src: "/factory-team-1.webp",
        alt: "Фотография сотрудника Астрон",
      },
      role: "Менеджер по продажам",
      title: "Травин Бананослав",
      phone: "+79000000000",
      email: "email@astron.biz",
    },
    {
      id: "3",
      img: {
        src: "/factory-team-1.webp",
        alt: "Фотография сотрудника Астрон",
      },
      role: "Директор по развитию",
      title: "Директоров Крутослав",
      phone: "+79000000000",
      email: "email@astron.biz",
    },
    {
      id: "4",
      img: {
        src: "/factory-team-1.webp",
        alt: "Фотография сотрудника Астрон",
      },
      role: "Агроном",
      title: "Ягодкин Помидорослав",
      phone: "+79000000000",
      email: "email@astron.biz",
    },
    {
      id: "5",
      img: {
        src: "/factory-team-1.webp",
        alt: "Фотография сотрудника Астрон",
      },
      role: "Родственник",
      title: "Наследников Сынослав",
      phone: "+79000000000",
      email: "email@astron.biz",
    },
  ]);
});

export { factoryRouter };
