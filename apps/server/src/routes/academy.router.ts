import { Request, Response, Router } from "express";
import {
  AcademyBenefit,
  AcademyBenefitInList,
  AcademyBenefitTag,
  AcademyProject,
  AcademyProjectInList,
  AcademySales,
  AcademySection,
  AcademySectionInList,
  AcademyWebinar,
  AcademyWebinarInList,
  Error,
  InfoBlock,
} from "../types/globals";
import { generateSlug } from "../libs/utils";
import dbService from "../services/db.service";

const academyRouter = Router();

academyRouter.get(
  "/sections",
  (req: Request, res: Response<AcademySectionInList[]>) => {
    const sections = dbService.get("academySections");

    res.json(
      sections.map((section) => ({
        bgImg: section.bgImg,
        id: section.id,
        title: section.title,
        icon: section.icon,
        url: section.url,
      }))
    );
  }
);

academyRouter.get(
  "/sections/:sectionId",
  (req: Request, res: Response<AcademySection | Error>) => {
    const section = dbService
      .get("academySections")
      .find((section) => section.id === req.params.sectionId);

    if (!section) res.status(404).json({ message: "Секция не найдена" });

    const { bgImg, icon, url, ...restSection } = section;

    res.json(restSection);
  }
);
academyRouter.get("/sales", (req: Request, res: Response<AcademySales[]>) => {
  res.json([
    {
      title: "New",
      description: "Новый запрос на здание",
      slug: generateSlug("New"),
      content: [
        {
          type: "section",
          title: "CRM",
          text: "Для официальных Партнеров-Строителей Astron предусмотрена возможнось использования учетной записи в AmoCRM.",
          media: {
            type: "image",
            src: "/academy-sales-1.webp",
          },
        },
        {
          type: "html",
          content:
            "<h2>Заполнение карты проекта</h2><p>Нормативный срок нахождения проекта на стадии New+Qualification 7 рабочих дней суммарно.</p><p>В течение рабочего дня с момента поступления нового запроса специалист отдел маркетинга связывается с клиентом и заполняет карту проекта до синей черты по специальному опроснику</p><h3>Заполненная карта проекта отправляется менеджеру по продажам с копией менеджеру Astron</h3><ul><li>Создает новую сделку в CRM</li><li>Создает задачу для менеджера “Контакт с клиентом”</li><li>При получении согласия на email-рассылку вносит клиента в базу контактов для рассылки в Unisender. Материалы и видеозапись обучающего вебинара по созданию автоматических рассылок доступны по ссылке.</li></ul><h3>Проекты, для которых не заполняется карта проекта:</h3><ul><li>Агрессивная среда (коровники, свинарники и т.д.)</li><li>Жилые помещения</li><li>Здания меньше 500 кв.м</li></ul><p>По таким запросам ассистент отдела маркетинга отправляет отказные письма (см <a href='#'>Примеры отказных писем</a>).</p><p>В том случае, если не получается дозвониться клиенту, в течение рабочего дня высылается стандартная презентация компании и просьба указать актуальный номер телефона (см «Стандартное письмо»). Далее в течение рабочего дня необходимо сделать как минимум 3 звонка. И далее по одному звонку в течение трёх дней подряд. В случае, если клиент сообщает конкретный срок для контакта, в CRM ставится задача провести следующий звонок с указанием даты звонка. Если клиент прямо не установил следующую дату контакта, попытки связаться продолжаются не дольше 7 календарных дней. Если за указанный срок (7 календарных дней) не получается выйти на контакт с клиентом, такая сделка закрывается (Lost или «Закрыто и не реализовано») с причиной Отмена проекта (Cancellation).</p><p>Если менеджер сам нашёл запрос, или запрос пришёл от Astron, то нормативный срок для заполнения карты проекта до синей черты и перехода на стадию Assigned to sales — 7 календарных дней. Обязательным является наличие следующей задачи в CRM.</p><img src='/academy-sales-form-example.webp' alt=''>",
        },
      ],
    },
    {
      title: "Qualification",
      description: "Процесс квалификации запроса",
      slug: generateSlug("Qualification"),
      content: [
        {
          type: "section",
          title: "CRM",
          text: "Для официальных Партнеров-Строителей Astron предусмотрена возможнось использования учетной записи в AmoCRM.",
          media: {
            type: "image",
            src: "/academy-sales-1.webp",
          },
        },
        {
          type: "html",
          content:
            "<h2>Заполнение карты проекта</h2><p>Нормативный срок нахождения проекта на стадии New+Qualification 7 рабочих дней суммарно.</p><p>В течение рабочего дня с момента поступления нового запроса специалист отдел маркетинга связывается с клиентом и заполняет карту проекта до синей черты по специальному опроснику</p><h3>Заполненная карта проекта отправляется менеджеру по продажам с копией менеджеру Astron</h3><ul><li>Создает новую сделку в CRM</li><li>Создает задачу для менеджера “Контакт с клиентом”</li><li>При получении согласия на email-рассылку вносит клиента в базу контактов для рассылки в Unisender. Материалы и видеозапись обучающего вебинара по созданию автоматических рассылок доступны по ссылке.</li></ul><h3>Проекты, для которых не заполняется карта проекта:</h3><ul><li>Агрессивная среда (коровники, свинарники и т.д.)</li><li>Жилые помещения</li><li>Здания меньше 500 кв.м</li></ul><p>По таким запросам ассистент отдела маркетинга отправляет отказные письма (см <a href='#'>Примеры отказных писем</a>).</p><p>В том случае, если не получается дозвониться клиенту, в течение рабочего дня высылается стандартная презентация компании и просьба указать актуальный номер телефона (см «Стандартное письмо»). Далее в течение рабочего дня необходимо сделать как минимум 3 звонка. И далее по одному звонку в течение трёх дней подряд. В случае, если клиент сообщает конкретный срок для контакта, в CRM ставится задача провести следующий звонок с указанием даты звонка. Если клиент прямо не установил следующую дату контакта, попытки связаться продолжаются не дольше 7 календарных дней. Если за указанный срок (7 календарных дней) не получается выйти на контакт с клиентом, такая сделка закрывается (Lost или «Закрыто и не реализовано») с причиной Отмена проекта (Cancellation).</p><p>Если менеджер сам нашёл запрос, или запрос пришёл от Astron, то нормативный срок для заполнения карты проекта до синей черты и перехода на стадию Assigned to sales — 7 календарных дней. Обязательным является наличие следующей задачи в CRM.</p><img src='/academy-sales-form-example.webp' alt=''>",
        },
      ],
    },
    {
      title: "Assigned to Sales",
      description: "Первый контакт менеджера",
      slug: generateSlug("Assigned to Sales"),
      content: [
        {
          type: "section",
          title: "CRM",
          text: "Для официальных Партнеров-Строителей Astron предусмотрена возможнось использования учетной записи в AmoCRM.",
          media: {
            type: "image",
            src: "/academy-sales-1.webp",
          },
        },
        {
          type: "html",
          content:
            "<h2>Заполнение карты проекта</h2><p>Нормативный срок нахождения проекта на стадии New+Qualification 7 рабочих дней суммарно.</p><p>В течение рабочего дня с момента поступления нового запроса специалист отдел маркетинга связывается с клиентом и заполняет карту проекта до синей черты по специальному опроснику</p><h3>Заполненная карта проекта отправляется менеджеру по продажам с копией менеджеру Astron</h3><ul><li>Создает новую сделку в CRM</li><li>Создает задачу для менеджера “Контакт с клиентом”</li><li>При получении согласия на email-рассылку вносит клиента в базу контактов для рассылки в Unisender. Материалы и видеозапись обучающего вебинара по созданию автоматических рассылок доступны по ссылке.</li></ul><h3>Проекты, для которых не заполняется карта проекта:</h3><ul><li>Агрессивная среда (коровники, свинарники и т.д.)</li><li>Жилые помещения</li><li>Здания меньше 500 кв.м</li></ul><p>По таким запросам ассистент отдела маркетинга отправляет отказные письма (см <a href='#'>Примеры отказных писем</a>).</p><p>В том случае, если не получается дозвониться клиенту, в течение рабочего дня высылается стандартная презентация компании и просьба указать актуальный номер телефона (см «Стандартное письмо»). Далее в течение рабочего дня необходимо сделать как минимум 3 звонка. И далее по одному звонку в течение трёх дней подряд. В случае, если клиент сообщает конкретный срок для контакта, в CRM ставится задача провести следующий звонок с указанием даты звонка. Если клиент прямо не установил следующую дату контакта, попытки связаться продолжаются не дольше 7 календарных дней. Если за указанный срок (7 календарных дней) не получается выйти на контакт с клиентом, такая сделка закрывается (Lost или «Закрыто и не реализовано») с причиной Отмена проекта (Cancellation).</p><p>Если менеджер сам нашёл запрос, или запрос пришёл от Astron, то нормативный срок для заполнения карты проекта до синей черты и перехода на стадию Assigned to sales — 7 календарных дней. Обязательным является наличие следующей задачи в CRM.</p><img src='/academy-sales-form-example.webp' alt=''>",
        },
      ],
    },
    {
      title: "Stage 1",
      description:
        "Выяснение потребностей, формирование задания на расчет и подготовка КП",
      slug: generateSlug("Stage 1"),
      content: [
        {
          type: "section",
          title: "CRM",
          text: "Для официальных Партнеров-Строителей Astron предусмотрена возможнось использования учетной записи в AmoCRM.",
          media: {
            type: "image",
            src: "/academy-sales-1.webp",
          },
        },
        {
          type: "html",
          content:
            "<h2>Заполнение карты проекта</h2><p>Нормативный срок нахождения проекта на стадии New+Qualification 7 рабочих дней суммарно.</p><p>В течение рабочего дня с момента поступления нового запроса специалист отдел маркетинга связывается с клиентом и заполняет карту проекта до синей черты по специальному опроснику</p><h3>Заполненная карта проекта отправляется менеджеру по продажам с копией менеджеру Astron</h3><ul><li>Создает новую сделку в CRM</li><li>Создает задачу для менеджера “Контакт с клиентом”</li><li>При получении согласия на email-рассылку вносит клиента в базу контактов для рассылки в Unisender. Материалы и видеозапись обучающего вебинара по созданию автоматических рассылок доступны по ссылке.</li></ul><h3>Проекты, для которых не заполняется карта проекта:</h3><ul><li>Агрессивная среда (коровники, свинарники и т.д.)</li><li>Жилые помещения</li><li>Здания меньше 500 кв.м</li></ul><p>По таким запросам ассистент отдела маркетинга отправляет отказные письма (см <a href='#'>Примеры отказных писем</a>).</p><p>В том случае, если не получается дозвониться клиенту, в течение рабочего дня высылается стандартная презентация компании и просьба указать актуальный номер телефона (см «Стандартное письмо»). Далее в течение рабочего дня необходимо сделать как минимум 3 звонка. И далее по одному звонку в течение трёх дней подряд. В случае, если клиент сообщает конкретный срок для контакта, в CRM ставится задача провести следующий звонок с указанием даты звонка. Если клиент прямо не установил следующую дату контакта, попытки связаться продолжаются не дольше 7 календарных дней. Если за указанный срок (7 календарных дней) не получается выйти на контакт с клиентом, такая сделка закрывается (Lost или «Закрыто и не реализовано») с причиной Отмена проекта (Cancellation).</p><p>Если менеджер сам нашёл запрос, или запрос пришёл от Astron, то нормативный срок для заполнения карты проекта до синей черты и перехода на стадию Assigned to sales — 7 календарных дней. Обязательным является наличие следующей задачи в CRM.</p><img src='/academy-sales-form-example.webp' alt=''>",
        },
      ],
    },
    {
      title: "Stage 2",
      description: "Презентация коммерческого предложения",
      slug: generateSlug("Stage 2"),
      content: [
        {
          type: "section",
          title: "CRM",
          text: "Для официальных Партнеров-Строителей Astron предусмотрена возможнось использования учетной записи в AmoCRM.",
          media: {
            type: "image",
            src: "/academy-sales-1.webp",
          },
        },
        {
          type: "html",
          content:
            "<h2>Заполнение карты проекта</h2><p>Нормативный срок нахождения проекта на стадии New+Qualification 7 рабочих дней суммарно.</p><p>В течение рабочего дня с момента поступления нового запроса специалист отдел маркетинга связывается с клиентом и заполняет карту проекта до синей черты по специальному опроснику</p><h3>Заполненная карта проекта отправляется менеджеру по продажам с копией менеджеру Astron</h3><ul><li>Создает новую сделку в CRM</li><li>Создает задачу для менеджера “Контакт с клиентом”</li><li>При получении согласия на email-рассылку вносит клиента в базу контактов для рассылки в Unisender. Материалы и видеозапись обучающего вебинара по созданию автоматических рассылок доступны по ссылке.</li></ul><h3>Проекты, для которых не заполняется карта проекта:</h3><ul><li>Агрессивная среда (коровники, свинарники и т.д.)</li><li>Жилые помещения</li><li>Здания меньше 500 кв.м</li></ul><p>По таким запросам ассистент отдела маркетинга отправляет отказные письма (см <a href='#'>Примеры отказных писем</a>).</p><p>В том случае, если не получается дозвониться клиенту, в течение рабочего дня высылается стандартная презентация компании и просьба указать актуальный номер телефона (см «Стандартное письмо»). Далее в течение рабочего дня необходимо сделать как минимум 3 звонка. И далее по одному звонку в течение трёх дней подряд. В случае, если клиент сообщает конкретный срок для контакта, в CRM ставится задача провести следующий звонок с указанием даты звонка. Если клиент прямо не установил следующую дату контакта, попытки связаться продолжаются не дольше 7 календарных дней. Если за указанный срок (7 календарных дней) не получается выйти на контакт с клиентом, такая сделка закрывается (Lost или «Закрыто и не реализовано») с причиной Отмена проекта (Cancellation).</p><p>Если менеджер сам нашёл запрос, или запрос пришёл от Astron, то нормативный срок для заполнения карты проекта до синей черты и перехода на стадию Assigned to sales — 7 календарных дней. Обязательным является наличие следующей задачи в CRM.</p><img src='/academy-sales-form-example.webp' alt=''>",
        },
      ],
    },
    {
      title: "Stage 3",
      description: "Ревизия коммерческого предложения",
      slug: generateSlug("Stage 3"),
      content: [
        {
          type: "section",
          title: "CRM",
          text: "Для официальных Партнеров-Строителей Astron предусмотрена возможнось использования учетной записи в AmoCRM.",
          media: {
            type: "image",
            src: "/academy-sales-1.webp",
          },
        },
        {
          type: "html",
          content:
            "<h2>Заполнение карты проекта</h2><p>Нормативный срок нахождения проекта на стадии New+Qualification 7 рабочих дней суммарно.</p><p>В течение рабочего дня с момента поступления нового запроса специалист отдел маркетинга связывается с клиентом и заполняет карту проекта до синей черты по специальному опроснику</p><h3>Заполненная карта проекта отправляется менеджеру по продажам с копией менеджеру Astron</h3><ul><li>Создает новую сделку в CRM</li><li>Создает задачу для менеджера “Контакт с клиентом”</li><li>При получении согласия на email-рассылку вносит клиента в базу контактов для рассылки в Unisender. Материалы и видеозапись обучающего вебинара по созданию автоматических рассылок доступны по ссылке.</li></ul><h3>Проекты, для которых не заполняется карта проекта:</h3><ul><li>Агрессивная среда (коровники, свинарники и т.д.)</li><li>Жилые помещения</li><li>Здания меньше 500 кв.м</li></ul><p>По таким запросам ассистент отдела маркетинга отправляет отказные письма (см <a href='#'>Примеры отказных писем</a>).</p><p>В том случае, если не получается дозвониться клиенту, в течение рабочего дня высылается стандартная презентация компании и просьба указать актуальный номер телефона (см «Стандартное письмо»). Далее в течение рабочего дня необходимо сделать как минимум 3 звонка. И далее по одному звонку в течение трёх дней подряд. В случае, если клиент сообщает конкретный срок для контакта, в CRM ставится задача провести следующий звонок с указанием даты звонка. Если клиент прямо не установил следующую дату контакта, попытки связаться продолжаются не дольше 7 календарных дней. Если за указанный срок (7 календарных дней) не получается выйти на контакт с клиентом, такая сделка закрывается (Lost или «Закрыто и не реализовано») с причиной Отмена проекта (Cancellation).</p><p>Если менеджер сам нашёл запрос, или запрос пришёл от Astron, то нормативный срок для заполнения карты проекта до синей черты и перехода на стадию Assigned to sales — 7 календарных дней. Обязательным является наличие следующей задачи в CRM.</p><img src='/academy-sales-form-example.webp' alt=''>",
        },
      ],
    },
    {
      title: "Contact and Terms",
      description: "Обсуждение условий контракта",
      slug: generateSlug("Contact and Terms"),
      content: [
        {
          type: "section",
          title: "CRM",
          text: "Для официальных Партнеров-Строителей Astron предусмотрена возможнось использования учетной записи в AmoCRM.",
          media: {
            type: "image",
            src: "/academy-sales-1.webp",
          },
        },
        {
          type: "html",
          content:
            "<h2>Заполнение карты проекта</h2><p>Нормативный срок нахождения проекта на стадии New+Qualification 7 рабочих дней суммарно.</p><p>В течение рабочего дня с момента поступления нового запроса специалист отдел маркетинга связывается с клиентом и заполняет карту проекта до синей черты по специальному опроснику</p><h3>Заполненная карта проекта отправляется менеджеру по продажам с копией менеджеру Astron</h3><ul><li>Создает новую сделку в CRM</li><li>Создает задачу для менеджера “Контакт с клиентом”</li><li>При получении согласия на email-рассылку вносит клиента в базу контактов для рассылки в Unisender. Материалы и видеозапись обучающего вебинара по созданию автоматических рассылок доступны по ссылке.</li></ul><h3>Проекты, для которых не заполняется карта проекта:</h3><ul><li>Агрессивная среда (коровники, свинарники и т.д.)</li><li>Жилые помещения</li><li>Здания меньше 500 кв.м</li></ul><p>По таким запросам ассистент отдела маркетинга отправляет отказные письма (см <a href='#'>Примеры отказных писем</a>).</p><p>В том случае, если не получается дозвониться клиенту, в течение рабочего дня высылается стандартная презентация компании и просьба указать актуальный номер телефона (см «Стандартное письмо»). Далее в течение рабочего дня необходимо сделать как минимум 3 звонка. И далее по одному звонку в течение трёх дней подряд. В случае, если клиент сообщает конкретный срок для контакта, в CRM ставится задача провести следующий звонок с указанием даты звонка. Если клиент прямо не установил следующую дату контакта, попытки связаться продолжаются не дольше 7 календарных дней. Если за указанный срок (7 календарных дней) не получается выйти на контакт с клиентом, такая сделка закрывается (Lost или «Закрыто и не реализовано») с причиной Отмена проекта (Cancellation).</p><p>Если менеджер сам нашёл запрос, или запрос пришёл от Astron, то нормативный срок для заполнения карты проекта до синей черты и перехода на стадию Assigned to sales — 7 календарных дней. Обязательным является наличие следующей задачи в CRM.</p><img src='/academy-sales-form-example.webp' alt=''>",
        },
      ],
    },
    {
      title: "Won",
      description: "Подписан договор на поставку здания",
      slug: generateSlug("Won"),
      content: [
        {
          type: "section",
          title: "CRM",
          text: "Для официальных Партнеров-Строителей Astron предусмотрена возможнось использования учетной записи в AmoCRM.",
          media: {
            type: "image",
            src: "/academy-sales-1.webp",
          },
        },
        {
          type: "html",
          content:
            "<h2>Заполнение карты проекта</h2><p>Нормативный срок нахождения проекта на стадии New+Qualification 7 рабочих дней суммарно.</p><p>В течение рабочего дня с момента поступления нового запроса специалист отдел маркетинга связывается с клиентом и заполняет карту проекта до синей черты по специальному опроснику</p><h3>Заполненная карта проекта отправляется менеджеру по продажам с копией менеджеру Astron</h3><ul><li>Создает новую сделку в CRM</li><li>Создает задачу для менеджера “Контакт с клиентом”</li><li>При получении согласия на email-рассылку вносит клиента в базу контактов для рассылки в Unisender. Материалы и видеозапись обучающего вебинара по созданию автоматических рассылок доступны по ссылке.</li></ul><h3>Проекты, для которых не заполняется карта проекта:</h3><ul><li>Агрессивная среда (коровники, свинарники и т.д.)</li><li>Жилые помещения</li><li>Здания меньше 500 кв.м</li></ul><p>По таким запросам ассистент отдела маркетинга отправляет отказные письма (см <a href='#'>Примеры отказных писем</a>).</p><p>В том случае, если не получается дозвониться клиенту, в течение рабочего дня высылается стандартная презентация компании и просьба указать актуальный номер телефона (см «Стандартное письмо»). Далее в течение рабочего дня необходимо сделать как минимум 3 звонка. И далее по одному звонку в течение трёх дней подряд. В случае, если клиент сообщает конкретный срок для контакта, в CRM ставится задача провести следующий звонок с указанием даты звонка. Если клиент прямо не установил следующую дату контакта, попытки связаться продолжаются не дольше 7 календарных дней. Если за указанный срок (7 календарных дней) не получается выйти на контакт с клиентом, такая сделка закрывается (Lost или «Закрыто и не реализовано») с причиной Отмена проекта (Cancellation).</p><p>Если менеджер сам нашёл запрос, или запрос пришёл от Astron, то нормативный срок для заполнения карты проекта до синей черты и перехода на стадию Assigned to sales — 7 календарных дней. Обязательным является наличие следующей задачи в CRM.</p><img src='/academy-sales-form-example.webp' alt=''>",
        },
      ],
    },
    {
      title: "Lost",
      description:
        "Клиент не заключил договор на проект с нами (возможен переход с другой стадии)",
      slug: generateSlug("Lost"),
      content: [
        {
          type: "section",
          title: "CRM",
          text: "Для официальных Партнеров-Строителей Astron предусмотрена возможнось использования учетной записи в AmoCRM.",
          media: {
            type: "image",
            src: "/academy-sales-1.webp",
          },
        },
        {
          type: "html",
          content:
            "<h2>Заполнение карты проекта</h2><p>Нормативный срок нахождения проекта на стадии New+Qualification 7 рабочих дней суммарно.</p><p>В течение рабочего дня с момента поступления нового запроса специалист отдел маркетинга связывается с клиентом и заполняет карту проекта до синей черты по специальному опроснику</p><h3>Заполненная карта проекта отправляется менеджеру по продажам с копией менеджеру Astron</h3><ul><li>Создает новую сделку в CRM</li><li>Создает задачу для менеджера “Контакт с клиентом”</li><li>При получении согласия на email-рассылку вносит клиента в базу контактов для рассылки в Unisender. Материалы и видеозапись обучающего вебинара по созданию автоматических рассылок доступны по ссылке.</li></ul><h3>Проекты, для которых не заполняется карта проекта:</h3><ul><li>Агрессивная среда (коровники, свинарники и т.д.)</li><li>Жилые помещения</li><li>Здания меньше 500 кв.м</li></ul><p>По таким запросам ассистент отдела маркетинга отправляет отказные письма (см <a href='#'>Примеры отказных писем</a>).</p><p>В том случае, если не получается дозвониться клиенту, в течение рабочего дня высылается стандартная презентация компании и просьба указать актуальный номер телефона (см «Стандартное письмо»). Далее в течение рабочего дня необходимо сделать как минимум 3 звонка. И далее по одному звонку в течение трёх дней подряд. В случае, если клиент сообщает конкретный срок для контакта, в CRM ставится задача провести следующий звонок с указанием даты звонка. Если клиент прямо не установил следующую дату контакта, попытки связаться продолжаются не дольше 7 календарных дней. Если за указанный срок (7 календарных дней) не получается выйти на контакт с клиентом, такая сделка закрывается (Lost или «Закрыто и не реализовано») с причиной Отмена проекта (Cancellation).</p><p>Если менеджер сам нашёл запрос, или запрос пришёл от Astron, то нормативный срок для заполнения карты проекта до синей черты и перехода на стадию Assigned to sales — 7 календарных дней. Обязательным является наличие следующей задачи в CRM.</p><img src='/academy-sales-form-example.webp' alt=''>",
        },
      ],
    },
  ]);
});

