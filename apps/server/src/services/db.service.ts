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
  AcademySection,
  AcademySectionInList,
  AcademyWebinar,
  Bulletin,
  Document,
  DocumentCategory,
  News,
  Partner,
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
  createdAt: string;
};

type DBData = {
  users: User[];
  news: News[];
  documents: Document[];
  documentCategories: DocumentCategory[];
  bulletinsCategories: DocumentCategory[];
  bulletins: Bulletin[];
  employees: Employee[];
  tests: Test[];
  employeeTests: EmployeeTest[];
  academySections: (AcademySection & AcademySectionInList)[];
  academyProjects: AcademyProject[];
  academyWebinars: AcademyWebinar[];
  academyBenefits: AcademyBenefit[];
  academyBenefitTags: AcademyBenefitTag[];
  partners: Partner[];
};

export default new (class DBService {
  private data: DBData = {
    users: [],
    news: [],
    documents: [],
    documentCategories: [],
    bulletinsCategories: [],
    bulletins: [],
    employees: [],
    tests: [],
    employeeTests: [],
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
          phone: "+79231665038",
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
      ],
      news: [
        {
          id: "1",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: {
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
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
            text: "<img src='/news-1.webp' alt='Картинка завода Астрон'><h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol><h2>Прямая трансляция</h2><p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true' poster='/video-poster-1.webp'></video><iframe src='https://kinescope.io/embed/wUMuBbXwX4NEkoqBRptFx2' allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;' frameborder='0' allowfullscreen=''></iframe>",
          },

          createdAt: "2024-12-30T12:34:56Z",
        },
      ],
      partners: [
        {
          id: "1",
          title: "NABUCCO Architecture & Construction",
          projects: {
            count: 23,
            link: "/",
            implementedArea: 5678,
          },
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
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "2",
          employeeId: "2",
          testId: "2",
          result: 90,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "3",
          employeeId: "3",
          testId: "3",
          result: 79,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "4",
          employeeId: "4",
          testId: "3",
          result: 54,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "5",
          employeeId: "5",
          testId: "2",
          result: 80,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "6",
          employeeId: "6",
          testId: "1",
          result: 95,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "7",
          employeeId: "7",
          testId: "2",
          result: 82,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "8",
          employeeId: "8",
          testId: "1",
          result: 68,
          createdAt: "2025-01-01T00:00:00.000Z",
        },
        {
          id: "9",
          employeeId: "1",
          testId: "1",
          result: 95,
          createdAt: "2024-01-01T00:00:00.000Z",
        },
        {
          id: "10",
          employeeId: "2",
          testId: "2",
          result: 82,
          createdAt: "2024-01-01T00:00:00.000Z",
        },
        {
          id: "11",
          employeeId: "8",
          testId: "3",
          result: 70,
          createdAt: "2024-01-01T00:00:00.000Z",
        },
        {
          id: "12",
          employeeId: "1",
          testId: "1",
          result: 12,
          createdAt: new Date().toISOString(),
        },
        {
          id: "13",
          employeeId: "2",
          testId: "2",
          result: 90,
          createdAt: new Date().toISOString(),
        },
        {
          id: "14",
          employeeId: "8",
          testId: "3",
          result: 85,
          createdAt: new Date().toISOString(),
        },
      ],
      academySections: [
        {
          id: "1",
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
              title: {
                type: "h2",
                text: "Чек-лист",
              },
              text: "<p>Чек-лист подготовки к переговорам. Это документ, в котором перечислены ключевые цели конкретной встречи, возможные возражения, с которыми могут столкнуться участники. Чек-лист очень хорошо помогает и в составлении протокола проведенной встречи.</p>",
              media: {
                type: "image",
                src: "/academy-conversations-1.webp",
                alt: "Чек-лист подготовки к переговорам",
              },
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Карта переговоров",
              },
              documents: Array(3)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Оценка качества",
              },
              documents: Array(4)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
          ],
        },
        {
          id: "2",
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
              title: {
                type: "h2",
                text: "Примеры ТЗ для тендеров",
              },
              documents: Array(2)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Сравнение технологий",
              },
              documents: Array(3)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Сравнение с КП конкурентов",
              },
              documents: Array(7)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
          ],
        },
        {
          id: "3",
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
              title: {
                type: "h2",
                text: "Бланки коммерческих предложений",
              },
              documents: Array(3)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Формирование графика работ",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Калькулятор толщины теплоизоляции",
              },
              text: "<a href='#' target='_blank'>Онлайн-инструмент (калькулятор)</a>",
            },
          ],
        },
      ],
      academyProjects: [
        {
          id: "1",
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
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(3)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(3)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(3)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(3)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(3)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(3)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(3)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(3)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(3)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(3)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(3)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              text: "<h3>Текстовая часть</h3><p>Длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение длинное текстовое сообщение</p><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Текстовая часть</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Заголовок",
              },
              documents: Array(3)
                .fill(null)
                .map(
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
          description: "Вебинары по продукции Astron от Салама Гуссоса",
          img: {
            src: "/academy-projects-1.webp",
            alt: "Описание изображения",
          },
          content: [
            {
              type: "section",
              title: {
                type: "h2",
                text: "Вебинары по программному обеспечению: Татьяны Грищенко",
              },
              text: "<h3>Программное обеспечение: вебинар 1</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 2</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 3</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array(5)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Рекомендации Николая Подшивалова по выполнению расчётов в Cyprion",
              },
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Вебинары Олега Дзабиева по Allplan",
              },
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array(1)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Вебинары по программному обеспечению: Татьяны Грищенко",
              },
              text: "<h3>Программное обеспечение: вебинар 1</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 2</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 3</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array(5)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Рекомендации Николая Подшивалова по выполнению расчётов в Cyprion",
              },
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Вебинары Олега Дзабиева по Allplan",
              },
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array(1)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Вебинары по программному обеспечению: Татьяны Грищенко",
              },
              text: "<h3>Программное обеспечение: вебинар 1</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 2</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 3</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array(5)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Рекомендации Николая Подшивалова по выполнению расчётов в Cyprion",
              },
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Вебинары Олега Дзабиева по Allplan",
              },
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array(1)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "Вебинары по программному обеспечению: Татьяны Грищенко",
              },
              text: "<h3>Программное обеспечение: вебинар 1</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 2</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video><h3>Программное обеспечение: вебинар 3</h3><video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array(5)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            {
              type: "separator",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Рекомендации Николая Подшивалова по выполнению расчётов в Cyprion",
              },
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array(1)
                .fill(null)
                .map(
                  () => documents[Math.floor(Math.random() * documents.length)]
                ),
            },
            { type: "separator" },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Вебинары Олега Дзабиева по Allplan",
              },
              text: "<video src='https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=1' poster='/video-poster-2.webp' title='Видео завода Астрон'></video>",
              documents: Array(1)
                .fill(null)
                .map(
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
              title: {
                type: "h2",
                text: "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              },
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
              title: {
                type: "h2",
                text: "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              },
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
              title: {
                type: "h2",
                text: "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              },
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
              title: {
                type: "h2",
                text: "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              },
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
              title: {
                type: "h2",
                text: "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              },
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
              title: {
                type: "h2",
                text: "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              },
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
              title: {
                type: "h2",
                text: "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              },
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
              title: {
                type: "h2",
                text: "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              },
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
              title: {
                type: "h2",
                text: "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              },
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
              title: {
                type: "h2",
                text: "60 лет опыта и более 60 000 построенных зданий говорят сами за себя",
              },
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
