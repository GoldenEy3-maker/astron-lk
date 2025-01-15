import {
  generateId,
  generateRandomDate,
  generateRandomNumber,
} from "../libs/utils";
import { Bulletin, Company, Document, News, User } from "../types/globals";
import passwordService from "./password.service";

type DBData = {
  users: User[];
  news: News[];
  companies: Company[];
  documents: Document[];
  bulletins: Bulletin[];
};

export default new (class DBService {
  private data: DBData = {
    users: [],
    news: [],
    companies: [],
    documents: [],
    bulletins: [],
  };

  constructor() {
    this.seed();
  }

  seed() {
    this.data = {
      users: [
        {
          id: "1",
          name: "Данил",
          surname: "Королев",
          patronymic: "Николаевич",
          email: "danil-danil-korolev@bk.ru",
          password: passwordService.hashPassword("123456"),
          phone: "+79231665038",
          tokenVersion: 0,
          isBanned: false,
        },
        {
          id: "2",
          name: "Илья",
          surname: "Уткаев",
          patronymic: "Васильевич",
          email: "country@countryagency.ru",
          password: passwordService.hashPassword("country"),
          phone: "+79132220856",
          tokenVersion: 0,
          isBanned: false,
        },
        {
          id: "3",
          name: "Данил",
          surname: "Королев",
          patronymic: "Николаевич",
          email: "ban@test.ru",
          password: passwordService.hashPassword("ban"),
          phone: "+79132220856",
          tokenVersion: 0,
          isBanned: true,
        },
        {
          id: "4",
          name: "Владислав",
          surname: "Кленов",
          patronymic: "Владиславович",
          email: "east.crossroads@gmail.com",
          password: passwordService.hashPassword("мечта женщин"),
          phone: "+79131231231",
          tokenVersion: 0,
          isBanned: false,
        },
      ],
      news: [
        {
          id: "1",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "2",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "3",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "4",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "5",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "6",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "7",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "8",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "9",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "10",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "11",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "12",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "13",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "14",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "15",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "16",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "17",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "18",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "19",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "20",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: "/news-1.png",
          content:
            "<img src='/news-detail-1.png' alt=''><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video poster='/video-poster-1.png'><source src=''/></video>",
          createdAt: "2024-12-30T12:34:56Z",
        },
      ],
      companies: [
        {
          id: "1",
          title: "NABUCCO Architecture & Construction",
          projects: {
            count: 23,
            link: "/",
            implementedArea: 5678,
          },
          cooperationYears: 12,
          logo: "/company-logo.png",
          certificate: "/",
          userId: "1",
        },
        {
          id: "2",
          title: "NABUCCO Architecture & Construction",
          projects: {
            count: 23,
            link: "/",
            implementedArea: 5678,
          },
          cooperationYears: 12,
          logo: "/company-logo.png",
          certificate: "/",
          userId: "2",
        },
        {
          id: "3",
          title: "NABUCCO Architecture & Construction",
          projects: {
            count: 23,
            link: "/",
            implementedArea: 5678,
          },
          cooperationYears: 12,
          logo: "/company-logo.png",
          certificate: "/",
          userId: "4",
        },
      ],
      documents: this.generateDocuments(200),
      bulletins: this.generateBulletins(50),
    };
  }

  private generateBulletins(count: number) {
    const categories = [
      "Изменение цены",
      "Буклет",
      "Типовой договор",
      "Новые технологии",
      "Подарок",
      "Техническая документация",
      "Каталог",
      "Сертификаты",
      "Презентация",
    ];

    const titles = [
      "Типовые формулировки контрактов",
      "Руководство по монтажу",
      "Каталог решений",
      "Сертификат соответствия",
      "Презентация новых технологий",
      "Техническая документация",
      "Информационный буклет",
      "Прайс-лист",
      "Спецификация материалов",
    ];

    return Array.from({ length: count }, (_, index) => ({
      id: generateId(),
      title: `${titles[generateRandomNumber(0, titles.length - 1)]}`,
      createdAt: generateRandomDate(
        new Date(2025, 1, 1),
        new Date(2025, 11, 31)
      ).toISOString(),
      file: {
        url: "/test.pdf",
        size: generateRandomNumber(100000, 900000),
      },
      category: categories[generateRandomNumber(0, categories.length - 1)],
    }));
  }

  private generateDocuments(count: number) {
    const categories = [
      "Изменение цены",
      "Буклет",
      "Типовой договор",
      "Новые технологии",
      "Подарок",
      "Техническая документация",
      "Каталог",
      "Сертификаты",
      "Презентация",
    ];

    const titles = [
      "Типовые формулировки контрактов",
      "Руководство по монтажу",
      "Каталог решений",
      "Сертификат соответствия",
      "Презентация новых технологий",
      "Техническая документация",
      "Информационный буклет",
      "Прайс-лист",
      "Спецификация материалов",
    ];

    return Array.from({ length: count }, (_, index) => ({
      id: generateId(),
      title: `${titles[generateRandomNumber(0, titles.length - 1)]}`,
      createdAt: generateRandomDate(
        new Date(2018, 0, 1),
        new Date(2025, 11, 31)
      ).toISOString(),
      file: {
        url: "/test.pdf",
        size: generateRandomNumber(100000, 900000),
      },
      category: categories[generateRandomNumber(0, categories.length - 1)],
    }));
  }

  update(type: keyof DBData, newData: any[]) {
    if (!this.data[type]) {
      throw new Error(`Invalid db type: ${type}`);
    }
    this.data[type] = newData;
  }

  get<T extends keyof DBData>(type: T): DBData[T] {
    if (!this.data[type]) {
      throw new Error(`Invalid db type: ${type}`);
    }
    return this.data[type];
  }
})();
