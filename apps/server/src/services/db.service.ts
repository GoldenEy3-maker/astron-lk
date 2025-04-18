import {
  generateId,
  generateRandomDate,
  generateRandomNumber,
  generateSlug,
} from "../libs/utils";
import {
  AcademyBenefit,
  AcademyBenefitTag,
  AcademyProject,
  AcademyProjectInList,
  AcademySection,
  AcademySectionInList,
  AcademyWebinar,
  AcademyWebinarInList,
  Bulletin,
  Document,
  DocumentCategory,
  LeadGenerationItem,
  News,
  NewsInList,
  PartnerCard,
  PartnerInList,
  Retailing,
  User,
} from "../types/globals";
import passwordService from "./password.service";

type Employee = {
  id: string;
  name: string;
};

type Test = {
  id: string;
  name: string;
};

type EmployeeTest = {
  id: string;
  employeeId: string;
  testId: string;
  result: number;
  threshold: number;
  createdAt: string;
};

type DBData = {
  users: User[];
  news: Omit<News & NewsInList, "isReaded">[];
  newsReadedByUsers: {
    userId: string;
    newsId: string;
    createdAt: string;
  }[];
  documents: Document[];
  documentCategories: DocumentCategory[];
  bulletinsCategories: DocumentCategory[];
  bulletins: Omit<Bulletin, "isReaded">[];
  bulletinsReadedByUsers: {
    userId: string;
    bulletinId: string;
    createdAt: string;
  }[];
  employees: Employee[];
  tests: Test[];
  employeeTests: EmployeeTest[];
  leadGenerations: LeadGenerationItem[];
  sales: (Omit<Retailing, "monthIdx"> & { createdAt: string })[];
  bookings: (Omit<Retailing, "monthIdx"> & { createdAt: string })[];
  academySections: (AcademySection & AcademySectionInList)[];
  academyProjects: (AcademyProject & AcademyProjectInList)[];
  academyWebinars: (AcademyWebinar & AcademyWebinarInList)[];
  academyBenefits: AcademyBenefit[];
  academyBenefitTags: AcademyBenefitTag[];
  partners: (PartnerCard & PartnerInList)[];
};