academyRouter.get(
  "/conversations",
  async (req: Request, res: Response<{ content: InfoBlock[] }>) => {
    const documents = dbService.get("documents");
    res.json({
      content: [
        {
          type: "section",
          title: "Чек-лист",
          text: "<p>Чек-лист подготовки к переговорам. Это документ, в котором перечислены ключевые цели конкретной встречи, возможные возражения, с которыми могут столкнуться участники. Чек-лист очень хорошо помогает и в составлении протокола проведенной встречи.</p>",
          media: {
            type: "image",
            src: "/academy-conversations-1.webp",
          },
        },
        {
          type: "separator",
        },
        {
          type: "section",
          title: "Карта переговоров",
          documents: Array(3)
            .fill(null)
            .map(() => documents[Math.floor(Math.random() * documents.length)]),
        },
        {
          type: "separator",
        },
        {
          type: "section",
          title: "Оценка качества",
          documents: Array(4)
            .fill(null)
            .map(() => documents[Math.floor(Math.random() * documents.length)]),
        },
      ],
    });
  }
);

academyRouter.get(
  "/analysis",
  async (req: Request, res: Response<{ content: InfoBlock[] }>) => {
    const documents = dbService.get("documents");
    res.json({
      content: [
        {
          type: "section",
          title: "Примеры ТЗ для тендеров",
          documents: Array(2)
            .fill(null)
            .map(() => documents[Math.floor(Math.random() * documents.length)]),
        },
        {
          type: "separator",
        },
        {
          type: "section",
          title: "Сравнение технологий",
          documents: Array(3)
            .fill(null)
            .map(() => documents[Math.floor(Math.random() * documents.length)]),
        },
        {
          type: "separator",
        },
        {
          type: "section",
          title: "Сравнение с КП конкурентов",
          documents: Array(7)
            .fill(null)
            .map(() => documents[Math.floor(Math.random() * documents.length)]),
        },
      ],
    });
  }
);