export default new (class DBService {
  private data: DBData = {
    users: [],
    news: [],
    newsReadedByUsers: [],
    documents: [],
    documentCategories: [],
    bulletinsCategories: [],
    bulletins: [],
    bulletinsReadedByUsers: [],
    employees: [],
    tests: [],
    employeeTests: [],
    leadGenerations: [],
    sales: [],
    bookings: [],
    academySections: [],
    academyProjects: [],
    academyWebinars: [],
    academyBenefits: [],
    academyBenefitTags: [],
    partners: [],
  };

  constructor() {
    this.seed();
  }

  seed() {
    const documents = [
      {
        id: "zmo55lgr5t",
        title: "Прайс-лист",
        createdAt: "2023-12-28T04:27:24.692Z",
        file: { url: "/test.pdf", size: 486650 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "2ev5t4q5rs",
        title: "Каталог решений",
        createdAt: "2024-06-11T09:04:47.436Z",
        file: { url: "/test.pdf", size: 774665 },
        category: { id: "7", label: "Каталог", slug: "katalog" },
      },
      {
        id: "sj8823wv7l",
        title: "Прайс-лист",
        createdAt: "2023-08-02T04:13:39.019Z",
        file: { url: "/test.pdf", size: 541772 },
        category: { id: "2", label: "Буклет", slug: "buklet" },
      },
      {
        id: "leycc1anuh",
        title: "Презентация новых технологий",
        createdAt: "2024-11-12T11:45:04.876Z",
        file: { url: "/test.pdf", size: 368760 },
        category: { id: "7", label: "Каталог", slug: "katalog" },
      },
      {
        id: "abkmo2o31w",
        title: "Презентация новых технологий",
        createdAt: "2023-12-02T04:00:02.737Z",
        file: { url: "/test.pdf", size: 851897 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "ob6f8uk9mv",
        title: "Спецификация материалов",
        createdAt: "2024-11-12T13:36:09.154Z",
        file: { url: "/test.pdf", size: 239039 },
        category: { id: "2", label: "Буклет", slug: "buklet" },
      },
      {
        id: "20h1cn77qy",
        title: "Презентация новых технологий",
        createdAt: "2023-11-28T14:03:18.460Z",
        file: { url: "/test.pdf", size: 884614 },
        category: { id: "1", label: "Изменение цены", slug: "izmenenie-tseny" },
      },
      {
        id: "qy2l1ahvb9",
        title: "Спецификация материалов",
        createdAt: "2024-04-27T19:22:15.627Z",
        file: { url: "/test.pdf", size: 289942 },
        category: { id: "2", label: "Буклет", slug: "buklet" },
      },
      {
        id: "tlkrcvk6l1",
        title: "Прайс-лист",
        createdAt: "2024-04-18T16:50:57.212Z",
        file: { url: "/test.pdf", size: 742132 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "lfm6p45fxl",
        title: "Руководство по монтажу",
        createdAt: "2023-03-04T08:43:51.005Z",
        file: { url: "/test.pdf", size: 574203 },
        category: {
          id: "4",
          label: "Новые технологии",
          slug: "novye-tehnologii",
        },
      },
      {
        id: "4j4c6ykkff",
        title: "Прайс-лист",
        createdAt: "2025-01-08T21:36:47.452Z",
        file: { url: "/test.pdf", size: 445527 },
        category: { id: "8", label: "Сертификаты", slug: "sertifikaty" },
      },
      {
        id: "86ftp63774",
        title: "Презентация новых технологий",
        createdAt: "2023-10-16T01:10:12.510Z",
        file: { url: "/test.pdf", size: 392821 },
        category: { id: "9", label: "Презентация", slug: "prezentatsiya" },
      },
      {
        id: "cb1zf1ai02",
        title: "Сертификат соответствия",
        createdAt: "2023-12-11T16:41:17.432Z",
        file: { url: "/test.pdf", size: 504587 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "cus83w13dr",
        title: "Презентация новых технологий",
        createdAt: "2024-06-14T04:42:43.068Z",
        file: { url: "/test.pdf", size: 653406 },
        category: {
          id: "6",
          label: "Техническая документация",
          slug: "tehnicheskaya-dokumentatsiya",
        },
      },
      {
        id: "p8ay7ctlro",
        title: "Презентация новых технологий",
        createdAt: "2023-11-14T12:27:03.880Z",
        file: { url: "/test.pdf", size: 246350 },
        category: { id: "9", label: "Презентация", slug: "prezentatsiya" },
      },
      {
        id: "ti45qdas4j",
        title: "Презентация новых технологий",
        createdAt: "2024-07-30T05:49:10.019Z",
        file: { url: "/test.pdf", size: 517872 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "hy9zmmfrds",
        title: "Спецификация материалов",
        createdAt: "2023-05-07T01:35:13.481Z",
        file: { url: "/test.pdf", size: 805402 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "mx8rbrxw8g",
        title: "Спецификация материалов",
        createdAt: "2025-01-03T17:41:38.286Z",
        file: { url: "/test.pdf", size: 252500 },
        category: { id: "1", label: "Изменение цены", slug: "izmenenie-tseny" },
      },
      {
        id: "ap4dfrn21o",
        title: "Презентация новых технологий",
        createdAt: "2024-08-07T12:23:19.385Z",
        file: { url: "/test.pdf", size: 708439 },
        category: { id: "7", label: "Каталог", slug: "katalog" },
      },
      {
        id: "u98ppg0e8g",
        title: "Техническая документация",
        createdAt: "2024-02-14T12:13:48.287Z",
        file: { url: "/test.pdf", size: 799440 },
        category: {
          id: "4",
          label: "Новые технологии",
          slug: "novye-tehnologii",
        },
      },
      {
        id: "uhsaqiv1to",
        title: "Информационный буклет",
        createdAt: "2023-03-15T16:51:08.451Z",
        file: { url: "/test.pdf", size: 366876 },
        category: { id: "9", label: "Презентация", slug: "prezentatsiya" },
      },
      {
        id: "etm45ivok4",
        title: "Сертификат соответствия",
        createdAt: "2023-03-13T19:56:27.498Z",
        file: { url: "/test.pdf", size: 602114 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "pjlao3sff9",
        title: "Руководство по монтажу",
        createdAt: "2024-10-06T00:50:42.778Z",
        file: { url: "/test.pdf", size: 649269 },
        category: {
          id: "4",
          label: "Новые технологии",
          slug: "novye-tehnologii",
        },
      },
      {
        id: "0ifh3ket63",
        title: "Сертификат соответствия",
        createdAt: "2023-11-14T00:31:06.562Z",
        file: { url: "/test.pdf", size: 683930 },
        category: { id: "8", label: "Сертификаты", slug: "sertifikaty" },
      },
      {
        id: "wd9u861vur",
        title: "Руководство по монтажу",
        createdAt: "2024-01-25T05:08:43.001Z",
        file: { url: "/test.pdf", size: 451955 },
        category: { id: "2", label: "Буклет", slug: "buklet" },
      },
      {
        id: "madit5pd1l",
        title: "Каталог решений",
        createdAt: "2024-01-21T22:38:17.955Z",
        file: { url: "/test.pdf", size: 246124 },
        category: {
          id: "6",
          label: "Техническая документация",
          slug: "tehnicheskaya-dokumentatsiya",
        },
      },
      {
        id: "281nccgw6h",
        title: "Техническая документация",
        createdAt: "2023-07-02T16:49:08.945Z",
        file: { url: "/test.pdf", size: 599133 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "wd075yu691",
        title: "Руководство по монтажу",
        createdAt: "2024-02-01T09:11:57.676Z",
        file: { url: "/test.pdf", size: 355912 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "oy9e4q5vh2",
        title: "Сертификат соответствия",
        createdAt: "2023-02-19T06:48:32.353Z",
        file: { url: "/test.pdf", size: 196456 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "1j9opmu8de",
        title: "Каталог решений",
        createdAt: "2024-12-08T07:10:31.084Z",
        file: { url: "/test.pdf", size: 732386 },
        category: {
          id: "4",
          label: "Новые технологии",
          slug: "novye-tehnologii",
        },
      },
      {
        id: "b0ytn82w2m",
        title: "Информационный буклет",
        createdAt: "2024-04-05T20:29:34.827Z",
        file: { url: "/test.pdf", size: 759558 },
        category: { id: "1", label: "Изменение цены", slug: "izmenenie-tseny" },
      },
      {
        id: "o68y5xm068",
        title: "Сертификат соответствия",
        createdAt: "2023-09-07T02:02:23.416Z",
        file: { url: "/test.pdf", size: 822904 },
        category: { id: "7", label: "Каталог", slug: "katalog" },
      },
      {
        id: "gz5mkroge4",
        title: "Информационный буклет",
        createdAt: "2023-03-16T22:27:46.329Z",
        file: { url: "/test.pdf", size: 663979 },
        category: { id: "1", label: "Изменение цены", slug: "izmenenie-tseny" },
      },
      {
        id: "y1h56g8fdw",
        title: "Типовые формулировки контрактов",
        createdAt: "2023-05-07T14:33:41.720Z",
        file: { url: "/test.pdf", size: 499093 },
        category: {
          id: "6",
          label: "Техническая документация",
          slug: "tehnicheskaya-dokumentatsiya",
        },
      },
      {
        id: "n11aiu5xgb",
        title: "Техническая документация",
        createdAt: "2023-04-06T12:13:31.359Z",
        file: { url: "/test.pdf", size: 370747 },
        category: {
          id: "4",
          label: "Новые технологии",
          slug: "novye-tehnologii",
        },
      },
      {
        id: "5ugrocpscw",
        title: "Информационный буклет",
        createdAt: "2024-08-01T19:56:51.713Z",
        file: { url: "/test.pdf", size: 841389 },
        category: { id: "7", label: "Каталог", slug: "katalog" },
      },
      {
        id: "gfqwui4g7h",
        title: "Каталог решений",
        createdAt: "2024-04-21T03:20:11.058Z",
        file: { url: "/test.pdf", size: 533309 },
        category: {
          id: "6",
          label: "Техническая документация",
          slug: "tehnicheskaya-dokumentatsiya",
        },
      },
      {
        id: "yxohd9kwui",
        title: "Прайс-лист",
        createdAt: "2025-01-17T05:17:03.217Z",
        file: { url: "/test.pdf", size: 744290 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "ms077d87y4",
        title: "Типовые формулировки контрактов",
        createdAt: "2023-04-05T19:03:11.311Z",
        file: { url: "/test.pdf", size: 739144 },
        category: { id: "1", label: "Изменение цены", slug: "izmenenie-tseny" },
      },
      {
        id: "3mrnwu4oxu",
        title: "Техническая документация",
        createdAt: "2023-09-04T10:39:42.484Z",
        file: { url: "/test.pdf", size: 193364 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "uexmckg264",
        title: "Каталог решений",
        createdAt: "2023-12-20T15:11:22.137Z",
        file: { url: "/test.pdf", size: 383224 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "zwqkleoq05",
        title: "Руководство по монтажу",
        createdAt: "2025-01-23T20:56:58.276Z",
        file: { url: "/test.pdf", size: 113459 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "4p562ehvnf",
        title: "Сертификат соответствия",
        createdAt: "2025-01-03T14:00:32.398Z",
        file: { url: "/test.pdf", size: 413259 },
        category: { id: "1", label: "Изменение цены", slug: "izmenenie-tseny" },
      },
      {
        id: "b0ja96jzct",
        title: "Информационный буклет",
        createdAt: "2023-08-08T00:07:56.750Z",
        file: { url: "/test.pdf", size: 261084 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "8uatwtvhcg",
        title: "Типовые формулировки контрактов",
        createdAt: "2023-05-12T01:05:09.471Z",
        file: { url: "/test.pdf", size: 174424 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "v43go33odu",
        title: "Спецификация материалов",
        createdAt: "2024-06-07T23:15:40.028Z",
        file: { url: "/test.pdf", size: 613265 },
        category: { id: "8", label: "Сертификаты", slug: "sertifikaty" },
      },
      {
        id: "ftr2mp7hus",
        title: "Техническая документация",
        createdAt: "2023-07-18T12:46:05.488Z",
        file: { url: "/test.pdf", size: 575802 },
        category: { id: "9", label: "Презентация", slug: "prezentatsiya" },
      },
      {
        id: "t5lu68amim",
        title: "Спецификация материалов",
        createdAt: "2023-06-12T04:44:52.972Z",
        file: { url: "/test.pdf", size: 184973 },
        category: {
          id: "6",
          label: "Техническая документация",
          slug: "tehnicheskaya-dokumentatsiya",
        },
      },
      {
        id: "1f663v0787",
        title: "Сертификат соответствия",
        createdAt: "2024-06-19T16:14:30.273Z",
        file: { url: "/test.pdf", size: 231596 },
        category: { id: "1", label: "Изменение цены", slug: "izmenenie-tseny" },
      },
      {
        id: "x0gls1f2e5",
        title: "Презентация новых технологий",
        createdAt: "2023-09-07T07:26:02.889Z",
        file: { url: "/test.pdf", size: 413991 },
        category: { id: "7", label: "Каталог", slug: "katalog" },
      },
      {
        id: "7rjzmavejw",
        title: "Каталог решений",
        createdAt: "2023-09-03T02:24:39.864Z",
        file: { url: "/test.pdf", size: 674629 },
        category: {
          id: "6",
          label: "Техническая документация",
          slug: "tehnicheskaya-dokumentatsiya",
        },
      },
      {
        id: "awl4c5dtu9",
        title: "Презентация новых технологий",
        createdAt: "2024-05-21T17:54:25.360Z",
        file: { url: "/test.pdf", size: 114351 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "5tm24nn6iw",
        title: "Руководство по монтажу",
        createdAt: "2023-10-28T19:56:57.218Z",
        file: { url: "/test.pdf", size: 409183 },
        category: { id: "1", label: "Изменение цены", slug: "izmenenie-tseny" },
      },
      {
        id: "jx5d9z161f",
        title: "Презентация новых технологий",
        createdAt: "2023-01-04T06:27:18.519Z",
        file: { url: "/test.pdf", size: 614804 },
        category: { id: "8", label: "Сертификаты", slug: "sertifikaty" },
      },
      {
        id: "c4uyejkfx3",
        title: "Типовые формулировки контрактов",
        createdAt: "2023-01-17T16:48:32.743Z",
        file: { url: "/test.pdf", size: 798492 },
        category: { id: "7", label: "Каталог", slug: "katalog" },
      },
      {
        id: "wt2y5537bb",
        title: "Спецификация материалов",
        createdAt: "2024-09-21T03:22:38.049Z",
        file: { url: "/test.pdf", size: 710238 },
        category: {
          id: "4",
          label: "Новые технологии",
          slug: "novye-tehnologii",
        },
      },
      {
        id: "t0scnpoq6l",
        title: "Сертификат соответствия",
        createdAt: "2023-04-14T23:16:40.341Z",
        file: { url: "/test.pdf", size: 123797 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "r557mgo8wb",
        title: "Типовые формулировки контрактов",
        createdAt: "2024-06-24T03:46:36.870Z",
        file: { url: "/test.pdf", size: 838236 },
        category: { id: "8", label: "Сертификаты", slug: "sertifikaty" },
      },
      {
        id: "w5fitigpqs",
        title: "Типовые формулировки контрактов",
        createdAt: "2023-05-28T03:53:07.468Z",
        file: { url: "/test.pdf", size: 154491 },
        category: { id: "8", label: "Сертификаты", slug: "sertifikaty" },
      },
      {
        id: "943eooa9pj",
        title: "Прайс-лист",
        createdAt: "2023-04-08T18:13:36.115Z",
        file: { url: "/test.pdf", size: 671132 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "ts07k5e3a4",
        title: "Презентация новых технологий",
        createdAt: "2023-01-06T02:34:36.275Z",
        file: { url: "/test.pdf", size: 615510 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "svjxzba961",
        title: "Техническая документация",
        createdAt: "2024-01-26T00:03:32.210Z",
        file: { url: "/test.pdf", size: 278725 },
        category: {
          id: "6",
          label: "Техническая документация",
          slug: "tehnicheskaya-dokumentatsiya",
        },
      },
      {
        id: "do3fa0ctv7",
        title: "Спецификация материалов",
        createdAt: "2023-03-30T08:29:30.055Z",
        file: { url: "/test.pdf", size: 564441 },
        category: { id: "2", label: "Буклет", slug: "buklet" },
      },
      {
        id: "f7k2c6gjv2",
        title: "Техническая документация",
        createdAt: "2023-03-10T00:37:45.617Z",
        file: { url: "/test.pdf", size: 353046 },
        category: { id: "2", label: "Буклет", slug: "buklet" },
      },
      {
        id: "nnlog0yi2n",
        title: "Каталог решений",
        createdAt: "2023-07-28T05:44:42.012Z",
        file: { url: "/test.pdf", size: 665847 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "9k2a8boew1",
        title: "Типовые формулировки контрактов",
        createdAt: "2023-01-10T04:37:50.549Z",
        file: { url: "/test.pdf", size: 773026 },
        category: {
          id: "6",
          label: "Техническая документация",
          slug: "tehnicheskaya-dokumentatsiya",
        },
      },
      {
        id: "on3fv9rrmr",
        title: "Прайс-лист",
        createdAt: "2023-05-14T14:51:01.615Z",
        file: { url: "/test.pdf", size: 515305 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "pmt1i6ao5c",
        title: "Техническая документация",
        createdAt: "2024-12-30T01:54:52.709Z",
        file: { url: "/test.pdf", size: 100767 },
        category: { id: "9", label: "Презентация", slug: "prezentatsiya" },
      },
      {
        id: "qqjv8tvkjr",
        title: "Спецификация материалов",
        createdAt: "2023-08-30T15:28:05.883Z",
        file: { url: "/test.pdf", size: 236414 },
        category: { id: "8", label: "Сертификаты", slug: "sertifikaty" },
      },
      {
        id: "xnd13oof85",
        title: "Техническая документация",
        createdAt: "2023-12-02T01:33:10.609Z",
        file: { url: "/test.pdf", size: 626453 },
        category: { id: "9", label: "Презентация", slug: "prezentatsiya" },
      },
      {
        id: "lbxe9sunew",
        title: "Каталог решений",
        createdAt: "2023-06-06T13:24:39.730Z",
        file: { url: "/test.pdf", size: 696871 },
        category: { id: "9", label: "Презентация", slug: "prezentatsiya" },
      },
      {
        id: "y4ap61gbol",
        title: "Информационный буклет",
        createdAt: "2024-07-06T03:29:25.362Z",
        file: { url: "/test.pdf", size: 505116 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "38mfhsi138",
        title: "Руководство по монтажу",
        createdAt: "2024-11-01T17:40:42.414Z",
        file: { url: "/test.pdf", size: 883634 },
        category: { id: "1", label: "Изменение цены", slug: "izmenenie-tseny" },
      },
      {
        id: "ebjr3wa0ex",
        title: "Спецификация материалов",
        createdAt: "2024-06-06T16:19:39.179Z",
        file: { url: "/test.pdf", size: 626355 },
        category: { id: "9", label: "Презентация", slug: "prezentatsiya" },
      },
      {
        id: "yp88khyu44",
        title: "Типовые формулировки контрактов",
        createdAt: "2025-01-01T15:14:58.794Z",
        file: { url: "/test.pdf", size: 411026 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "0bw1g8ujjl",
        title: "Презентация новых технологий",
        createdAt: "2023-06-05T01:18:53.499Z",
        file: { url: "/test.pdf", size: 577875 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "mso134fb5c",
        title: "Спецификация материалов",
        createdAt: "2023-01-27T05:26:25.964Z",
        file: { url: "/test.pdf", size: 173096 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "ieo6ks7dej",
        title: "Прайс-лист",
        createdAt: "2024-02-11T01:14:46.961Z",
        file: { url: "/test.pdf", size: 726538 },
        category: {
          id: "6",
          label: "Техническая документация",
          slug: "tehnicheskaya-dokumentatsiya",
        },
      },
      {
        id: "p7t9ym1ajk",
        title: "Прайс-лист",
        createdAt: "2024-02-18T22:51:19.427Z",
        file: { url: "/test.pdf", size: 261636 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "dquewcabt6",
        title: "Презентация новых технологий",
        createdAt: "2023-02-13T04:18:39.805Z",
        file: { url: "/test.pdf", size: 545272 },
        category: { id: "2", label: "Буклет", slug: "buklet" },
      },
      {
        id: "pf78sfh5h2",
        title: "Техническая документация",
        createdAt: "2023-10-21T06:42:30.788Z",
        file: { url: "/test.pdf", size: 694170 },
        category: {
          id: "4",
          label: "Новые технологии",
          slug: "novye-tehnologii",
        },
      },
      {
        id: "tngzlhmap2",
        title: "Спецификация материалов",
        createdAt: "2024-12-22T07:42:03.920Z",
        file: { url: "/test.pdf", size: 397387 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "ukuxinqyea",
        title: "Руководство по монтажу",
        createdAt: "2024-07-21T06:26:55.938Z",
        file: { url: "/test.pdf", size: 578219 },
        category: {
          id: "6",
          label: "Техническая документация",
          slug: "tehnicheskaya-dokumentatsiya",
        },
      },
      {
        id: "rahlq8trzv",
        title: "Презентация новых технологий",
        createdAt: "2023-02-25T01:43:16.495Z",
        file: { url: "/test.pdf", size: 871211 },
        category: {
          id: "4",
          label: "Новые технологии",
          slug: "novye-tehnologii",
        },
      },
      {
        id: "wnl08f8j8w",
        title: "Информационный буклет",
        createdAt: "2024-09-20T12:17:52.055Z",
        file: { url: "/test.pdf", size: 774136 },
        category: { id: "7", label: "Каталог", slug: "katalog" },
      },
      {
        id: "7z1ngcjxg3",
        title: "Техническая документация",
        createdAt: "2024-02-15T04:21:47.442Z",
        file: { url: "/test.pdf", size: 105191 },
        category: {
          id: "6",
          label: "Техническая документация",
          slug: "tehnicheskaya-dokumentatsiya",
        },
      },
      {
        id: "570yj2olq6",
        title: "Каталог решений",
        createdAt: "2024-02-22T17:01:21.267Z",
        file: { url: "/test.pdf", size: 315026 },
        category: {
          id: "4",
          label: "Новые технологии",
          slug: "novye-tehnologii",
        },
      },
      {
        id: "rrehtpgn6w",
        title: "Типовые формулировки контрактов",
        createdAt: "2024-02-12T11:57:27.226Z",
        file: { url: "/test.pdf", size: 749470 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "7l834d95p6",
        title: "Прайс-лист",
        createdAt: "2023-10-29T00:56:32.464Z",
        file: { url: "/test.pdf", size: 507282 },
        category: { id: "7", label: "Каталог", slug: "katalog" },
      },
      {
        id: "x92iynnn6c",
        title: "Прайс-лист",
        createdAt: "2023-08-03T20:51:30.174Z",
        file: { url: "/test.pdf", size: 165207 },
        category: {
          id: "4",
          label: "Новые технологии",
          slug: "novye-tehnologii",
        },
      },
      {
        id: "wvkfkz19e0",
        title: "Техническая документация",
        createdAt: "2023-06-03T23:36:26.013Z",
        file: { url: "/test.pdf", size: 743365 },
        category: { id: "1", label: "Изменение цены", slug: "izmenenie-tseny" },
      },
      {
        id: "y8c0safwea",
        title: "Спецификация материалов",
        createdAt: "2023-08-23T16:52:24.239Z",
        file: { url: "/test.pdf", size: 214254 },
        category: { id: "9", label: "Презентация", slug: "prezentatsiya" },
      },
      {
        id: "f7wp1cq56c",
        title: "Сертификат соответствия",
        createdAt: "2024-01-05T13:53:23.161Z",
        file: { url: "/test.pdf", size: 184879 },
        category: {
          id: "6",
          label: "Техническая документация",
          slug: "tehnicheskaya-dokumentatsiya",
        },
      },
      {
        id: "iijg50qlx",
        title: "Техническая документация",
        createdAt: "2024-12-03T15:12:21.872Z",
        file: { url: "/test.pdf", size: 104037 },
        category: { id: "5", label: "Подарок", slug: "podarok" },
      },
      {
        id: "hsgwsrq4vh",
        title: "Сертификат соответствия",
        createdAt: "2024-01-12T19:21:19.441Z",
        file: { url: "/test.pdf", size: 628271 },
        category: {
          id: "4",
          label: "Новые технологии",
          slug: "novye-tehnologii",
        },
      },
      {
        id: "5l56lev0sx",
        title: "Презентация новых технологий",
        createdAt: "2023-10-14T20:39:28.349Z",
        file: { url: "/test.pdf", size: 136609 },
        category: { id: "7", label: "Каталог", slug: "katalog" },
      },
      {
        id: "d43725w3jd",
        title: "Спецификация материалов",
        createdAt: "2023-06-29T14:51:35.329Z",
        file: { url: "/test.pdf", size: 484217 },
        category: { id: "7", label: "Каталог", slug: "katalog" },
      },
      {
        id: "bs8dfhxt1y",
        title: "Информационный буклет",
        createdAt: "2023-09-08T09:04:50.618Z",
        file: { url: "/test.pdf", size: 859903 },
        category: {
          id: "3",
          label: "Типовой договор",
          slug: "tipovoy-dogovor",
        },
      },
      {
        id: "183eeojog7",
        title: "Спецификация материалов",
        createdAt: "2024-09-07T14:21:48.896Z",
        file: { url: "/test.pdf", size: 643181 },
        category: { id: "7", label: "Каталог", slug: "katalog" },
      },
      {
        id: "ru8pd01kkp",
        title: "Техническая документация",
        createdAt: "2023-08-30T14:06:21.946Z",
        file: { url: "/test.pdf", size: 157733 },
        category: { id: "2", label: "Буклет", slug: "buklet" },
      },
    ];

    this.data = {
      users: [
        {
          id: "1",
          name: "Данил",
          surname: "Королев",
          patronymic: "Николаевич",
          email: "danil-danil-korolev@bk.ru",
          password: passwordService.hashPassword("123456"),
          tokenVersion: 0,
          role: "partner",
          isBanned: false,
          favorites: [],
          partnerId: "1",
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
          role: "partner",
          isBanned: false,
          favorites: [],
          partnerId: "1",
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
          role: "partner",
          isBanned: true,
          favorites: [],
          partnerId: "1",
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
          role: "partner",
          favorites: [],
          partnerId: "1",
        },
        {
          id: "5",
          name: "Владислав",
          surname: "Кленов",
          patronymic: "Владиславович",
          email: "manager@manager.ru",
          password: passwordService.hashPassword("manager"),
          phone: "+79131231231",
          tokenVersion: 0,
          isBanned: false,
          role: "manager",
          favorites: [],
          partnerId: "1",
        },
        {
          id: "6",
          name: "Владислав",
          surname: "Кленов",
          patronymic: "Владиславович",
          email: "employee@employee.ru",
          password: passwordService.hashPassword("employee"),
          phone: "+79131231231",
          tokenVersion: 0,
          isBanned: false,
          role: "employee",
          favorites: [],
          partnerId: "1",
        },
        {
          id: "7",
          name: "Иван",
          surname: "Иванов",
          patronymic: "Иванович",
          email: "partner@partner.ru",
          password: passwordService.hashPassword("partner"),
          phone: "+79131231231",
          tokenVersion: 0,
          isBanned: false,
          role: "partner",
          favorites: [],
          partnerId: "1",
        },
        {
          id: "8",
          name: "Владислав",
          surname: "Кленов",
          patronymic: "Владиславович",
          email: "super-manager@manager.ru",
          password: passwordService.hashPassword("super-manager"),
          phone: "+79131231231",
          tokenVersion: 0,
          isBanned: false,
          role: "super-manager",
          favorites: [],
          partnerId: "1",
        },
      ],
      news: [
        {
          id: "1",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          // img: {
          //   src: "/news-1.webp",
          //   alt: "Картинка завода Астрон",
          // },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
            documents: Array.from({ length: 3 }).map(
              () => documents[Math.floor(Math.random() * documents.length)]
            ),
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "2",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "3",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "4",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "5",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "6",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "7",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "8",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "9",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "10",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "11",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "12",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "13",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "14",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "15",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
      ],
      newsReadedByUsers: [],
      partners: [
        {
          id: "1",
          title: "NABUCCO Architecture & Construction",
          projects: {
            count: 23,
            link: "/",
            implementedArea: 5678,
          },
          status: "gold",
          cooperationYears: 12,
          logo: "/partner-logo-1.webp",
          certificate: "/",
          booking: {
            percent: 90,
            total: 19800000,
          },
          sales: {
            percent: 88,
            total: 19800000,
          },
        },
        {
          id: "2",
          title: "MCG",
          projects: {
            count: 8,
            link: "/",
            implementedArea: 4354,
          },
          cooperationYears: 9,
          logo: "/partner-logo-2.webp",
          certificate: "/",
          booking: {
            percent: 78,
            total: 19800000,
          },
          sales: {
            percent: 65,
            total: 19800000,
          },
        },
        {
          id: "3",
          title: "InfraTech",
          projects: {
            count: 9,
            link: "/",
            implementedArea: 3456,
          },
          cooperationYears: 4,
          logo: "/partner-logo-3.webp",
          certificate: "/",
          booking: {
            percent: 56,
            total: 19800000,
          },
          sales: {
            percent: 87,
            total: 19800000,
          },
        },
        {
          id: "4",
          title: "MODUL STROY Project",
          projects: {
            count: 10,
            link: "/",
            implementedArea: 2345,
          },
          cooperationYears: 10,
          logo: "/partner-logo-4.webp",
          certificate: "/",
          booking: {
            percent: 100,
            total: 19800000,
          },
          sales: {
            percent: 22,
            total: 19800000,
          },
        },
        {
          id: "5",
          title: "PRO Space Engineering",
          projects: {
            count: 10,
            link: "/",
            implementedArea: 1234,
          },
          cooperationYears: 8,
          logo: "/partner-logo-5.webp",
          certificate: "/",
          booking: {
            percent: 56,
            total: 19800000,
          },
          sales: {
            percent: 34,
            total: 19800000,
          },
        },
      ],
      documentCategories: [
        {
          id: "1",
          label: "Изменение цены",
          slug: generateSlug("Изменение цены"),
        },
        {
          id: "2",
          label: "Буклет",
          slug: generateSlug("Буклет"),
        },
        {
          id: "3",
          label: "Типовой договор",
          slug: generateSlug("Типовой договор"),
        },
        {
          id: "4",
          label: "Новые технологии",
          slug: generateSlug("Новые технологии"),
        },
        {
          id: "5",
          label: "Подарок",
          slug: generateSlug("Подарок"),
        },
        {
          id: "6",
          label: "Техническая документация",
          slug: generateSlug("Техническая документация"),
        },
        {
          id: "7",
          label: "Каталог",
          slug: generateSlug("Каталог"),
        },
        {
          id: "8",
          label: "Сертификаты",
          slug: generateSlug("Сертификаты"),
        },
        {
          id: "9",
          label: "Презентация",
          slug: generateSlug("Презентация"),
        },
      ],
      bulletinsCategories: [
        {
          id: "1",
          label: "Новости",
          slug: generateSlug("Новости"),
        },
        {
          id: "2",
          label: "Буклет",
          slug: generateSlug("Буклет"),
        },
        {
          id: "3",
          label: "Типовой договор",
          slug: generateSlug("Типовой договор"),
        },
        {
          id: "4",
          label: "Новые технологии",
          slug: generateSlug("Новые технологии"),
        },
        {
          id: "5",
          label: "Подарок",
          slug: generateSlug("Подарок"),
        },
      ],
      documents,
      bulletins: [
        {
          id: "0kly69mg6r",
          title: "Информационный буклет",
          createdAt: "2023-01-24T08:23:48.852Z",
          file: { url: "/test.pdf", size: 788021 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "oo6e08txrl",
          title: "Сертификат соответствия",
          createdAt: "2024-09-08T03:38:00.393Z",
          file: { url: "/test.pdf", size: 166824 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "cf8cc3ohss",
          title: "Сертификат соответствия",
          createdAt: "2023-09-18T18:00:14.570Z",
          file: { url: "/test.pdf", size: 725837 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "iekpo8rach",
          title: "Техническая документация",
          createdAt: "2024-04-13T17:58:30.252Z",
          file: { url: "/test.pdf", size: 276138 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "7x3y3th4un",
          title: "Прайс-лист",
          createdAt: "2023-12-20T08:12:15.067Z",
          file: { url: "/test.pdf", size: 466933 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "x16o50k5ze",
          title: "Каталог решений",
          createdAt: "2024-07-18T06:40:33.352Z",
          file: { url: "/test.pdf", size: 840825 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "n5ggp3egen",
          title: "Типовые формулировки контрактов",
          createdAt: "2023-08-07T13:58:53.944Z",
          file: { url: "/test.pdf", size: 723920 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "wxh1syaf6o",
          title: "Сертификат соответствия",
          createdAt: "2023-08-17T13:28:43.555Z",
          file: { url: "/test.pdf", size: 647293 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "rzx13ebyq6",
          title: "Спецификация материалов",
          createdAt: "2023-08-19T17:49:43.225Z",
          file: { url: "/test.pdf", size: 434022 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "dh1jef8eim",
          title: "Типовые формулировки контрактов",
          createdAt: "2024-04-08T22:37:55.700Z",
          file: { url: "/test.pdf", size: 309667 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "7ptrqtdegt",
          title: "Презентация новых технологий",
          createdAt: "2023-06-26T08:21:02.033Z",
          file: { url: "/test.pdf", size: 181824 },
          category: {
            id: "3",
            label: "Типовой договор",
            slug: "tipovoy-dogovor",
          },
        },
        {
          id: "130hjhrpeb",
          title: "Спецификация материалов",
          createdAt: "2023-12-22T01:32:56.945Z",
          file: { url: "/test.pdf", size: 224330 },
          category: {
            id: "1",
            label: "Изменение цены",
            slug: "izmenenie-tseny",
          },
        },
        {
          id: "sjuget1t60",
          title: "Каталог решений",
          createdAt: "2024-06-06T14:56:22.861Z",
          file: { url: "/test.pdf", size: 619752 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "2hz9u1h2id",
          title: "Презентация новых технологий",
          createdAt: "2024-10-15T01:21:35.869Z",
          file: { url: "/test.pdf", size: 433246 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "j1uezio20d",
          title: "Презентация новых технологий",
          createdAt: "2024-02-28T04:32:08.696Z",
          file: { url: "/test.pdf", size: 788690 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "kf0digm0b0",
          title: "Типовые формулировки контрактов",
          createdAt: "2023-02-20T17:21:54.075Z",
          file: { url: "/test.pdf", size: 480858 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "apbcqgdgyv",
          title: "Прайс-лист",
          createdAt: "2025-01-10T05:58:55.634Z",
          file: { url: "/test.pdf", size: 308028 },
          category: {
            id: "1",
            label: "Изменение цены",
            slug: "izmenenie-tseny",
          },
        },
        {
          id: "8wzvi2bq6p",
          title: "Прайс-лист",
          createdAt: "2023-06-08T02:47:50.564Z",
          file: { url: "/test.pdf", size: 308188 },
          category: {
            id: "1",
            label: "Изменение цены",
            slug: "izmenenie-tseny",
          },
        },
        {
          id: "nb8rqj8o5c",
          title: "Типовые формулировки контрактов",
          createdAt: "2023-03-20T16:41:08.293Z",
          file: { url: "/test.pdf", size: 794427 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "feog6isf58",
          title: "Прайс-лист",
          createdAt: "2023-05-19T15:52:22.499Z",
          file: { url: "/test.pdf", size: 151580 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "qepew0s2yx",
          title: "Информационный буклет",
          createdAt: "2023-01-27T00:09:05.871Z",
          file: { url: "/test.pdf", size: 598088 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "s8bawobz7c",
          title: "Прайс-лист",
          createdAt: "2023-01-12T09:51:49.659Z",
          file: { url: "/test.pdf", size: 369263 },
          category: {
            id: "1",
            label: "Изменение цены",
            slug: "izmenenie-tseny",
          },
        },
        {
          id: "8k31fgen5z",
          title: "Информационный буклет",
          createdAt: "2024-08-01T06:47:22.436Z",
          file: { url: "/test.pdf", size: 211168 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "c50dapkbeh",
          title: "Сертификат соответствия",
          createdAt: "2023-12-18T15:28:09.543Z",
          file: { url: "/test.pdf", size: 508052 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "exnvuiqklz",
          title: "Техническая документация",
          createdAt: "2024-05-17T05:26:04.736Z",
          file: { url: "/test.pdf", size: 210744 },
          category: {
            id: "3",
            label: "Типовой договор",
            slug: "tipovoy-dogovor",
          },
        },
        {
          id: "ywfofpgx8a",
          title: "Спецификация материалов",
          createdAt: "2024-01-31T11:40:25.875Z",
          file: { url: "/test.pdf", size: 521180 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "2bgt3b52k0",
          title: "Прайс-лист",
          createdAt: "2024-07-13T06:20:27.664Z",
          file: { url: "/test.pdf", size: 866987 },
          category: {
            id: "3",
            label: "Типовой договор",
            slug: "tipovoy-dogovor",
          },
        },
        {
          id: "nqxemttiax",
          title: "Руководство по монтажу",
          createdAt: "2023-03-12T04:26:16.689Z",
          file: { url: "/test.pdf", size: 875188 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "8vq0eb7m8g",
          title: "Каталог решений",
          createdAt: "2023-12-22T04:31:59.233Z",
          file: { url: "/test.pdf", size: 487510 },
          category: {
            id: "1",
            label: "Изменение цены",
            slug: "izmenenie-tseny",
          },
        },
        {
          id: "fady50elss",
          title: "Сертификат соответствия",
          createdAt: "2023-10-23T15:41:53.017Z",
          file: { url: "/test.pdf", size: 229818 },
          category: {
            id: "3",
            label: "Типовой договор",
            slug: "tipovoy-dogovor",
          },
        },
        {
          id: "idxylxozns",
          title: "Прайс-лист",
          createdAt: "2023-02-19T10:25:39.505Z",
          file: { url: "/test.pdf", size: 890020 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "s1pwayuw2d",
          title: "Техническая документация",
          createdAt: "2023-05-24T03:22:18.272Z",
          file: { url: "/test.pdf", size: 766011 },
          category: {
            id: "1",
            label: "Изменение цены",
            slug: "izmenenie-tseny",
          },
        },
        {
          id: "vbivs4n6hr",
          title: "Прайс-лист",
          createdAt: "2024-07-30T07:06:14.928Z",
          file: { url: "/test.pdf", size: 317469 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "1yp0juhynm",
          title: "Каталог решений",
          createdAt: "2024-08-03T06:33:55.442Z",
          file: { url: "/test.pdf", size: 321774 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "pcevbpm0vs",
          title: "Техническая документация",
          createdAt: "2023-02-23T14:03:02.005Z",
          file: { url: "/test.pdf", size: 243715 },
          category: {
            id: "3",
            label: "Типовой договор",
            slug: "tipovoy-dogovor",
          },
        },
        {
          id: "cp2ubplepi",
          title: "Сертификат соответствия",
          createdAt: "2024-11-30T04:20:20.543Z",
          file: { url: "/test.pdf", size: 468092 },
          category: {
            id: "3",
            label: "Типовой договор",
            slug: "tipovoy-dogovor",
          },
        },
        {
          id: "287n8t6zl9",
          title: "Спецификация материалов",
          createdAt: "2024-05-07T04:04:21.826Z",
          file: { url: "/test.pdf", size: 615667 },
          category: {
            id: "1",
            label: "Изменение цены",
            slug: "izmenenie-tseny",
          },
        },
        {
          id: "vpaei968o3",
          title: "Каталог решений",
          createdAt: "2024-11-04T14:31:30.465Z",
          file: { url: "/test.pdf", size: 850565 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "5gp0r8vdrf",
          title: "Сертификат соответствия",
          createdAt: "2023-08-03T06:28:48.512Z",
          file: { url: "/test.pdf", size: 420556 },
          category: {
            id: "1",
            label: "Изменение цены",
            slug: "izmenenie-tseny",
          },
        },
        {
          id: "110aky5xkp",
          title: "Типовые формулировки контрактов",
          createdAt: "2024-04-01T23:18:39.886Z",
          file: { url: "/test.pdf", size: 169129 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "n1eh9hoj4q",
          title: "Каталог решений",
          createdAt: "2023-12-29T02:19:20.343Z",
          file: { url: "/test.pdf", size: 459137 },
          category: {
            id: "3",
            label: "Типовой договор",
            slug: "tipovoy-dogovor",
          },
        },
        {
          id: "0g0j4n6cz7",
          title: "Каталог решений",
          createdAt: "2024-10-01T06:43:51.211Z",
          file: { url: "/test.pdf", size: 582518 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "lctgqyrd1p",
          title: "Презентация новых технологий",
          createdAt: "2023-09-22T08:55:54.850Z",
          file: { url: "/test.pdf", size: 273568 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "2fdlw176vm",
          title: "Типовые формулировки контрактов",
          createdAt: "2024-10-13T12:49:42.843Z",
          file: { url: "/test.pdf", size: 526298 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "ptjexj3x56",
          title: "Техническая документация",
          createdAt: "2023-09-22T04:07:16.078Z",
          file: { url: "/test.pdf", size: 898231 },
          category: {
            id: "1",
            label: "Изменение цены",
            slug: "izmenenie-tseny",
          },
        },
        {
          id: "repi4gnrty",
          title: "Спецификация материалов",
          createdAt: "2023-05-28T00:04:50.084Z",
          file: { url: "/test.pdf", size: 299855 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "qx2jkxlo7v",
          title: "Типовые формулировки контрактов",
          createdAt: "2023-02-13T23:27:14.043Z",
          file: { url: "/test.pdf", size: 203361 },
          category: {
            id: "3",
            label: "Типовой договор",
            slug: "tipovoy-dogovor",
          },
        },
        {
          id: "82eeywmpzf",
          title: "Информационный буклет",
          createdAt: "2024-08-08T21:56:33.275Z",
          file: { url: "/test.pdf", size: 691408 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "1iwai8lof9",
          title: "Техническая документация",
          createdAt: "2024-09-05T16:46:46.646Z",
          file: { url: "/test.pdf", size: 857750 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "ppvpx6l1nu",
          title: "Техническая документация",
          createdAt: "2024-10-02T16:50:30.111Z",
          file: { url: "/test.pdf", size: 327473 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "kc4lx5pv4q",
          title: "Техническая документация",
          createdAt: "2023-04-06T11:29:22.293Z",
          file: { url: "/test.pdf", size: 416193 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "dv55ll6bxh",
          title: "Презентация новых технологий",
          createdAt: "2024-06-11T02:11:58.769Z",
          file: { url: "/test.pdf", size: 106354 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "r9xetxc8xi",
          title: "Информационный буклет",
          createdAt: "2023-01-12T22:35:31.661Z",
          file: { url: "/test.pdf", size: 209676 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "g4ynztorjj",
          title: "Руководство по монтажу",
          createdAt: "2023-08-06T01:31:09.630Z",
          file: { url: "/test.pdf", size: 311470 },
          category: {
            id: "3",
            label: "Типовой договор",
            slug: "tipovoy-dogovor",
          },
        },
        {
          id: "m2vyncif6x",
          title: "Презентация новых технологий",
          createdAt: "2023-11-08T22:37:24.228Z",
          file: { url: "/test.pdf", size: 365002 },
          category: {
            id: "1",
            label: "Изменение цены",
            slug: "izmenenie-tseny",
          },
        },
        {
          id: "ih04ewqf5d",
          title: "Техническая документация",
          createdAt: "2024-04-27T20:21:39.188Z",
          file: { url: "/test.pdf", size: 883084 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "gl9v0a8iu2",
          title: "Информационный буклет",
          createdAt: "2024-12-17T14:39:27.874Z",
          file: { url: "/test.pdf", size: 232347 },
          category: {
            id: "1",
            label: "Изменение цены",
            slug: "izmenenie-tseny",
          },
        },
        {
          id: "pimvp43hqu",
          title: "Презентация новых технологий",
          createdAt: "2025-01-20T16:41:11.404Z",
          file: { url: "/test.pdf", size: 347179 },
          category: { id: "5", label: "Подарок", slug: "podarok" },
        },
        {
          id: "xmgv1q0i7v",
          title: "Руководство по монтажу",
          createdAt: "2023-02-17T19:25:39.857Z",
          file: { url: "/test.pdf", size: 769733 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "1dhawhdem3",
          title: "Информационный буклет",
          createdAt: "2023-06-21T18:19:41.508Z",
          file: { url: "/test.pdf", size: 109805 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "fhgzpg1jry",
          title: "Презентация новых технологий",
          createdAt: "2023-04-18T14:30:54.429Z",
          file: { url: "/test.pdf", size: 227913 },
          category: {
            id: "1",
            label: "Изменение цены",
            slug: "izmenenie-tseny",
          },
        },
        {
          id: "g45apdzeqt",
          title: "Техническая документация",
          createdAt: "2023-06-02T09:17:44.460Z",
          file: { url: "/test.pdf", size: 606604 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "sera5hun1v",
          title: "Техническая документация",
          createdAt: "2024-05-27T07:01:12.311Z",
          file: { url: "/test.pdf", size: 865196 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "mqoz6yk7qf",
          title: "Каталог решений",
          createdAt: "2024-06-03T01:46:50.191Z",
          file: { url: "/test.pdf", size: 328697 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "5yhbjm0tys",
          title: "Техническая документация",
          createdAt: "2024-05-01T02:13:33.455Z",
          file: { url: "/test.pdf", size: 561260 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "3qow9m5ea5",
          title: "Презентация новых технологий",
          createdAt: "2024-10-02T05:06:01.478Z",
          file: { url: "/test.pdf", size: 371815 },
          category: { id: "2", label: "Буклет", slug: "buklet" },
        },
        {
          id: "wal8rw8pya",
          title: "Спецификация материалов",
          createdAt: "2024-04-16T20:51:27.580Z",
          file: { url: "/test.pdf", size: 279126 },
          category: {
            id: "3",
            label: "Типовой договор",
            slug: "tipovoy-dogovor",
          },
        },
        {
          id: "2f42e3hmf4",
          title: "Информационный буклет",
          createdAt: "2024-04-20T04:10:31.443Z",
          file: { url: "/test.pdf", size: 768069 },
          category: {
            id: "3",
            label: "Типовой договор",
            slug: "tipovoy-dogovor",
          },
        },
        {
          id: "xn154wpqp5",
          title: "Руководство по монтажу",
          createdAt: "2023-02-11T18:25:46.703Z",
          file: { url: "/test.pdf", size: 319673 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
        {
          id: "5cnzk51w6w",
          title: "Спецификация материалов",
          createdAt: "2023-05-25T02:28:14.169Z",
          file: { url: "/test.pdf", size: 876711 },
          category: {
            id: "4",
            label: "Новые технологии",
            slug: "novye-tehnologii",
          },
        },
      ],
      bulletinsReadedByUsers: [],
      employees: [
        {
          id: "1",
          name: "Иванов-Петров Кладиславослав",
        },
        {
          id: "2",
          name: "Овощов-Ягодкин Помидорослав",
        },
        {
          id: "3",
          name: "Бахчёв-Ягодов Арбузослав",
        },
        {
          id: "4",
          name: "Травин Бананослав",
        },
        {
          id: "5",
          name: "Продаванов Менеджерослав",
        },
        {
          id: "6",
          name: "Инженеров Расчётослав",
        },
        {
          id: "7",
          name: "Партнёров Астронослав",
        },
        {
          id: "8",
          name: "Расчётов Инженерослав",
        },
      ],
      tests: [
        {
          id: "1",
          name: "Специалист по монтажу",
        },
        {
          id: "2",
          name: "Специалист по продажам",
        },
        {
          id: "3",
          name: "Инженер-расчетчик",
        },
      ],
      employeeTests: [
        {
          id: "1",
          employeeId: "1",
          testId: "1",
          result: 81,
          threshold: 80,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "2",
          employeeId: "2",
          testId: "2",
          result: 90,
          threshold: 80,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "3",
          employeeId: "3",
          testId: "3",
          result: 79,
          threshold: 80,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "4",
          employeeId: "4",
          testId: "3",
          result: 54,
          threshold: 80,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "5",
          employeeId: "5",
          testId: "2",
          result: 80,
          threshold: 80,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "6",
          employeeId: "6",
          testId: "1",
          result: 95,
          threshold: 80,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "7",
          employeeId: "7",
          testId: "2",
          result: 82,
          threshold: 80,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "8",
          employeeId: "8",
          testId: "1",
          result: 68,
          threshold: 80,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "9",
          employeeId: "1",
          testId: "1",
          result: 95,
          threshold: 80,
          createdAt: "2024-01-01T00:00:00.000Z",
        },
        {
          id: "10",
          employeeId: "2",
          testId: "2",
          result: 82,
          threshold: 80,
          createdAt: "2024-01-01T00:00:00.000Z",
        },
        {
          id: "11",
          employeeId: "8",
          testId: "3",
          result: 70,
          threshold: 80,
          createdAt: "2024-01-01T00:00:00.000Z",
        },
        {
          id: "12",
          employeeId: "1",
          testId: "1",
          result: 12,
          threshold: 80,
          createdAt: new Date().toISOString(),
        },
        {
          id: "13",
          employeeId: "2",
          testId: "2",
          result: 90,
          threshold: 80,
          createdAt: new Date().toISOString(),
        },
      ],
      leadGenerations: [
        {
          id: "vunco6hplk",
          project: {
            id: "biw98ox7bo",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2023-12-10T09:49:53.450Z",
        },
        {
          id: "vunco6hplx",
          project: {
            id: "biw98ox7bo",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2023-10-10T09:49:53.450Z",
        },
        {
          id: "vunco6hpl2",
          project: {
            id: "biw98ox7bo",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2023-11-10T09:49:53.450Z",
        },
        {
          id: "vunco6hpl3",
          project: {
            id: "biw98ox7bo",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2023-11-10T09:49:53.450Z",
        },
        {
          id: "vunco6hpl5",
          project: {
            id: "biw98ox7bo",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2023-03-10T09:49:53.450Z",
        },
        {
          id: "vunco6hpl8",
          project: {
            id: "biw98ox7bo",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2023-03-10T09:49:53.450Z",
        },
        {
          id: "vunco6hpl9",
          project: {
            id: "biw98ox7bo",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2023-05-10T09:49:53.450Z",
        },
        {
          id: "vunco6hpl10",
          project: {
            id: "biw98ox7bo",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2023-05-10T09:49:53.450Z",
        },
        {
          id: "v1nco6hpl10",
          project: {
            id: "biw98ox7bo",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2025-03-10T09:49:53.450Z",
        },
        {
          id: "v5nco6hpl10",
          project: {
            id: "biw98ox7bo",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2025-04-10T09:49:53.450Z",
        },
        {
          id: "vunco6hpl11",
          project: {
            id: "biw98ox7bo",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2023-07-10T09:49:53.450Z",
        },
        {
          id: "vunco6hpl12",
          project: {
            id: "biw98ox7bo",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2023-07-10T09:49:53.450Z",
        },
        {
          id: "3cehv4zf01",
          project: { id: "ni11n0eqk5", name: "Project 6000 Halo Infinite" },
          fixedAt: "2024-11-20T14:04:13.602Z",
        },
        {
          id: "plj2zchw6l",
          project: { id: "4kvzbc1j6c", name: "Project 9000 Final Fantasy XV" },
          fixedAt: "2023-01-26T08:07:21.382Z",
        },
        {
          id: "242p5qbkcl",
          project: { id: "ho8zpxb8pd", name: "Project 8000 Overwatch League" },
          fixedAt: "2023-01-12T20:29:03.294Z",
        },
        {
          id: "1n5fem11gk",
          project: { id: "o6vsq1dlq5", name: "Project 9000 Final Fantasy XV" },
          fixedAt: "2023-12-08T07:48:00.524Z",
        },
        {
          id: "m1e4ql5lsg",
          project: {
            id: "eoecp3hg3p",
            name: "Project 3000 Minecraft Builders",
          },
          fixedAt: "2024-02-02T22:23:51.158Z",
        },
        {
          id: "frzlsdbv63",
          project: { id: "pigwltuv5c", name: "Project 9000 Final Fantasy XV" },
          fixedAt: "2023-03-01T04:40:47.874Z",
        },
        {
          id: "j763yhmwwi",
          project: { id: "imlmgl6met", name: "Project 6000 Halo Infinite" },
          fixedAt: "2024-10-13T08:40:16.276Z",
        },
        {
          id: "c8z2e2rbsc",
          project: { id: "jtnxzoca13", name: "Project 8000 Overwatch League" },
          fixedAt: "2024-09-23T23:22:39.788Z",
        },
        {
          id: "vabljr8u69",
          project: {
            id: "s04k692rc5",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          fixedAt: "2023-12-06T13:10:14.430Z",
        },
        {
          id: "3d026dv7cg",
          project: { id: "yrcmg2dtcw", name: "Project 5000 Legends of Zelda" },
          fixedAt: "2024-09-30T19:59:34.202Z",
        },
        {
          id: "s73donb6n9",
          project: {
            id: "pz7wsc8ogt",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2023-09-08T05:15:23.490Z",
        },
        {
          id: "s03awb42fv",
          project: {
            id: "q54d3modvp",
            name: "Project 4000 Evolution of Pokémon",
          },
          fixedAt: "2023-10-20T00:55:10.846Z",
        },
        {
          id: "bptku7tvmr",
          project: {
            id: "rfkpj0ohyh",
            name: "Project 3000 Minecraft Builders",
          },
          fixedAt: "2024-06-16T21:34:24.410Z",
        },
        {
          id: "tdcu7fvngz",
          project: {
            id: "fkr7orkzsu",
            name: "Project 7000 Dark Souls Remastered",
          },
          fixedAt: "2025-02-01T20:35:48.064Z",
        },
        {
          id: "xvzq11b23t",
          project: { id: "hys7ni4y9v", name: "Project 6000 Halo Infinite" },
          fixedAt: "2024-10-06T10:14:53.527Z",
        },
        {
          id: "dmhaz6a4e4",
          project: { id: "1yicm2yya5", name: "Project 6000 Halo Infinite" },
          fixedAt: "2024-08-28T01:36:34.760Z",
        },
        {
          id: "efbbqa6a6r",
          project: {
            id: "ouzuusvqbj",
            name: "Project 4000 Evolution of Pokémon",
          },
          fixedAt: "2023-03-05T02:31:52.742Z",
        },
        {
          id: "tsa0ao4kv",
          project: {
            id: "qn7mlp44p1",
            name: "Project 7000 Dark Souls Remastered",
          },
          fixedAt: "2024-07-25T09:27:56.549Z",
        },
        {
          id: "gnp52kk5aj",
          project: {
            id: "jgn7emzq4t",
            name: "Project 3000 Minecraft Builders",
          },
          fixedAt: "2024-11-08T05:05:39.423Z",
        },
        {
          id: "wxfx03c069",
          project: { id: "kap2ly2pv2", name: "Project 5000 Legends of Zelda" },
          fixedAt: "2023-02-08T14:24:37.842Z",
        },
        {
          id: "sy7u6ms3va",
          project: {
            id: "roiruj3x9s",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          fixedAt: "2024-12-25T07:23:06.993Z",
        },
        {
          id: "kf3v88z5f8",
          project: {
            id: "jhanowtqru",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          fixedAt: "2023-08-08T22:21:07.849Z",
        },
        {
          id: "fb7gjsa1kw",
          project: {
            id: "p0xnucqj85",
            name: "Project 4000 Evolution of Pokémon",
          },
          fixedAt: "2023-09-05T10:09:48.577Z",
        },
        {
          id: "1derfmwiec",
          project: {
            id: "q0eijjy0rm",
            name: "Project 7000 Dark Souls Remastered",
          },
          fixedAt: "2024-12-27T22:59:33.639Z",
        },
        {
          id: "bkpsr1h6hf",
          project: {
            id: "nzk0p80opy",
            name: "Project 4000 Evolution of Pokémon",
          },
          fixedAt: "2024-04-25T12:54:09.820Z",
        },
        {
          id: "gmrd4smllj",
          project: { id: "02r8euj441", name: "Project 6000 Halo Infinite" },
          fixedAt: "2023-01-20T06:51:27.566Z",
        },
        {
          id: "53n0693ai7",
          project: {
            id: "ishvduzh7b",
            name: "Project 7000 Dark Souls Remastered",
          },
          fixedAt: "2024-06-30T04:02:00.776Z",
        },
        {
          id: "k8oyv56hrr",
          project: {
            id: "3e1rmrsmmr",
            name: "Project 3000 Minecraft Builders",
          },
          fixedAt: "2023-06-04T19:28:27.422Z",
        },
        {
          id: "7xo7exhcjs",
          project: {
            id: "6mjawjscez",
            name: "Project 7000 Dark Souls Remastered",
          },
          fixedAt: "2024-05-11T20:01:29.953Z",
        },
        {
          id: "aymj3algy6",
          project: {
            id: "hhundtv1wz",
            name: "Project 7000 Dark Souls Remastered",
          },
          fixedAt: "2023-08-30T19:17:11.140Z",
        },
        {
          id: "k021zybd3y",
          project: { id: "ju9rjjqs9q", name: "Project 8000 Overwatch League" },
          fixedAt: "2025-01-01T09:22:31.360Z",
        },
        {
          id: "jhaambrxwk",
          project: {
            id: "5f5zj501w0",
            name: "Project 3000 Minecraft Builders",
          },
          fixedAt: "2025-01-10T09:16:27.911Z",
        },
        {
          id: "b0i9kvbswc",
          project: {
            id: "o9tqwsidng",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          fixedAt: "2023-09-09T19:19:21.517Z",
        },
        {
          id: "ojvhs6lwp3",
          project: {
            id: "dw1u9fqqln",
            name: "Project 4000 Evolution of Pokémon",
          },
          fixedAt: "2024-05-31T10:35:07.963Z",
        },
        {
          id: "qbxjhaj531",
          project: { id: "84nt7xq50y", name: "Project 9000 Final Fantasy XV" },
          fixedAt: "2024-03-22T13:43:32.006Z",
        },
        {
          id: "ozd2kqvny9",
          project: {
            id: "txeeuvamjg",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          fixedAt: "2023-12-20T11:25:08.103Z",
        },
        {
          id: "vns4xetl7c",
          project: { id: "4i48418n7k", name: "Project 8000 Overwatch League" },
          fixedAt: "2023-06-22T19:49:32.758Z",
        },
        {
          id: "gpgqvrd7w5",
          project: {
            id: "9ww0ojxw7w",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          fixedAt: "2024-10-05T13:35:44.179Z",
        },
        {
          id: "5emv3vfw6t",
          project: {
            id: "hdk13q4m2s",
            name: "Project 4000 Evolution of Pokémon",
          },
          fixedAt: "2023-02-17T00:30:57.542Z",
        },
        {
          id: "wsi145gf4e",
          project: { id: "di391bxnnf", name: "Project 6000 Halo Infinite" },
          fixedAt: "2024-11-03T18:28:42.310Z",
        },
        {
          id: "iqslj8lrpi",
          project: {
            id: "r05gy32td6",
            name: "Project 7000 Dark Souls Remastered",
          },
          fixedAt: "2023-08-16T08:02:07.949Z",
        },
        {
          id: "qa1w511qfm",
          project: {
            id: "6ygmgir561",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          fixedAt: "2024-12-15T09:57:20.593Z",
        },
        {
          id: "akbym2m1rt",
          project: { id: "qoiq8s4o99", name: "Project 5000 Legends of Zelda" },
          fixedAt: "2023-04-21T20:14:04.112Z",
        },
        {
          id: "ler8syt0do",
          project: {
            id: "fydxcvw7kv",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          fixedAt: "2024-05-14T00:52:54.055Z",
        },
        {
          id: "6fqt8y5e8y",
          project: {
            id: "8mo9gkzn3c",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          fixedAt: "2024-12-30T01:09:47.721Z",
        },
        {
          id: "tht23za1sz",
          project: { id: "wbax044f69", name: "Project 8000 Overwatch League" },
          fixedAt: "2024-03-12T16:46:58.668Z",
        },
        {
          id: "u6o6lk0nqz",
          project: { id: "b0dbbphw0v", name: "Project 6000 Halo Infinite" },
          fixedAt: "2024-05-13T23:32:18.983Z",
        },
        {
          id: "e0q9u4pskm",
          project: {
            id: "w6j6aemnab",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          fixedAt: "2023-04-09T09:53:10.509Z",
        },
        {
          id: "uo0g6duv4s",
          project: {
            id: "o4wsz4zf4q",
            name: "Project 2000 Star Wars Battlefront",
          },
          fixedAt: "2023-06-18T16:21:56.719Z",
        },
      ],
      sales: [
        {
          id: "c15vlqkjrb",
          project: { id: "hksdi8bz7h", name: "Project 5000 Legends of Zelda" },
          createdAt: "2024-05-15T04:50:23.874Z",
          sum: 159052,
        },
        {
          id: "wijehkc3ou",
          project: {
            id: "pz3wdbehvo",
            name: "Project 2000 Star Wars Battlefront",
          },
          createdAt: "2024-01-01T07:42:46.235Z",
          sum: 333619,
        },
        {
          id: "foslvzv6lk",
          project: {
            id: "uo4gr5twye",
            name: "Project 4000 Evolution of Pokémon",
          },
          createdAt: "2023-08-20T22:10:52.814Z",
          sum: 295262,
        },
        {
          id: "zne04idkea",
          project: { id: "7is75hd3bh", name: "Project 6000 Halo Infinite" },
          createdAt: "2024-10-26T10:26:50.547Z",
          sum: 194620,
        },
        {
          id: "w3ib1uhbod",
          project: { id: "k4u2s48j4b", name: "Project 9000 Final Fantasy XV" },
          createdAt: "2024-02-08T17:43:14.711Z",
          sum: 326747,
        },
        {
          id: "priu45d6lw",
          project: { id: "1ncizi5prb", name: "Project 8000 Overwatch League" },
          createdAt: "2024-10-29T17:54:32.883Z",
          sum: 277590,
        },
        {
          id: "hjhw1pmp3p",
          project: { id: "4llbhigcjx", name: "Project 5000 Legends of Zelda" },
          createdAt: "2024-02-04T08:13:19.263Z",
          sum: 413781,
        },
        {
          id: "wfwmhxmjmb",
          project: {
            id: "859phypwci",
            name: "Project 2000 Star Wars Battlefront",
          },
          createdAt: "2023-12-15T00:47:22.380Z",
          sum: 451422,
        },
        {
          id: "okq1vgygq1",
          project: { id: "72wlas8mkd", name: "Project 8000 Overwatch League" },
          createdAt: "2023-03-30T12:53:57.100Z",
          sum: 411154,
        },
        {
          id: "bnezkvwhgs",
          project: {
            id: "w7eofe0wgo",
            name: "Project 4000 Evolution of Pokémon",
          },
          createdAt: "2023-08-28T04:54:05.414Z",
          sum: 284496,
        },
        {
          id: "gd8uz9sb9d",
          project: {
            id: "dgysd1isip",
            name: "Project 3000 Minecraft Builders",
          },
          createdAt: "2024-07-16T08:59:10.874Z",
          sum: 127317,
        },
        {
          id: "cxb2ybqybr",
          project: {
            id: "3n231ayvdi",
            name: "Project 2000 Star Wars Battlefront",
          },
          createdAt: "2024-03-23T11:57:06.460Z",
          sum: 476125,
        },
        {
          id: "ine2635nwb",
          project: {
            id: "88tq8czxgq",
            name: "Project 3000 Minecraft Builders",
          },
          createdAt: "2024-04-09T23:48:03.670Z",
          sum: 383382,
        },
        {
          id: "5bwyxl3wus",
          project: {
            id: "vq495kvcc9",
            name: "Project 3000 Minecraft Builders",
          },
          createdAt: "2024-04-12T23:13:16.971Z",
          sum: 419532,
        },
        {
          id: "1yj9yztxui",
          project: {
            id: "luevzrmq6z",
            name: "Project 3000 Minecraft Builders",
          },
          createdAt: "2023-11-22T05:54:22.532Z",
          sum: 237148,
        },
        {
          id: "1q8ombfj8f",
          project: { id: "rcihm0tu0f", name: "Project 6000 Halo Infinite" },
          createdAt: "2024-12-28T11:15:47.956Z",
          sum: 309474,
        },
        {
          id: "o0wnm42nt9",
          project: {
            id: "tnhozbjrqe",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          createdAt: "2023-07-23T08:12:17.116Z",
          sum: 283849,
        },
        {
          id: "q19ucktjq6",
          project: {
            id: "sttl0j4dc0",
            name: "Project 7000 Dark Souls Remastered",
          },
          createdAt: "2023-10-18T20:25:18.197Z",
          sum: 414570,
        },
        {
          id: "o7emsxvw2t",
          project: { id: "w31ag6ujgb", name: "Project 8000 Overwatch League" },
          createdAt: "2023-02-04T06:13:35.792Z",
          sum: 375353,
        },
        {
          id: "atv2nzogx8",
          project: { id: "7eb88e8d2t", name: "Project 8000 Overwatch League" },
          createdAt: "2024-05-09T14:06:55.363Z",
          sum: 343863,
        },
        {
          id: "dn6ouuwklp",
          project: {
            id: "0g6aubax34",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          createdAt: "2025-02-05T17:30:59.538Z",
          sum: 347217,
        },
        {
          id: "dswd51n3m2",
          project: {
            id: "o7vepbjh0f",
            name: "Project 4000 Evolution of Pokémon",
          },
          createdAt: "2023-09-05T04:20:22.673Z",
          sum: 318291,
        },
        {
          id: "wzdqnyzqpk",
          project: { id: "nfsey2xub3", name: "Project 9000 Final Fantasy XV" },
          createdAt: "2023-11-11T21:08:38.255Z",
          sum: 269104,
        },
        {
          id: "lkjsm93vnp",
          project: {
            id: "he9pjq1rit",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          createdAt: "2024-02-14T09:35:40.261Z",
          sum: 467809,
        },
        {
          id: "5q48jlbeva",
          project: { id: "820cwteodp", name: "Project 5000 Legends of Zelda" },
          createdAt: "2024-05-25T08:37:37.294Z",
          sum: 322564,
        },
        {
          id: "8xg3qqz6e7",
          project: { id: "9o84apkqte", name: "Project 9000 Final Fantasy XV" },
          createdAt: "2023-04-23T12:09:58.489Z",
          sum: 484333,
        },
        {
          id: "a3udyiixkb",
          project: {
            id: "4d7dbqd33a",
            name: "Project 7000 Dark Souls Remastered",
          },
          createdAt: "2024-09-13T06:10:14.653Z",
          sum: 423392,
        },
        {
          id: "wf1x38ra1v",
          project: {
            id: "bk3c3ylxrb",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          createdAt: "2025-01-23T06:29:13.286Z",
          sum: 168718,
        },
        {
          id: "ba68meeiob",
          project: { id: "syfhhpqhjs", name: "Project 9000 Final Fantasy XV" },
          createdAt: "2024-08-31T17:29:11.704Z",
          sum: 383170,
        },
        {
          id: "ehjorzkwtd",
          project: { id: "fshvpq80qv", name: "Project 5000 Legends of Zelda" },
          createdAt: "2024-05-11T04:08:40.156Z",
          sum: 392036,
        },
        {
          id: "l4luc97cv8",
          project: { id: "pwty29htcg", name: "Project 6000 Halo Infinite" },
          createdAt: "2024-05-29T02:36:01.340Z",
          sum: 123614,
        },
        {
          id: "zmlxall2dd",
          project: { id: "h2bjh86bn6", name: "Project 9000 Final Fantasy XV" },
          createdAt: "2025-02-08T11:02:00.729Z",
          sum: 121616,
        },
        {
          id: "7r72274o84",
          project: { id: "fp8bhbcyed", name: "Project 5000 Legends of Zelda" },
          createdAt: "2024-10-24T09:15:21.323Z",
          sum: 322899,
        },
        {
          id: "8tqabc4bk4",
          project: {
            id: "71i5gf9ny5",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          createdAt: "2024-03-04T11:55:36.317Z",
          sum: 481909,
        },
        {
          id: "sgke6fkg3s",
          project: {
            id: "95mvc45yfi",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          createdAt: "2023-10-28T08:07:43.067Z",
          sum: 233180,
        },
        {
          id: "xgs1tu44zl",
          project: { id: "hjc7llh6ip", name: "Project 5000 Legends of Zelda" },
          createdAt: "2024-01-24T09:30:27.561Z",
          sum: 111630,
        },
        {
          id: "sj8uaiiizc",
          project: {
            id: "ktokava4o4",
            name: "Project 3000 Minecraft Builders",
          },
          createdAt: "2023-06-15T00:01:39.433Z",
          sum: 317729,
        },
        {
          id: "0o02mozzag",
          project: { id: "qygbrzazrv", name: "Project 5000 Legends of Zelda" },
          createdAt: "2024-04-20T05:48:59.164Z",
          sum: 291390,
        },
        {
          id: "7diwnyneoj",
          project: {
            id: "lnlwqt67xz",
            name: "Project 7000 Dark Souls Remastered",
          },
          createdAt: "2024-10-27T00:16:51.058Z",
          sum: 169669,
        },
        {
          id: "7gec35o0z6",
          project: { id: "jhxsyj41f", name: "Project 8000 Overwatch League" },
          createdAt: "2024-04-26T07:13:48.862Z",
          sum: 182898,
        },
        {
          id: "00hbn0pru8",
          project: {
            id: "01n4n4mtcu",
            name: "Project 4000 Evolution of Pokémon",
          },
          createdAt: "2023-05-22T08:00:46.689Z",
          sum: 494221,
        },
        {
          id: "uuw91b5cqc",
          project: {
            id: "rwe14cuefc",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          createdAt: "2023-05-31T02:23:22.144Z",
          sum: 448881,
        },
        {
          id: "3qrd6af2h0",
          project: {
            id: "12udqbn8rb",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          createdAt: "2024-10-22T22:04:49.708Z",
          sum: 165091,
        },
        {
          id: "k21cb7swv1",
          project: { id: "r1izb9zljh", name: "Project 6000 Halo Infinite" },
          createdAt: "2023-12-07T00:06:43.990Z",
          sum: 260599,
        },
        {
          id: "kdqy9gm0ko",
          project: {
            id: "q076xj3txf",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          createdAt: "2023-05-18T21:38:19.296Z",
          sum: 213234,
        },
        {
          id: "lb8vhv61nd",
          project: {
            id: "wxxmcsdx6d",
            name: "Project 7000 Dark Souls Remastered",
          },
          createdAt: "2023-09-28T23:47:22.569Z",
          sum: 165046,
        },
        {
          id: "v94jyduvy3",
          project: { id: "e4tzw2npbv", name: "Project 8000 Overwatch League" },
          createdAt: "2023-11-01T20:03:35.057Z",
          sum: 133386,
        },
        {
          id: "ja2iqngk9q",
          project: { id: "wjybz2mcsa", name: "Project 8000 Overwatch League" },
          createdAt: "2023-01-24T10:28:37.788Z",
          sum: 257178,
        },
        {
          id: "7swoodgbaq",
          project: {
            id: "ety7qi7eth",
            name: "Project 2000 Star Wars Battlefront",
          },
          createdAt: "2024-06-17T01:33:11.273Z",
          sum: 175796,
        },
        {
          id: "nl42mbydhj",
          project: { id: "8tyqiee47s", name: "Project 8000 Overwatch League" },
          createdAt: "2024-07-01T07:54:50.381Z",
          sum: 491524,
        },
      ],
      bookings: [
        {
          id: "uo079g4wvb",
          project: { id: "7axw6zj4tt", name: "Project 9000 Final Fantasy XV" },
          createdAt: "2024-07-10T09:58:16.420Z",
          sum: 329446,
        },
        {
          id: "1vgtgc2pkz",
          project: {
            id: "9thyhmv70x",
            name: "Project 2000 Star Wars Battlefront",
          },
          createdAt: "2024-05-22T11:35:03.879Z",
          sum: 433244,
        },
        {
          id: "fuqj9mskod",
          project: {
            id: "450tz4b4t0",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          createdAt: "2024-09-02T00:06:04.169Z",
          sum: 181914,
        },
        {
          id: "mkuw8nvopp",
          project: {
            id: "as828w3d00",
            name: "Project 7000 Dark Souls Remastered",
          },
          createdAt: "2023-08-09T04:02:48.318Z",
          sum: 194984,
        },
        {
          id: "7odoup7luk",
          project: { id: "gel3kq1epb", name: "Project 9000 Final Fantasy XV" },
          createdAt: "2025-02-03T05:42:19.026Z",
          sum: 207364,
        },
        {
          id: "8jty9zyjrx",
          project: { id: "9c2jaeo4qa", name: "Project 5000 Legends of Zelda" },
          createdAt: "2024-12-10T12:57:29.456Z",
          sum: 236180,
        },
        {
          id: "47vej5l5lm",
          project: { id: "605gfhjr5c", name: "Project 6000 Halo Infinite" },
          createdAt: "2023-06-16T03:46:12.242Z",
          sum: 105564,
        },
        {
          id: "n5ngoqge5m",
          project: { id: "zyqe7tvlmz", name: "Project 6000 Halo Infinite" },
          createdAt: "2024-11-02T09:51:14.790Z",
          sum: 315666,
        },
        {
          id: "qa3gptltgu",
          project: { id: "53o2w1njsp", name: "Project 8000 Overwatch League" },
          createdAt: "2023-03-05T22:35:25.426Z",
          sum: 495247,
        },
        {
          id: "1kgvpwv1a7",
          project: { id: "u1awsqgrhl", name: "Project 8000 Overwatch League" },
          createdAt: "2023-06-12T21:37:03.439Z",
          sum: 446386,
        },
        {
          id: "utf8wxuab5",
          project: {
            id: "rxjwlfmves",
            name: "Project 3000 Minecraft Builders",
          },
          createdAt: "2023-10-14T02:56:01.014Z",
          sum: 130742,
        },
        {
          id: "4v15j960mq",
          project: {
            id: "jkcnbd6y7z",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          createdAt: "2024-05-05T13:35:03.372Z",
          sum: 372368,
        },
        {
          id: "h0e27e8eow",
          project: {
            id: "zk5qfimirc",
            name: "Project 3000 Minecraft Builders",
          },
          createdAt: "2024-07-18T16:22:20.401Z",
          sum: 492770,
        },
        {
          id: "mbjzjmdpne",
          project: {
            id: "gli379m6x2",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          createdAt: "2024-09-01T04:07:33.349Z",
          sum: 412790,
        },
        {
          id: "yx54e31zdk",
          project: {
            id: "hvmo9v4wrq",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          createdAt: "2023-11-19T18:43:58.551Z",
          sum: 437698,
        },
        {
          id: "496og9q29k",
          project: { id: "ein4hjgghr", name: "Project 9000 Final Fantasy XV" },
          createdAt: "2024-07-05T17:42:19.227Z",
          sum: 276218,
        },
        {
          id: "g8xaqobm4w",
          project: { id: "84fbaiq8vj", name: "Project 8000 Overwatch League" },
          createdAt: "2024-10-25T10:02:19.510Z",
          sum: 402297,
        },
        {
          id: "htrayjo11j",
          project: { id: "tc4xgzxw6k", name: "Project 8000 Overwatch League" },
          createdAt: "2024-11-06T03:39:12.810Z",
          sum: 165374,
        },
        {
          id: "5iba8y7vt8",
          project: { id: "hm98eftmbc", name: "Project 8000 Overwatch League" },
          createdAt: "2023-12-18T23:18:06.132Z",
          sum: 458154,
        },
        {
          id: "q5uwrzthc1",
          project: { id: "i50w4b3sd4", name: "Project 6000 Halo Infinite" },
          createdAt: "2023-09-30T17:15:27.271Z",
          sum: 453326,
        },
        {
          id: "4tk07juhpx",
          project: { id: "bgnli5hmod", name: "Project 5000 Legends of Zelda" },
          createdAt: "2024-01-17T21:27:02.236Z",
          sum: 289407,
        },
        {
          id: "bgfi4kacjz",
          project: { id: "5w39tjif04", name: "Project 9000 Final Fantasy XV" },
          createdAt: "2024-12-27T21:17:30.297Z",
          sum: 186041,
        },
        {
          id: "8qk3djk7kk",
          project: {
            id: "uo0aiwcpqf",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          createdAt: "2024-01-01T02:10:34.613Z",
          sum: 133931,
        },
        {
          id: "fkt15p49u3",
          project: {
            id: "g7hrpre7q6",
            name: "Project 7000 Dark Souls Remastered",
          },
          createdAt: "2024-10-09T04:29:12.664Z",
          sum: 341305,
        },
        {
          id: "ljjce24as2",
          project: {
            id: "vh2nf1zoh5",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          createdAt: "2023-03-11T07:19:15.485Z",
          sum: 356012,
        },
        {
          id: "cc7hpcgqq7",
          project: {
            id: "0n6waz9bpv",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          createdAt: "2024-02-21T17:24:12.315Z",
          sum: 416030,
        },
        {
          id: "jsmof73lj2",
          project: { id: "hd7mxsmx5n", name: "Project 6000 Halo Infinite" },
          createdAt: "2024-10-11T21:47:00.119Z",
          sum: 115234,
        },
        {
          id: "68g09n0ylr",
          project: {
            id: "73aarzuj5h",
            name: "Project 4000 Evolution of Pokémon",
          },
          createdAt: "2024-02-22T21:42:59.440Z",
          sum: 296293,
        },
        {
          id: "jz63x7k3vw",
          project: {
            id: "w3e6hnoq8x",
            name: "Project 2000 Star Wars Battlefront",
          },
          createdAt: "2023-12-29T22:49:01.650Z",
          sum: 402550,
        },
        {
          id: "gdf8izdoxl",
          project: { id: "a5fg5mt5pw", name: "Project 6000 Halo Infinite" },
          createdAt: "2023-05-06T14:11:38.221Z",
          sum: 329478,
        },
        {
          id: "4lrl84nv19",
          project: {
            id: "ac4tjzx4zg",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          createdAt: "2023-07-03T02:19:38.201Z",
          sum: 415058,
        },
        {
          id: "0dn0xarajp",
          project: { id: "wph8dqsh99", name: "Project 8000 Overwatch League" },
          createdAt: "2024-09-05T02:50:08.929Z",
          sum: 404205,
        },
        {
          id: "g48mn7jjfq",
          project: {
            id: "3sbqszpo5k",
            name: "Project 10000 Assassin's Creed Valhalla",
          },
          createdAt: "2023-11-21T14:53:43.067Z",
          sum: 437589,
        },
        {
          id: "6f6v9e11jf",
          project: {
            id: "9cu1ax8kib",
            name: "Project 4000 Evolution of Pokémon",
          },
          createdAt: "2024-12-04T08:26:26.090Z",
          sum: 496952,
        },
        {
          id: "9yrd2vyye5",
          project: { id: "0l6e3q3xj6", name: "Project 6000 Halo Infinite" },
          createdAt: "2023-03-09T11:24:15.303Z",
          sum: 455436,
        },
        {
          id: "lndx4zm26r",
          project: {
            id: "pd9j3u8mxo",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          createdAt: "2023-11-18T09:20:04.577Z",
          sum: 206376,
        },
        {
          id: "zv35zq2v4a",
          project: {
            id: "usmh6mrner",
            name: "Project 7000 Dark Souls Remastered",
          },
          createdAt: "2024-07-19T14:59:18.961Z",
          sum: 307488,
        },
        {
          id: "oxt01u4pny",
          project: { id: "rzpme1xsne", name: "Project 6000 Halo Infinite" },
          createdAt: "2024-02-11T10:40:58.906Z",
          sum: 228471,
        },
        {
          id: "pinrvg4q94",
          project: {
            id: "65o46ij35p",
            name: "Project 3000 Minecraft Builders",
          },
          createdAt: "2023-07-24T14:29:45.319Z",
          sum: 100242,
        },
        {
          id: "nk014khj48",
          project: { id: "riobdk3lvm", name: "Project 9000 Final Fantasy XV" },
          createdAt: "2023-10-31T12:56:32.236Z",
          sum: 209892,
        },
        {
          id: "qvs95ojdku",
          project: {
            id: "4xnafx465a",
            name: "Project 1500 Warhammer 40 000 gold throne",
          },
          createdAt: "2024-09-12T19:56:36.503Z",
          sum: 446103,
        },
        {
          id: "15tncw3snl",
          project: {
            id: "r4p12vdoym",
            name: "Project 2000 Star Wars Battlefront",
          },
          createdAt: "2024-03-08T18:43:32.948Z",
          sum: 328462,
        },
        {
          id: "2c6lnrt3pn",
          project: {
            id: "209fjcho1x",
            name: "Project 4000 Evolution of Pokémon",
          },
          createdAt: "2024-09-27T00:46:51.168Z",
          sum: 191923,
        },
        {
          id: "75uxo9qpez",
          project: {
            id: "ofgm29sbza",
            name: "Project 7000 Dark Souls Remastered",
          },
          createdAt: "2023-08-06T11:21:15.416Z",
          sum: 247120,
        },
        {
          id: "orqq7ss0nl",
          project: {
            id: "kwt5arnemg",
            name: "Project 3000 Minecraft Builders",
          },
          createdAt: "2024-12-13T22:28:45.774Z",
          sum: 101339,
        },
        {
          id: "5occ1xuats",
          project: { id: "1zr7pufk1k", name: "Project 5000 Legends of Zelda" },
          createdAt: "2023-10-26T05:05:25.817Z",
          sum: 297311,
        },
        {
          id: "d269iodfu5",
          project: {
            id: "2b6pu3hx6w",
            name: "Project 7000 Dark Souls Remastered",
          },
          createdAt: "2023-09-20T02:12:15.426Z",
          sum: 478554,
        },
        {
          id: "m5927mxc3x",
          project: {
            id: "8bzzdtg9f5",
            name: "Project 7000 Dark Souls Remastered",
          },
          createdAt: "2023-07-10T13:22:52.097Z",
          sum: 333967,
        },
        {
          id: "7vwmi92stl",
          project: {
            id: "cy40ptw4th",
            name: "Project 4000 Evolution of Pokémon",
          },
          createdAt: "2024-11-19T21:37:08.894Z",
          sum: 285679,
        },
        {
          id: "fi5i0tttgd",
          project: { id: "7h24q6f00x", name: "Project 6000 Halo Infinite" },
          createdAt: "2023-03-30T00:23:41.658Z",
          sum: 137611,
        },
      ],
      academySections: [
        {
          id: "1",
          title: "Процесс продаж",
          url: "/academy/sales",
          // bgImg: "/background-image-1.webp",
          icon: `
            <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.1499 38.708V43.0467C27.1499 46.7227 23.4971 49.6935 18.9997 49.6935C14.5022 49.6935 10.8266 46.7227 10.8266 43.0467V38.708C10.8266 42.3841 14.4794 44.9915 18.9997 44.9915C23.4971 44.9915 27.1499 42.3627 27.1499 38.708Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <path
          d="M27.1462 32.83C27.1462 33.8986 26.8266 34.8817 26.2787 35.7366C24.9318 37.8097 22.1693 39.1135 18.9732 39.1135C15.777 39.1135 13.0146 37.7884 11.6677 35.7366C11.1198 34.8817 10.8003 33.8986 10.8003 32.83C10.8003 30.992 11.7134 29.3463 13.1745 28.1494C14.6584 26.9312 16.6902 26.2046 18.9503 26.2046C21.2105 26.2046 23.2424 26.9526 24.7263 28.1494C26.2331 29.3249 27.1462 30.992 27.1462 32.83Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M27.1499 32.8299V38.7073C27.1499 42.3834 23.4971 44.9908 18.9997 44.9908C14.5022 44.9908 10.8266 42.362 10.8266 38.7073V32.8299C10.8266 29.1538 14.4794 26.1831 18.9997 26.1831C21.2598 26.1831 23.2917 26.9311 24.7756 28.1279C26.2367 29.3248 27.1499 30.9919 27.1499 32.8299Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M52.8296 26.1189V30.5217C52.8296 31.6972 51.8251 32.6589 50.5467 32.7016H46.072C43.6064 32.7016 41.3463 31.0132 41.1409 28.705C41.0039 27.3585 41.5517 26.0975 42.5106 25.2213C43.3553 24.4091 44.5196 23.939 45.7981 23.939H50.5467C51.8251 23.9817 52.8296 24.9434 52.8296 26.1189Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.17032 25.1145V20.84C7.17032 15.0267 10.9144 10.966 16.7359 10.282C17.3295 10.1965 17.9459 10.1538 18.5851 10.1538H39.1318C39.7254 10.1538 40.2961 10.1752 40.844 10.2606C46.7341 10.9018 50.5466 14.984 50.5466 20.84V23.9391H45.798C44.5196 23.9391 43.3553 24.4092 42.5106 25.2213C41.5517 26.0976 41.0039 27.3586 41.1408 28.7051C41.3463 31.0133 43.6064 32.7017 46.072 32.7017H50.5466V35.8007C50.5466 42.2125 45.9807 46.4869 39.1318 46.4869H33.4244"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
          `,
          content: [],
        },
        {
          id: "2",
          title: "Подготовка к переговорам",
          description:
            "В Astron мы в качестве Технического Задания используем так называемую карту проекта. Применяется для обработки входящих запросов.",
          bgImg: "/background-image-2.webp",
          icon: `<svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.735 40.3303L44.5629 47.0389C44.7752 48.8009 42.8858 50.0322 41.3784 49.1194L32.4831 43.8331C31.5065 43.8331 30.5512 43.7695 29.6171 43.6421C31.1881 41.7951 32.1222 39.4597 32.1222 36.9334C32.1222 30.9041 26.8996 26.0213 20.4457 26.0213C17.983 26.0213 15.7114 26.7218 13.822 27.9532C13.7583 27.4224 13.737 26.8916 13.737 26.3397C13.737 16.68 22.1229 8.84619 32.4831 8.84619C42.8433 8.84619 51.2291 16.68 51.2291 26.3397C51.2291 32.0717 48.2782 37.1458 43.735 40.3303Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M32.1222 36.9333C32.1222 39.4597 31.1881 41.7951 29.6171 43.6421C27.5153 46.1897 24.1822 47.8243 20.4457 47.8243L14.9047 51.1149C13.9706 51.6881 12.7817 50.9027 12.9091 49.8199L13.4398 45.6377C10.595 43.6633 8.76923 40.5 8.76923 36.9333C8.76923 33.1969 10.7649 29.9063 13.822 27.9531C15.7114 26.7218 17.983 26.0212 20.4457 26.0212C26.8996 26.0212 32.1222 30.904 32.1222 36.9333Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>`,
          content: [
            {
              type: "section",
              title: "Чек-лист",

              text: "<p>Чек-лист подготовки к переговорам. Это документ, в котором перечислены ключевые цели конкретной встречи, возможные возражения, с которыми могут столкнуться участники. Чек-лист очень хорошо помогает и в составлении протокола проведенной встречи.</p>",
              media: {
                type: "image",
                src: "/academy-conversations-1.webp",
                alt: "Чек-лист подготовки к переговорам",
              },
            },
            {
              type: "section",
              title: "Карта переговоров",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Оценка качества",
              documents: Array.from(
                { length: 4 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "3",
          title: "Конъюнктурный анализ",
          description:
            "В Astron мы в качестве Технического Задания используем так называемую карту проекта. Применяется для обработки входящих запросов. ",
          bgImg: "/background-image-3.webp",
          icon: `
            <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.6308 51.2306H36.3692C46.9846 51.2306 51.2308 46.9844 51.2308 36.369V23.6306C51.2308 13.0152 46.9846 8.76904 36.3692 8.76904H23.6308C13.0154 8.76904 8.76924 13.0152 8.76924 23.6306V36.369C8.76924 46.9844 13.0154 51.2306 23.6308 51.2306Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.83295 22.5688H51.2308"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.83295 37.4307H51.2308"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.5905 51.2094V8.79028"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M37.452 51.2094V8.79028"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
          `,
          content: [
            {
              type: "section",
              title: "Примеры ТЗ для тендеров",

              documents: Array.from(
                { length: 2 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Сравнение технологий",

              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Сравнение с КП конкурентов",
              documents: Array.from(
                { length: 7 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "4",
          title: "Оформление коммерческого предложения",
          description:
            "В Astron мы в качестве Технического Задания используем так называемую карту проекта. Применяется для обработки входящих запросов. ",
          bgImg: "/background-image-4.webp",
          icon: `
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path
            d="M50.0308 18.9229V41.0767C50.0308 47.7229 46.7077 52.1536 38.9538 52.1536H21.2308C13.4769 52.1536 10.1538 47.7229 10.1538 41.0767V18.9229C10.1538 12.2767 13.4769 7.84595 21.2308 7.84595H38.9538C46.7077 7.84595 50.0308 12.2767 50.0308 18.9229Z"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M35.6308 13.3843V17.815C35.6308 20.252 37.6246 22.2458 40.0616 22.2458H44.4923"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.2307 32.2148H30.0923"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.2307 41.0767H38.9538"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
          `,
          content: [
            {
              type: "section",
              title: "Бланки коммерческих предложений",

              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Формирование графика работ",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Калькулятор толщины теплоизоляции",
              text: "<a href='#' target='_blank'>Онлайн-инструмент (калькулятор)</a>",
            },
          ],
        },
        {
          id: "5",
          title: "Подборки проектов и отзывы",
          url: "/academy/projects",
          bgImg: "/background-image-5.webp",
          icon: `
          <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.083 26.7413H46.3606C51.6382 26.7413 54.277 24.1025 54.277 18.8249V13.5473C54.277 8.26967 51.6382 5.63086 46.3606 5.63086H41.083C35.8053 5.63086 33.1665 8.26967 33.1665 13.5473V18.8249C33.1665 24.1025 35.8053 26.7413 41.083 26.7413Z"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.6394 54.1847H18.917C24.1946 54.1847 26.8334 51.5459 26.8334 46.2682V40.9906C26.8334 35.713 24.1946 33.0742 18.917 33.0742H13.6394C8.36177 33.0742 5.72296 35.713 5.72296 40.9906V46.2682C5.72296 51.5459 8.36177 54.1847 13.6394 54.1847Z"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.2782 26.7413C22.1077 26.7413 26.8334 22.0156 26.8334 16.1861C26.8334 10.3566 22.1077 5.63086 16.2782 5.63086C10.4487 5.63086 5.72296 10.3566 5.72296 16.1861C5.72296 22.0156 10.4487 26.7413 16.2782 26.7413Z"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M43.7218 54.1847C49.5512 54.1847 54.277 49.4589 54.277 43.6294C54.277 37.8 49.5512 33.0742 43.7218 33.0742C37.8923 33.0742 33.1665 37.8 33.1665 43.6294C33.1665 49.4589 37.8923 54.1847 43.7218 54.1847Z"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
          `,
          content: [],
        },
        {
          id: "6",
          title: "Вебинары",
          url: "/academy/webinars",
          bgImg: "/background-image-6.webp",
          icon: `
          <svg

        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.2783 49.8463H16.0354C8.41402 49.8463 5.88159 44.7815 5.88159 39.6925V19.3848C5.88159 11.7634 8.41402 9.23096 16.0354 9.23096H31.2783C38.8997 9.23096 41.4321 11.7634 41.4321 19.3848V39.6925C41.4321 47.3139 38.8756 49.8463 31.2783 49.8463Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M48.1371 41.8393L41.4322 37.1362V21.9175L48.1371 17.2144C51.4172 14.9231 54.1184 16.322 54.1184 20.3498V38.728C54.1184 42.7558 51.4172 44.1546 48.1371 41.8393Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28.7941 27.1266C30.7921 27.1266 32.4118 25.5069 32.4118 23.5089C32.4118 21.5108 30.7921 19.8911 28.7941 19.8911C26.7961 19.8911 25.1763 21.5108 25.1763 23.5089C25.1763 25.5069 26.7961 27.1266 28.7941 27.1266Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
          `,
          content: [],
        },
        {
          id: "7",
          title: "Преимущества",
          url: "/academy/benefits",
          bgImg: "/background-image-7.webp",
          icon: `
          <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.3309 9.70827C28.7954 8.45597 31.1939 8.45597 32.6797 9.70827L36.0333 12.5952C36.6701 13.147 37.8587 13.5927 38.7077 13.5927H42.3161C44.566 13.5927 46.4126 15.4392 46.4126 17.6891V21.2976C46.4126 22.1253 46.8583 23.3352 47.4102 23.972L50.2969 27.3255C51.5492 28.7901 51.5492 31.1886 50.2969 32.6744L47.4102 36.0279C46.8583 36.6647 46.4126 37.8533 46.4126 38.7023V42.3108C46.4126 44.5607 44.566 46.4072 42.3161 46.4072H38.7077C37.8799 46.4072 36.6701 46.8529 36.0333 47.4047L32.6797 50.2914C31.2151 51.5437 28.8167 51.5437 27.3309 50.2914L23.9773 47.4047C23.3405 46.8529 22.1519 46.4072 21.3029 46.4072H17.6308C15.3809 46.4072 13.5343 44.5607 13.5343 42.3108V38.6811C13.5343 37.8533 13.0886 36.6647 12.558 36.0279L9.69253 32.6531C8.46146 31.1886 8.46146 28.8113 9.69253 27.3468L12.558 23.972C13.0886 23.3352 13.5343 22.1466 13.5343 21.3188V17.6891C13.5343 15.4392 15.3809 13.5927 17.6308 13.5927H21.3029C22.1307 13.5927 23.3405 13.147 23.9773 12.5952L27.3309 9.70827Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.5055 35.9644L28.5832 38.3416C28.9865 38.7449 29.878 38.936 30.4723 38.936H34.2292C35.4178 38.936 36.7125 38.0446 37.0097 36.856L39.3869 29.5968C39.8751 28.2171 38.9837 27.0073 37.4979 27.0073H33.5287C32.9344 27.0073 32.4462 26.5193 32.5311 25.8188L33.0193 22.635C33.2103 21.7435 32.616 20.7459 31.7246 20.4487C30.9392 20.1516 29.9416 20.5548 29.5383 21.1491L25.463 27.1983"
          stroke="currentColor"
          stroke-miterlimit="10"
        />
        <path
          d="M20.4326 35.9643V26.2431C20.4326 24.8422 21.0269 24.354 22.4278 24.354H23.4254C24.8051 24.354 25.4206 24.8422 25.4206 26.2431V35.9643C25.4206 37.3439 24.8263 37.8534 23.4254 37.8534H22.4278C21.0269 37.8534 20.4326 37.3652 20.4326 35.9643Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
          `,
          content: [],
        },
      ],
      academyProjects: [
        {
          id: "1",
          title: "Производственные объекты",
          // description:
          //   "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          // img: {
          //   src: "/academy-projects-1.webp",
          //   alt: "Описание изображения",
          // },
          content: [
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Заголовок",
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "2",
          title: "Коровники",
          description:
            "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Заголовок",
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "3",
          title: "Аэродромы",
          description:
            "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Заголовок",
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "4",
          title: "Аэрокоровники",
          description:
            "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Заголовок",
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "5",
          title: "Зоны отстоя автобусов",
          description:
            "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Заголовок",
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "6",
          title: "Непроизводственные объекты",
          description:
            "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Заголовок",
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "7",
          title: "Производственные объекты",
          description:
            "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Заголовок",
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "8",
          title: "Коровники",
          description:
            "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Заголовок",
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "9",
          title: "Непроизводственные объекты",
          description:
            "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Заголовок",
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "10",
          title: "Зоны отстоя автобусов",
          description:
            "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Заголовок",
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "11",
          title: "Аэрокоровники",
          description:
            "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Заголовок",
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "12",
          title: "Аэродромы",
          description:
            "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Заголовок",
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            {
              type: "section",
              title: "Заголовок",
              documents: Array.from(
                { length: 3 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
      ],
      academyWebinars: [
        {
          id: "1",
          title: "Продукция Astron",
          // description: "Вебинары по продукции Astron от Салама Гуссоса",
          // img: {
          //   src: "/academy-projects-1.webp",
          //   alt: "Описание изображения",
          // },
          content: [
            {
              type: "section",
              title: "Вебинары по программному обеспечению: Татьяны Грищенко",
              text: "<h3>Программное обеспечение: вебинар 1</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 2</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 3</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array.from(
                { length: 5 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title:
                "Рекомендации Николая Подшивалова по выполнению расчётов в Cyprion",
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Вебинары Олега Дзабиева по Allplan",
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "2",
          title: "Монтаж",
          description: "Вебинары по продукции Astron от Салама Гуссоса",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Вебинары по программному обеспечению: Татьяны Грищенко",
              text: "<h3>Программное обеспечение: вебинар 1</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 2</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 3</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array.from(
                { length: 5 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title:
                "Рекомендации Николая Подшивалова по выполнению расчётов в Cyprion",
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Вебинары Олега Дзабиева по Allplan",
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "3",
          title: "Программное обеспечение",
          description: "Вебинары по продукции Astron от Салама Гуссоса",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Вебинары по программному обеспечению: Татьяны Грищенко",
              text: "<h3>Программное обеспечение: вебинар 1</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 2</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 3</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array.from(
                { length: 5 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title:
                "Рекомендации Николая Подшивалова по выполнению расчётов в Cyprion",
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Вебинары Олега Дзабиева по Allplan",
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
        {
          id: "4",
          title: "Адаптация",
          description: "Вебинары по продукции Astron от Салама Гуссоса",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: "Вебинары по программному обеспечению: Татьяны Грищенко",
              text: "<h3>Программное обеспечение: вебинар 1</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 2</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 3</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array.from(
                { length: 5 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title:
                "Рекомендации Николая Подшивалова по выполнению расчётов в Cyprion",
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
            {
              type: "section",
              title: "Вебинары Олега Дзабиева по Allplan",
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array.from(
                { length: 1 },
                () => documents[Math.floor(Math.random() * documents.length)]
              ),
            },
          ],
        },
      ],
      academyBenefitTags: [
        {
          id: "1",
          label: "Соответствие техническим требованиям",
          slug: generateSlug("Соответствие техническим требованиям"),
        },
        {
          id: "2",
          label: "Долговечность",
          slug: generateSlug("Долговечность"),
        },
        {
          id: "3",
          label: "Престиж",
          slug: generateSlug("Престиж"),
        },
        {
          id: "4",
          label: "Экологичность",
          slug: generateSlug("Экологичность"),
        },
        {
          id: "5",
          label: "Уникальность",
          slug: generateSlug("Уникальность"),
        },
      ],
      academyBenefits: [
        {
          id: "1",
          title: "60 лет&nbsp;опыта",
          // description:
          //   "60 лет опыта и более 60 000 построенных зданий говорят сами за&nbsp;себя",
          // img: {
          //   src: "/academy-benefits-1.webp",
          //   alt: "Описание изображения",
          // },
          tags: [
            {
              id: "1",
              label: "Соответствие техническим требованиям",
              slug: generateSlug("Соответствие техническим требованиям"),
            },
            {
              id: "2",
              label: "Долговечность",
              slug: generateSlug("Долговечность"),
            },
            {
              id: "3",
              label: "Престиж",
              slug: generateSlug("Престиж"),
            },
          ],
          content: [
            {
              type: "section",
              title:
                "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              text: "<p>Короткометражный фильм от Гая Ричи о истории успеха Astron Buildings</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1",
                thumbnail: "/video-poster-1.webp",
                alt: "Видео завода Астрон",
              },
            },
          ],
        },
        {
          id: "2",
          title: "Короткие сроки строительства",
          description:
            "Короткие сроки реализации проекта за&nbsp;счет использования готовых решений обеспечивают скорейший возврат инвестиций и&nbsp;высокую окупаемость",
          img: {
            src: "/academy-benefits-2.webp",
            alt: "Описание изображения",
          },
          tags: [
            {
              id: "3",
              label: "Престиж",
              slug: generateSlug("Престиж"),
            },
            {
              id: "5",
              label: "Уникальность",
              slug: generateSlug("Уникальность"),
            },
          ],
          content: [
            {
              type: "section",
              title:
                "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              text: "<p>Короткометражный фильм от Гая Ричи о истории успеха Astron Buildings</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1",
                thumbnail: "/video-poster-1.webp",
                alt: "Видео завода Астрон",
              },
            },
          ],
        },
        {
          id: "3",
          title: "60 лет&nbsp;опыта",
          description:
            "60 лет опыта и более 60 000 построенных зданий говорят сами за&nbsp;себя",
          img: {
            src: "/academy-benefits-1.webp",
            alt: "Описание изображения",
          },
          tags: [
            {
              id: "1",
              label: "Соответствие техническим требованиям",
              slug: generateSlug("Соответствие техническим требованиям"),
            },
            {
              id: "2",
              label: "Долговечность",
              slug: generateSlug("Долговечность"),
            },
            {
              id: "3",
              label: "Престиж",
              slug: generateSlug("Престиж"),
            },
          ],
          content: [
            {
              type: "section",
              title:
                "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              text: "<p>Короткометражный фильм от Гая Ричи о истории успеха Astron Buildings</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1",
                thumbnail: "/video-poster-1.webp",
                alt: "Видео завода Астрон",
              },
            },
          ],
        },
        {
          id: "4",
          title: "Короткие сроки строительства",
          description:
            "Короткие сроки реализации проекта за&nbsp;счет использования готовых решений обеспечивают скорейший возврат инвестиций и&nbsp;высокую окупаемость",
          img: {
            src: "/academy-benefits-2.webp",
            alt: "Описание изображения",
          },
          tags: [
            {
              id: "3",
              label: "Престиж",
              slug: generateSlug("Престиж"),
            },
            {
              id: "5",
              label: "Уникальность",
              slug: generateSlug("Уникальность"),
            },
          ],
          content: [
            {
              type: "section",
              title:
                "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              text: "<p>Короткометражный фильм от Гая Ричи о истории успеха Astron Buildings</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1",
                thumbnail: "/video-poster-1.webp",
                alt: "Видео завода Астрон",
              },
            },
          ],
        },
        {
          id: "5",
          title: "60 лет&nbsp;опыта",
          description:
            "60 лет опыта и более 60 000 построенных зданий говорят сами за&nbsp;себя",
          img: {
            src: "/academy-benefits-1.webp",
            alt: "Описание изображения",
          },
          tags: [
            {
              id: "1",
              label: "Соответствие техническим требованиям",
              slug: generateSlug("Соответствие техническим требованиям"),
            },
            {
              id: "2",
              label: "Долговечность",
              slug: generateSlug("Долговечность"),
            },
            {
              id: "3",
              label: "Престиж",
              slug: generateSlug("Престиж"),
            },
          ],
          content: [
            {
              type: "section",
              title:
                "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              text: "<p>Короткометражный фильм от Гая Ричи о истории успеха Astron Buildings</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1",
                thumbnail: "/video-poster-1.webp",
                alt: "Видео завода Астрон",
              },
            },
          ],
        },
        {
          id: "6",
          title: "Короткие сроки строительства",
          description:
            "Короткие сроки реализации проекта за&nbsp;счет использования готовых решений обеспечивают скорейший возврат инвестиций и&nbsp;высокую окупаемость",
          img: {
            src: "/academy-benefits-2.webp",
            alt: "Описание изображения",
          },
          tags: [
            {
              id: "3",
              label: "Престиж",
              slug: generateSlug("Престиж"),
            },
            {
              id: "5",
              label: "Уникальность",
              slug: generateSlug("Уникальность"),
            },
          ],
          content: [
            {
              type: "section",
              title:
                "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              text: "<p>Короткометражный фильм от Гая Ричи о истории успеха Astron Buildings</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1",
                thumbnail: "/video-poster-1.webp",
                alt: "Видео завода Астрон",
              },
            },
          ],
        },
        {
          id: "7",
          title: "60 лет&nbsp;опыта",
          description:
            "60 лет опыта и более 60 000 построенных зданий говорят сами за&nbsp;себя",
          img: {
            src: "/academy-benefits-1.webp",
            alt: "Описание изображения",
          },
          tags: [
            {
              id: "1",
              label: "Соответствие техническим требованиям",
              slug: generateSlug("Соответствие техническим требованиям"),
            },
            {
              id: "2",
              label: "Долговечность",
              slug: generateSlug("Долговечность"),
            },
            {
              id: "3",
              label: "Престиж",
              slug: generateSlug("Престиж"),
            },
          ],
          content: [
            {
              type: "section",
              title:
                "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              text: "<p>Короткометражный фильм от Гая Ричи о истории успеха Astron Buildings</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1",
                thumbnail: "/video-poster-1.webp",
                alt: "Видео завода Астрон",
              },
            },
          ],
        },
        {
          id: "8",
          title: "Короткие сроки строительства",
          description:
            "Короткие сроки реализации проекта за&nbsp;счет использования готовых решений обеспечивают скорейший возврат инвестиций и&nbsp;высокую окупаемость",
          img: {
            src: "/academy-benefits-2.webp",
            alt: "Описание изображения",
          },
          tags: [
            {
              id: "3",
              label: "Престиж",
              slug: generateSlug("Престиж"),
            },
            {
              id: "5",
              label: "Уникальность",
              slug: generateSlug("Уникальность"),
            },
          ],
          content: [
            {
              type: "section",
              title:
                "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              text: "<p>Короткометражный фильм от Гая Ричи о истории успеха Astron Buildings</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1",
                thumbnail: "/video-poster-1.webp",
                alt: "Видео завода Астрон",
              },
            },
          ],
        },
        {
          id: "9",
          title: "60 лет&nbsp;опыта",
          description:
            "60 лет опыта и более 60 000 построенных зданий говорят сами за&nbsp;себя",
          img: {
            src: "/academy-benefits-1.webp",
            alt: "Описание изображения",
          },
          tags: [
            {
              id: "1",
              label: "Соответствие техническим требованиям",
              slug: generateSlug("Соответствие техническим требованиям"),
            },
            {
              id: "2",
              label: "Долговечность",
              slug: generateSlug("Долговечность"),
            },
            {
              id: "3",
              label: "Престиж",
              slug: generateSlug("Престиж"),
            },
          ],
          content: [
            {
              type: "section",
              title:
                "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              text: "<p>Короткометражный фильм от Гая Ричи о истории успеха Astron Buildings</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1",
                thumbnail: "/video-poster-1.webp",
                alt: "Видео завода Астрон",
              },
            },
          ],
        },
        {
          id: "10",
          title: "Короткие сроки строительства",
          description:
            "Короткие сроки реализации проекта за&nbsp;счет использования готовых решений обеспечивают скорейший возврат инвестиций и&nbsp;высокую окупаемость",
          img: {
            src: "/academy-benefits-2.webp",
            alt: "Описание изображения",
          },
          tags: [
            {
              id: "3",
              label: "Престиж",
              slug: generateSlug("Престиж"),
            },
            {
              id: "5",
              label: "Уникальность",
              slug: generateSlug("Уникальность"),
            },
          ],
          content: [
            {
              type: "section",
              title:
                "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              text: "<p>Короткометражный фильм от Гая Ричи о истории успеха Astron Buildings</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1",
                thumbnail: "/video-poster-1.webp",
                alt: "Видео завода Астрон",
              },
            },
          ],
        },
      ],
    };
  }

  private generateBulletins(count: number) {
    const categories = [
      {
        id: "1",
        label: "Изменение цены",
        slug: generateSlug("Изменение цены"),
      },
      {
        id: "2",
        label: "Буклет",
        slug: generateSlug("Буклет"),
      },
      {
        id: "3",
        label: "Типовой договор",
        slug: generateSlug("Типовой договор"),
      },
      {
        id: "4",
        label: "Новые технологии",
        slug: generateSlug("Новые технологии"),
      },
      {
        id: "5",
        label: "Подарок",
        slug: generateSlug("Подарок"),
      },
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
        new Date("2023-01-01"),
        new Date()
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
      {
        id: "1",
        label: "Изменение цены",
        slug: generateSlug("Изменение цены"),
      },
      {
        id: "2",
        label: "Буклет",
        slug: generateSlug("Буклет"),
      },
      {
        id: "3",
        label: "Типовой договор",
        slug: generateSlug("Типовой договор"),
      },
      {
        id: "4",
        label: "Новые технологии",
        slug: generateSlug("Новые технологии"),
      },
      {
        id: "5",
        label: "Подарок",
        slug: generateSlug("Подарок"),
      },
      {
        id: "6",
        label: "Техническая документация",
        slug: generateSlug("Техническая документация"),
      },
      {
        id: "7",
        label: "Каталог",
        slug: generateSlug("Каталог"),
      },
      {
        id: "8",
        label: "Сертификаты",
        slug: generateSlug("Сертификаты"),
      },
      {
        id: "9",
        label: "Презентация",
        slug: generateSlug("Презентация"),
      },
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
        new Date("2023-01-01"),
        new Date()
      ).toISOString(),
      file: {
        url: "/test.pdf",
        size: generateRandomNumber(100000, 900000),
      },
      category: categories[generateRandomNumber(0, categories.length - 1)],
    }));
  }

  private generateLeadGenerationList(count: number) {
    const projectNames = [
      "Project 1500 Warhammer 40 000 gold throne",
      "Project 2000 Star Wars Battlefront",
      "Project 3000 Minecraft Builders",
      "Project 4000 Evolution of Pokémon",
      "Project 5000 Legends of Zelda",
      "Project 6000 Halo Infinite",
      "Project 7000 Dark Souls Remastered",
      "Project 8000 Overwatch League",
      "Project 9000 Final Fantasy XV",
      "Project 10000 Assassin's Creed Valhalla",
    ];

    return Array.from({ length: count }, (_, index) => ({
      id: generateId(),
      project: {
        id: generateId(),
        name: projectNames[generateRandomNumber(0, projectNames.length - 1)],
      },
      fixedAt: generateRandomDate(
        new Date("2023-01-01"),
        new Date()
      ).toISOString(),
    }));
  }

  private generateRetailing(count: number) {
    const projectNames = [
      "Project 1500 Warhammer 40 000 gold throne",
      "Project 2000 Star Wars Battlefront",
      "Project 3000 Minecraft Builders",
      "Project 4000 Evolution of Pokémon",
      "Project 5000 Legends of Zelda",
      "Project 6000 Halo Infinite",
      "Project 7000 Dark Souls Remastered",
      "Project 8000 Overwatch League",
      "Project 9000 Final Fantasy XV",
      "Project 10000 Assassin's Creed Valhalla",
    ];

    return Array.from({ length: count }, (_, index) => ({
      id: generateId(),
      project: {
        id: generateId(),
        name: projectNames[generateRandomNumber(0, projectNames.length - 1)],
      },
      createdAt: generateRandomDate(
        new Date("2023-01-01"),
        new Date()
      ).toISOString(),
      sum: generateRandomNumber(100000, 500000),
    }));
  }

  insert<T extends keyof DBData>(type: T, newData: DBData[T][number]) {
    if (!this.data[type]) throw new Error(`Invalid db type: ${type}`);

    this.data[type].push(newData as any);
  }

  update(type: keyof DBData, newData: any[]) {
    if (!this.data[type]) throw new Error(`Invalid db type: ${type}`);

    this.data[type] = newData;
  }

  get<T extends keyof DBData>(type: T): DBData[T] {
    if (!this.data[type]) throw new Error(`Invalid db type: ${type}`);

    return this.data[type];
  }
})();