academyRouter.get(
  "/commercial",
  async (req: Request, res: Response<{ content: InfoBlock[] }>) => {
    const documents = dbService.get("documents");
    res.json({
      content: [
        {
          type: "section",
          title: "Бланки коммерческих предложений",
          documents: Array(3)
            .fill(null)
            .map(() => documents[Math.floor(Math.random() * documents.length)]),
        },
        {
          type: "separator",
        },
        {
          type: "section",
          title: "Сравнение технологий",
          documents: Array(3)
            .fill(null)
            .map(() => documents[Math.floor(Math.random() * documents.length)]),
        },
        {
          type: "separator",
        },
        {
          type: "section",
          title: "Формирование графика работ",
          documents: Array(1)
            .fill(null)
            .map(() => documents[Math.floor(Math.random() * documents.length)]),
        },
        {
          type: "separator",
        },
        {
          type: "section",
          title: "Калькулятор толщины теплоизоляции",
          text: "<a href='#' target='_blank' rel='noopener noreferrer'>Онлайн-инструмент (калькулятор)</a>",
        },
      ],
    });
  }
);

academyRouter.get(
  "/projects",
  async (req: Request, res: Response<AcademyProjectInList[]>) => {
    const projects = dbService.get("academyProjects");
    res.json(projects.map(({ content, ...project }) => project));
  }
);

academyRouter.get(
  "/projects/:projectId",
  async (req: Request, res: Response<AcademyProject | Error>) => {
    const projectId = req.params.projectId;
    const project = dbService
      .get("academyProjects")
      .find((project) => project.id === projectId);
    if (!project) {
      res.status(404).json({ message: "Проект не найден" });
    }
    res.json(project);
  }
);

academyRouter.get(
  "/webinars",
  async (req: Request, res: Response<AcademyWebinarInList[]>) => {
    const webinars = dbService.get("academyWebinars");
    res.json(webinars.map(({ content, ...webinar }) => webinar));
  }
);

academyRouter.get(
  "/webinars/:webinarId",
  async (req: Request, res: Response<AcademyWebinar | Error>) => {
    const webinarId = req.params.webinarId;
    const webinar = dbService
      .get("academyWebinars")
      .find((webinar) => webinar.id === webinarId);
    if (!webinar) {
      res.status(404).json({ message: "Вебинар не найден" });
    }
    res.json(webinar);
  }
);

academyRouter.get(
  "/benefits",
  async (
    req: Request,
    res: Response<{
      data: AcademyBenefitInList[];
      nextPage: number;
      totalResults: number;
    }>
  ) => {
    const {
      page = "1",
      limit = "10",
      tags,
    } = req.query as {
      page: string;
      limit: string;
      tags: string[] | undefined;
    };

    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const endIndex = parseInt(page) * parseInt(limit);

    const benefits = dbService
      .get("academyBenefits")
      .filter(
        (benefit) =>
          tags?.every((tag) => benefit.tags.some((t) => t.slug === tag)) ?? true
      );

    const totalBenefits = benefits.length;
    const totalPages = Math.ceil(totalBenefits / parseInt(limit));
    const currentPage = parseInt(page);
    const nextPage = currentPage + 1;

    res.json({
      data: benefits
        .slice(startIndex, endIndex)
        .map(({ content, ...benefit }) => benefit),
      nextPage: nextPage <= totalPages ? nextPage : 0,
      totalResults: totalBenefits,
    });
  }
);

academyRouter.get(
  "/benefits/tags",
  async (req: Request, res: Response<AcademyBenefitTag[]>) => {
    const tags = dbService.get("academyBenefitTags");
    res.json(tags);
  }
);

academyRouter.get(
  "/benefits/:benefitId",
  async (req: Request, res: Response<AcademyBenefit | Error>) => {
    const benefitId = req.params.benefitId;
    const benefit = dbService
      .get("academyBenefits")
      .find((benefit) => benefit.id === benefitId);
    if (!benefit) {
      res.status(404).json({ message: "Преимущество не найдено" });
    }
    res.json(benefit);
  }
);

export { academyRouter };
