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
  AcademyWebinar,
  Bulletin,
  Company,
  Document,
  News,
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
  companies: Company[];
  documents: Document[];
  bulletins: Bulletin[];
  employees: Employee[];
  tests: Test[];
  employeeTests: EmployeeTest[];
  academyProjects: AcademyProject[];
  academyWebinars: AcademyWebinar[];
  academyBenefits: AcademyBenefit[];
  academyBenefitTags: AcademyBenefitTag[];
};

export default new (class DBService {
  private data: DBData = {
    users: [],
    news: [],
    companies: [],
    documents: [],
    bulletins: [],
    employees: [],
    tests: [],
    employeeTests: [],
    academyProjects: [],
    academyWebinars: [],
    academyBenefits: [],
    academyBenefitTags: [],
  };

  constructor() {
    this.seed();
  }

  seed() {
    const documents = [
      {
        id: "3f9cea6ev2",
        title: "Информационный буклет",
        createdAt: "2019-06-19T02:06:02.470Z",
        file: { url: "/test.pdf", size: 471525 },
        category: "Подарок",
      },
      {
        id: "on5a8m1num",
        title: "Прайс-лист",
        createdAt: "2020-04-13T03:19:11.422Z",
        file: { url: "/test.pdf", size: 858292 },
        category: "Каталог",
      },
      {
        id: "acc4gtpnk2",
        title: "Типовые формулировки контрактов",
        createdAt: "2021-10-09T19:20:50.339Z",
        file: { url: "/test.pdf", size: 200294 },
        category: "Каталог",
      },
      {
        id: "g83ldoa2wv",
        title: "Презентация новых технологий",
        createdAt: "2025-01-06T05:36:33.554Z",
        file: { url: "/test.pdf", size: 255461 },
        category: "Техническая документация",
      },
      {
        id: "cbm91gga3i",
        title: "Сертификат соответствия",
        createdAt: "2025-07-19T11:20:49.592Z",
        file: { url: "/test.pdf", size: 101253 },
        category: "Типовой договор",
      },
      {
        id: "hvt2bhe6hh",
        title: "Спецификация материалов",
        createdAt: "2020-01-22T09:19:25.491Z",
        file: { url: "/test.pdf", size: 728974 },
        category: "Каталог",
      },
      {
        id: "jgoz7zajwf",
        title: "Презентация новых технологий",
        createdAt: "2021-10-15T10:59:33.312Z",
        file: { url: "/test.pdf", size: 605359 },
        category: "Буклет",
      },
      {
        id: "uqs1vcjmqz",
        title: "Информационный буклет",
        createdAt: "2019-03-20T16:18:16.253Z",
        file: { url: "/test.pdf", size: 604694 },
        category: "Типовой договор",
      },
      {
        id: "5471ss63ev",
        title: "Информационный буклет",
        createdAt: "2018-12-27T21:22:35.228Z",
        file: { url: "/test.pdf", size: 589340 },
        category: "Презентация",
      },
      {
        id: "9gz71ritj6",
        title: "Сертификат соответствия",
        createdAt: "2020-05-25T22:23:08.623Z",
        file: { url: "/test.pdf", size: 882472 },
        category: "Техническая документация",
      },
      {
        id: "yj6uxixums",
        title: "Типовые формулировки контрактов",
        createdAt: "2020-07-09T08:55:50.547Z",
        file: { url: "/test.pdf", size: 231267 },
        category: "Новые технологии",
      },
      {
        id: "0gqpbx9g0d",
        title: "Прайс-лист",
        createdAt: "2022-01-22T20:44:42.526Z",
        file: { url: "/test.pdf", size: 152919 },
        category: "Буклет",
      },
      {
        id: "xlfb0hao7l",
        title: "Сертификат соответствия",
        createdAt: "2020-09-11T22:28:14.841Z",
        file: { url: "/test.pdf", size: 294970 },
        category: "Изменение цены",
      },
      {
        id: "tjomm5ojdf",
        title: "Прайс-лист",
        createdAt: "2022-08-31T19:00:06.258Z",
        file: { url: "/test.pdf", size: 869903 },
        category: "Презентация",
      },
      {
        id: "bh12sea6y9",
        title: "Руководство по монтажу",
        createdAt: "2021-02-12T05:37:19.304Z",
        file: { url: "/test.pdf", size: 471736 },
        category: "Изменение цены",
      },
      {
        id: "g3sd3xjtbe",
        title: "Прайс-лист",
        createdAt: "2021-11-29T06:21:20.558Z",
        file: { url: "/test.pdf", size: 460846 },
        category: "Изменение цены",
      },
      {
        id: "b1f5kfuan1",
        title: "Руководство по монтажу",
        createdAt: "2019-05-18T00:15:07.981Z",
        file: { url: "/test.pdf", size: 228247 },
        category: "Техническая документация",
      },
      {
        id: "ipoaca1jcv",
        title: "Сертификат соответствия",
        createdAt: "2023-09-21T16:36:23.612Z",
        file: { url: "/test.pdf", size: 336762 },
        category: "Сертификаты",
      },
      {
        id: "11678mwlfs",
        title: "Руководство по монтажу",
        createdAt: "2023-11-14T14:54:18.920Z",
        file: { url: "/test.pdf", size: 366459 },
        category: "Техническая документация",
      },
      {
        id: "wtw4u73bbe",
        title: "Презентация новых технологий",
        createdAt: "2024-03-08T02:30:33.108Z",
        file: { url: "/test.pdf", size: 281708 },
        category: "Сертификаты",
      },
      {
        id: "oi6kkgm3vw",
        title: "Сертификат соответствия",
        createdAt: "2025-03-01T07:39:12.709Z",
        file: { url: "/test.pdf", size: 174723 },
        category: "Каталог",
      },
      {
        id: "pwfms9wytu",
        title: "Сертификат соответствия",
        createdAt: "2024-08-04T00:20:21.598Z",
        file: { url: "/test.pdf", size: 843198 },
        category: "Подарок",
      },
      {
        id: "mf58tlq1i9",
        title: "Спецификация материалов",
        createdAt: "2025-05-19T06:06:57.339Z",
        file: { url: "/test.pdf", size: 755330 },
        category: "Техническая документация",
      },
      {
        id: "77ofo69jln",
        title: "Сертификат соответствия",
        createdAt: "2023-01-20T04:25:02.181Z",
        file: { url: "/test.pdf", size: 346816 },
        category: "Подарок",
      },
      {
        id: "mffq6txdta",
        title: "Техническая документация",
        createdAt: "2019-09-10T04:19:43.668Z",
        file: { url: "/test.pdf", size: 209850 },
        category: "Техническая документация",
      },
      {
        id: "qjuq1gunaq",
        title: "Руководство по монтажу",
        createdAt: "2019-05-25T04:51:14.546Z",
        file: { url: "/test.pdf", size: 409862 },
        category: "Техническая документация",
      },
      {
        id: "xg2jn8iz8l",
        title: "Информационный буклет",
        createdAt: "2024-08-17T04:29:10.144Z",
        file: { url: "/test.pdf", size: 281598 },
        category: "Презентация",
      },
      {
        id: "pa336z9ivp",
        title: "Техническая документация",
        createdAt: "2024-11-09T22:22:28.121Z",
        file: { url: "/test.pdf", size: 533250 },
        category: "Типовой договор",
      },
      {
        id: "xus0dc98ix",
        title: "Каталог решений",
        createdAt: "2025-12-10T15:15:04.086Z",
        file: { url: "/test.pdf", size: 153840 },
        category: "Изменение цены",
      },
      {
        id: "tkpf2dybkm",
        title: "Сертификат соответствия",
        createdAt: "2021-04-19T00:51:05.212Z",
        file: { url: "/test.pdf", size: 122325 },
        category: "Буклет",
      },
      {
        id: "sctpjtwcjx",
        title: "Прайс-лист",
        createdAt: "2022-08-22T11:46:33.587Z",
        file: { url: "/test.pdf", size: 619874 },
        category: "Буклет",
      },
      {
        id: "blmumsjc6t",
        title: "Типовые формулировки контрактов",
        createdAt: "2024-07-05T16:19:15.161Z",
        file: { url: "/test.pdf", size: 772784 },
        category: "Изменение цены",
      },
      {
        id: "bzlczaayz6",
        title: "Техническая документация",
        createdAt: "2023-10-30T04:46:40.764Z",
        file: { url: "/test.pdf", size: 367129 },
        category: "Буклет",
      },
      {
        id: "x2y05s2rtr",
        title: "Спецификация материалов",
        createdAt: "2022-09-04T02:17:35.209Z",
        file: { url: "/test.pdf", size: 145035 },
        category: "Каталог",
      },
      {
        id: "lu3kxjxbqf",
        title: "Презентация новых технологий",
        createdAt: "2024-12-11T20:54:35.601Z",
        file: { url: "/test.pdf", size: 547764 },
        category: "Техническая документация",
      },
      {
        id: "pu963cbczt",
        title: "Каталог решений",
        createdAt: "2025-05-15T09:40:29.729Z",
        file: { url: "/test.pdf", size: 532578 },
        category: "Каталог",
      },
      {
        id: "krnv1v7g5a",
        title: "Руководство по монтажу",
        createdAt: "2024-07-12T19:23:50.400Z",
        file: { url: "/test.pdf", size: 136922 },
        category: "Каталог",
      },
      {
        id: "bnjtzmgwzo",
        title: "Презентация новых технологий",
        createdAt: "2018-08-30T09:27:56.730Z",
        file: { url: "/test.pdf", size: 454516 },
        category: "Каталог",
      },
      {
        id: "e20e7o9kge",
        title: "Руководство по монтажу",
        createdAt: "2023-05-30T14:41:44.605Z",
        file: { url: "/test.pdf", size: 814108 },
        category: "Подарок",
      },
      {
        id: "i2cu8c63fj",
        title: "Информационный буклет",
        createdAt: "2019-04-29T18:35:11.256Z",
        file: { url: "/test.pdf", size: 185516 },
        category: "Презентация",
      },
      {
        id: "l4s7yd2kkc",
        title: "Презентация новых технологий",
        createdAt: "2022-12-27T19:14:44.575Z",
        file: { url: "/test.pdf", size: 126368 },
        category: "Презентация",
      },
      {
        id: "w75vlmskzd",
        title: "Каталог решений",
        createdAt: "2022-07-12T10:30:09.099Z",
        file: { url: "/test.pdf", size: 596772 },
        category: "Техническая документация",
      },
      {
        id: "4g1v5zb6js",
        title: "Руководство по монтажу",
        createdAt: "2022-03-15T06:45:27.881Z",
        file: { url: "/test.pdf", size: 124377 },
        category: "Каталог",
      },
      {
        id: "2uzva3jj43",
        title: "Каталог решений",
        createdAt: "2024-04-17T17:32:49.793Z",
        file: { url: "/test.pdf", size: 206340 },
        category: "Сертификаты",
      },
      {
        id: "wglvenixg7",
        title: "Типовые формулировки контрактов",
        createdAt: "2024-03-27T16:55:03.618Z",
        file: { url: "/test.pdf", size: 340271 },
        category: "Изменение цены",
      },
      {
        id: "1sitkhv5dq",
        title: "Руководство по монтажу",
        createdAt: "2018-12-08T00:55:17.419Z",
        file: { url: "/test.pdf", size: 261126 },
        category: "Подарок",
      },
      {
        id: "sur12eh41x",
        title: "Прайс-лист",
        createdAt: "2022-10-06T06:35:35.318Z",
        file: { url: "/test.pdf", size: 589685 },
        category: "Буклет",
      },
      {
        id: "cmniy866c9",
        title: "Прайс-лист",
        createdAt: "2018-02-08T01:49:32.135Z",
        file: { url: "/test.pdf", size: 153041 },
        category: "Презентация",
      },
      {
        id: "o7k0fwuesw",
        title: "Руководство по монтажу",
        createdAt: "2021-05-05T07:32:08.946Z",
        file: { url: "/test.pdf", size: 142748 },
        category: "Техническая документация",
      },
      {
        id: "8rx751qrvm",
        title: "Техническая документация",
        createdAt: "2019-09-25T05:51:27.703Z",
        file: { url: "/test.pdf", size: 491540 },
        category: "Сертификаты",
      },
      {
        id: "j8hqv5gty2",
        title: "Каталог решений",
        createdAt: "2023-10-11T16:38:26.727Z",
        file: { url: "/test.pdf", size: 711816 },
        category: "Каталог",
      },
      {
        id: "ocoftektxg",
        title: "Каталог решений",
        createdAt: "2023-10-11T04:20:51.294Z",
        file: { url: "/test.pdf", size: 775912 },
        category: "Техническая документация",
      },
      {
        id: "4gxoq3f0cx",
        title: "Руководство по монтажу",
        createdAt: "2024-02-29T11:12:02.742Z",
        file: { url: "/test.pdf", size: 664735 },
        category: "Сертификаты",
      },
      {
        id: "6q9qtssk0t",
        title: "Каталог решений",
        createdAt: "2020-06-28T01:23:23.173Z",
        file: { url: "/test.pdf", size: 451262 },
        category: "Подарок",
      },
      {
        id: "t0jgl64rj5",
        title: "Прайс-лист",
        createdAt: "2019-01-13T01:06:57.239Z",
        file: { url: "/test.pdf", size: 177114 },
        category: "Техническая документация",
      },
      {
        id: "7ka9ilts6k",
        title: "Техническая документация",
        createdAt: "2020-05-17T13:57:14.494Z",
        file: { url: "/test.pdf", size: 134426 },
        category: "Презентация",
      },
      {
        id: "y8s0zwjx8o",
        title: "Информационный буклет",
        createdAt: "2018-09-29T05:13:05.138Z",
        file: { url: "/test.pdf", size: 787465 },
        category: "Типовой договор",
      },
      {
        id: "3h6r3idujk",
        title: "Руководство по монтажу",
        createdAt: "2022-01-19T00:53:13.887Z",
        file: { url: "/test.pdf", size: 468378 },
        category: "Буклет",
      },
      {
        id: "8jhrki1io1",
        title: "Информационный буклет",
        createdAt: "2022-01-26T02:58:23.115Z",
        file: { url: "/test.pdf", size: 768225 },
        category: "Презентация",
      },
      {
        id: "39nb010y36",
        title: "Сертификат соответствия",
        createdAt: "2023-07-04T13:35:20.874Z",
        file: { url: "/test.pdf", size: 880165 },
        category: "Сертификаты",
      },
      {
        id: "r2xz2wexxy",
        title: "Сертификат соответствия",
        createdAt: "2023-02-08T07:22:43.803Z",
        file: { url: "/test.pdf", size: 187392 },
        category: "Подарок",
      },
      {
        id: "rs4g1fwt0w",
        title: "Сертификат соответствия",
        createdAt: "2018-06-12T05:19:51.179Z",
        file: { url: "/test.pdf", size: 642070 },
        category: "Подарок",
      },
      {
        id: "rnqqai28uj",
        title: "Прайс-лист",
        createdAt: "2020-02-17T15:11:24.702Z",
        file: { url: "/test.pdf", size: 214257 },
        category: "Буклет",
      },
      {
        id: "wb5rll8yer",
        title: "Презентация новых технологий",
        createdAt: "2025-04-06T09:56:21.180Z",
        file: { url: "/test.pdf", size: 486378 },
        category: "Каталог",
      },
      {
        id: "zve7aai9ag",
        title: "Презентация новых технологий",
        createdAt: "2023-03-27T12:05:37.737Z",
        file: { url: "/test.pdf", size: 213771 },
        category: "Презентация",
      },
      {
        id: "otdcyf7wrx",
        title: "Информационный буклет",
        createdAt: "2020-12-24T12:33:49.657Z",
        file: { url: "/test.pdf", size: 657391 },
        category: "Каталог",
      },
      {
        id: "9zxbdu3xtn",
        title: "Руководство по монтажу",
        createdAt: "2018-04-23T10:03:12.534Z",
        file: { url: "/test.pdf", size: 382637 },
        category: "Буклет",
      },
      {
        id: "gappmbf01h",
        title: "Руководство по монтажу",
        createdAt: "2022-01-23T03:57:40.432Z",
        file: { url: "/test.pdf", size: 561323 },
        category: "Буклет",
      },
      {
        id: "x0tie1iptf",
        title: "Прайс-лист",
        createdAt: "2023-10-03T07:32:27.323Z",
        file: { url: "/test.pdf", size: 674487 },
        category: "Буклет",
      },
      {
        id: "y9sokdumyl",
        title: "Сертификат соответствия",
        createdAt: "2018-06-14T18:09:41.023Z",
        file: { url: "/test.pdf", size: 546352 },
        category: "Презентация",
      },
      {
        id: "cq9kw7u8nh",
        title: "Типовые формулировки контрактов",
        createdAt: "2018-11-21T06:38:22.007Z",
        file: { url: "/test.pdf", size: 899224 },
        category: "Каталог",
      },
      {
        id: "p8u8gswx3j",
        title: "Типовые формулировки контрактов",
        createdAt: "2021-03-11T09:39:42.412Z",
        file: { url: "/test.pdf", size: 856685 },
        category: "Каталог",
      },
      {
        id: "sl6p6r5opz",
        title: "Техническая документация",
        createdAt: "2019-05-07T12:32:52.110Z",
        file: { url: "/test.pdf", size: 206795 },
        category: "Техническая документация",
      },
      {
        id: "8b7hgtcrd1",
        title: "Спецификация материалов",
        createdAt: "2021-05-29T10:46:38.040Z",
        file: { url: "/test.pdf", size: 232841 },
        category: "Типовой договор",
      },
      {
        id: "ukrir8mfgw",
        title: "Прайс-лист",
        createdAt: "2025-09-14T16:49:08.064Z",
        file: { url: "/test.pdf", size: 487324 },
        category: "Подарок",
      },
      {
        id: "bl9nnr8t4t",
        title: "Информационный буклет",
        createdAt: "2025-03-30T00:01:21.444Z",
        file: { url: "/test.pdf", size: 840607 },
        category: "Подарок",
      },
      {
        id: "q6i4g3jar7",
        title: "Типовые формулировки контрактов",
        createdAt: "2020-01-09T11:12:09.876Z",
        file: { url: "/test.pdf", size: 898355 },
        category: "Типовой договор",
      },
      {
        id: "chi0a89lm3",
        title: "Информационный буклет",
        createdAt: "2023-08-02T05:07:35.271Z",
        file: { url: "/test.pdf", size: 896117 },
        category: "Каталог",
      },
      {
        id: "s91w5kvifm",
        title: "Прайс-лист",
        createdAt: "2025-03-11T08:15:02.579Z",
        file: { url: "/test.pdf", size: 390625 },
        category: "Презентация",
      },
      {
        id: "kyheh4zzol",
        title: "Сертификат соответствия",
        createdAt: "2021-03-17T03:22:31.866Z",
        file: { url: "/test.pdf", size: 685143 },
        category: "Техническая документация",
      },
      {
        id: "oh3gmo1cti",
        title: "Типовые формулировки контрактов",
        createdAt: "2020-07-29T04:15:26.176Z",
        file: { url: "/test.pdf", size: 408621 },
        category: "Буклет",
      },
      {
        id: "w27b1zihod",
        title: "Руководство по монтажу",
        createdAt: "2023-08-05T17:24:00.038Z",
        file: { url: "/test.pdf", size: 177798 },
        category: "Каталог",
      },
      {
        id: "4j2hk5dj3z",
        title: "Презентация новых технологий",
        createdAt: "2019-04-10T02:40:53.735Z",
        file: { url: "/test.pdf", size: 284354 },
        category: "Техническая документация",
      },
      {
        id: "ox3fxyo63a",
        title: "Информационный буклет",
        createdAt: "2022-04-18T22:07:57.445Z",
        file: { url: "/test.pdf", size: 329218 },
        category: "Изменение цены",
      },
      {
        id: "2brbwjplqb",
        title: "Каталог решений",
        createdAt: "2019-04-20T14:14:40.671Z",
        file: { url: "/test.pdf", size: 798422 },
        category: "Новые технологии",
      },
      {
        id: "qly59dsnef",
        title: "Презентация новых технологий",
        createdAt: "2024-11-14T17:50:11.313Z",
        file: { url: "/test.pdf", size: 683053 },
        category: "Изменение цены",
      },
      {
        id: "2xlwi105xc",
        title: "Руководство по монтажу",
        createdAt: "2024-01-15T20:13:18.145Z",
        file: { url: "/test.pdf", size: 577134 },
        category: "Изменение цены",
      },
      {
        id: "d2plf4ultg",
        title: "Сертификат соответствия",
        createdAt: "2023-08-20T02:44:50.041Z",
        file: { url: "/test.pdf", size: 580508 },
        category: "Новые технологии",
      },
      {
        id: "9vn97cqr3s",
        title: "Каталог решений",
        createdAt: "2018-08-06T15:04:56.204Z",
        file: { url: "/test.pdf", size: 810304 },
        category: "Подарок",
      },
      {
        id: "h09ne4wlv6",
        title: "Прайс-лист",
        createdAt: "2018-04-19T22:46:06.931Z",
        file: { url: "/test.pdf", size: 608830 },
        category: "Новые технологии",
      },
      {
        id: "hx8ko2tjkg",
        title: "Информационный буклет",
        createdAt: "2019-12-24T04:18:08.189Z",
        file: { url: "/test.pdf", size: 701287 },
        category: "Сертификаты",
      },
      {
        id: "v57c9huwgf",
        title: "Спецификация материалов",
        createdAt: "2024-12-07T16:09:18.967Z",
        file: { url: "/test.pdf", size: 539455 },
        category: "Новые технологии",
      },
      {
        id: "x3ehwpy9l1",
        title: "Типовые формулировки контрактов",
        createdAt: "2020-03-13T13:27:58.372Z",
        file: { url: "/test.pdf", size: 783085 },
        category: "Изменение цены",
      },
      {
        id: "1eel14ok3p",
        title: "Каталог решений",
        createdAt: "2022-07-07T22:48:05.885Z",
        file: { url: "/test.pdf", size: 139841 },
        category: "Подарок",
      },
      {
        id: "vbqap9bf5n",
        title: "Спецификация материалов",
        createdAt: "2020-08-25T15:04:49.969Z",
        file: { url: "/test.pdf", size: 736181 },
        category: "Подарок",
      },
      {
        id: "9x8ez9b8rr",
        title: "Спецификация материалов",
        createdAt: "2018-04-30T23:22:15.230Z",
        file: { url: "/test.pdf", size: 333758 },
        category: "Каталог",
      },
      {
        id: "9xeus6qlhr",
        title: "Типовые формулировки контрактов",
        createdAt: "2020-02-16T12:41:45.848Z",
        file: { url: "/test.pdf", size: 114685 },
        category: "Подарок",
      },
      {
        id: "b1fxppq729",
        title: "Типовые формулировки контрактов",
        createdAt: "2022-04-04T19:06:21.087Z",
        file: { url: "/test.pdf", size: 529301 },
        category: "Подарок",
      },
      {
        id: "wwa42w7fbn",
        title: "Типовые формулировки контрактов",
        createdAt: "2023-07-11T03:17:21.028Z",
        file: { url: "/test.pdf", size: 611735 },
        category: "Изменение цены",
      },
      {
        id: "t0hp8ol6lt",
        title: "Руководство по монтажу",
        createdAt: "2018-10-31T07:12:29.563Z",
        file: { url: "/test.pdf", size: 432158 },
        category: "Изменение цены",
      },
      {
        id: "4mcj7g6eds",
        title: "Информационный буклет",
        createdAt: "2018-02-09T20:33:18.061Z",
        file: { url: "/test.pdf", size: 607530 },
        category: "Подарок",
      },
      {
        id: "n0dak4zuw2",
        title: "Информационный буклет",
        createdAt: "2018-03-08T17:52:55.463Z",
        file: { url: "/test.pdf", size: 291835 },
        category: "Техническая документация",
      },
      {
        id: "a7hp5g2bia",
        title: "Руководство по монтажу",
        createdAt: "2019-05-02T05:32:35.025Z",
        file: { url: "/test.pdf", size: 875983 },
        category: "Подарок",
      },
      {
        id: "k6oclzn1u3",
        title: "Информационный буклет",
        createdAt: "2022-04-12T07:17:59.434Z",
        file: { url: "/test.pdf", size: 634551 },
        category: "Буклет",
      },
      {
        id: "80u3cfmghj",
        title: "Руководство по монтажу",
        createdAt: "2019-07-03T04:57:22.620Z",
        file: { url: "/test.pdf", size: 148207 },
        category: "Подарок",
      },
      {
        id: "yuh6tbre8m",
        title: "Информационный буклет",
        createdAt: "2023-08-23T14:26:04.704Z",
        file: { url: "/test.pdf", size: 350880 },
        category: "Техническая документация",
      },
      {
        id: "xglrtnf9iz",
        title: "Техническая документация",
        createdAt: "2022-07-14T12:11:55.129Z",
        file: { url: "/test.pdf", size: 237092 },
        category: "Изменение цены",
      },
      {
        id: "5mt9vmx9je",
        title: "Спецификация материалов",
        createdAt: "2021-06-09T18:40:26.500Z",
        file: { url: "/test.pdf", size: 805776 },
        category: "Типовой договор",
      },
      {
        id: "ank48lfb9y",
        title: "Презентация новых технологий",
        createdAt: "2020-11-15T02:57:51.514Z",
        file: { url: "/test.pdf", size: 387507 },
        category: "Сертификаты",
      },
      {
        id: "n2zkbgfy0d",
        title: "Каталог решений",
        createdAt: "2023-01-13T06:20:57.177Z",
        file: { url: "/test.pdf", size: 705113 },
        category: "Техническая документация",
      },
      {
        id: "0estbbrh1k",
        title: "Прайс-лист",
        createdAt: "2019-09-04T10:35:07.274Z",
        file: { url: "/test.pdf", size: 546781 },
        category: "Изменение цены",
      },
      {
        id: "i0g9vqs5o3",
        title: "Типовые формулировки контрактов",
        createdAt: "2019-03-09T21:32:23.360Z",
        file: { url: "/test.pdf", size: 327093 },
        category: "Каталог",
      },
      {
        id: "4d9dg4hh7w",
        title: "Прайс-лист",
        createdAt: "2020-04-25T16:32:06.464Z",
        file: { url: "/test.pdf", size: 669029 },
        category: "Изменение цены",
      },
      {
        id: "kdrbe1pfji",
        title: "Типовые формулировки контрактов",
        createdAt: "2021-02-16T21:43:19.561Z",
        file: { url: "/test.pdf", size: 181546 },
        category: "Изменение цены",
      },
      {
        id: "v1e3oe1367",
        title: "Прайс-лист",
        createdAt: "2022-01-03T18:50:20.098Z",
        file: { url: "/test.pdf", size: 328675 },
        category: "Буклет",
      },
      {
        id: "oc8iexdr2i",
        title: "Информационный буклет",
        createdAt: "2020-09-17T23:23:15.968Z",
        file: { url: "/test.pdf", size: 485486 },
        category: "Каталог",
      },
      {
        id: "7aflppo5i0",
        title: "Руководство по монтажу",
        createdAt: "2022-02-08T23:37:13.968Z",
        file: { url: "/test.pdf", size: 229769 },
        category: "Типовой договор",
      },
      {
        id: "lcrjirma4r",
        title: "Презентация новых технологий",
        createdAt: "2018-11-23T13:34:35.619Z",
        file: { url: "/test.pdf", size: 383693 },
        category: "Буклет",
      },
      {
        id: "3s194yr5te",
        title: "Техническая документация",
        createdAt: "2023-07-21T11:47:32.348Z",
        file: { url: "/test.pdf", size: 201373 },
        category: "Каталог",
      },
      {
        id: "xyyiig9bn3",
        title: "Презентация новых технологий",
        createdAt: "2022-03-14T20:56:28.746Z",
        file: { url: "/test.pdf", size: 548373 },
        category: "Сертификаты",
      },
      {
        id: "n6dyn2emhl",
        title: "Информационный буклет",
        createdAt: "2023-02-25T05:30:41.718Z",
        file: { url: "/test.pdf", size: 120024 },
        category: "Сертификаты",
      },
      {
        id: "llpt2t370w",
        title: "Информационный буклет",
        createdAt: "2022-08-24T07:44:37.238Z",
        file: { url: "/test.pdf", size: 633511 },
        category: "Новые технологии",
      },
      {
        id: "p6ziuwgwhw",
        title: "Типовые формулировки контрактов",
        createdAt: "2023-11-25T11:56:32.790Z",
        file: { url: "/test.pdf", size: 104088 },
        category: "Презентация",
      },
      {
        id: "ha8g92fvob",
        title: "Техническая документация",
        createdAt: "2025-12-19T21:08:15.443Z",
        file: { url: "/test.pdf", size: 724487 },
        category: "Подарок",
      },
      {
        id: "r6awbcqjhw",
        title: "Типовые формулировки контрактов",
        createdAt: "2022-01-26T18:08:06.712Z",
        file: { url: "/test.pdf", size: 317562 },
        category: "Буклет",
      },
      {
        id: "fi30dg2vxr",
        title: "Информационный буклет",
        createdAt: "2025-11-15T00:04:47.700Z",
        file: { url: "/test.pdf", size: 396040 },
        category: "Техническая документация",
      },
      {
        id: "kof4m0hinn",
        title: "Руководство по монтажу",
        createdAt: "2019-10-22T05:33:14.181Z",
        file: { url: "/test.pdf", size: 490249 },
        category: "Новые технологии",
      },
      {
        id: "c7k162xpg1",
        title: "Информационный буклет",
        createdAt: "2022-07-23T15:02:15.626Z",
        file: { url: "/test.pdf", size: 417330 },
        category: "Новые технологии",
      },
      {
        id: "1iw03vmhwt",
        title: "Спецификация материалов",
        createdAt: "2021-07-15T08:48:16.793Z",
        file: { url: "/test.pdf", size: 197102 },
        category: "Сертификаты",
      },
      {
        id: "06hq8w2pix",
        title: "Прайс-лист",
        createdAt: "2020-04-14T00:14:55.495Z",
        file: { url: "/test.pdf", size: 867063 },
        category: "Подарок",
      },
      {
        id: "ysiojd8x6l",
        title: "Каталог решений",
        createdAt: "2020-08-24T05:39:14.890Z",
        file: { url: "/test.pdf", size: 451770 },
        category: "Подарок",
      },
      {
        id: "jaaerep8hl",
        title: "Руководство по монтажу",
        createdAt: "2020-07-27T14:21:28.757Z",
        file: { url: "/test.pdf", size: 534288 },
        category: "Изменение цены",
      },
      {
        id: "imaiegu9sj",
        title: "Информационный буклет",
        createdAt: "2018-04-14T16:47:57.189Z",
        file: { url: "/test.pdf", size: 231223 },
        category: "Сертификаты",
      },
      {
        id: "4nt6v8nv7h",
        title: "Типовые формулировки контрактов",
        createdAt: "2021-01-09T09:30:10.375Z",
        file: { url: "/test.pdf", size: 366697 },
        category: "Подарок",
      },
      {
        id: "lw85fdapg6",
        title: "Спецификация материалов",
        createdAt: "2020-10-27T07:01:46.148Z",
        file: { url: "/test.pdf", size: 283210 },
        category: "Подарок",
      },
      {
        id: "fbfwaktim0",
        title: "Типовые формулировки контрактов",
        createdAt: "2025-06-26T23:38:12.964Z",
        file: { url: "/test.pdf", size: 316190 },
        category: "Презентация",
      },
      {
        id: "iet9omsexs",
        title: "Спецификация материалов",
        createdAt: "2023-04-28T13:46:29.750Z",
        file: { url: "/test.pdf", size: 729159 },
        category: "Сертификаты",
      },
      {
        id: "n74s1ppo3z",
        title: "Информационный буклет",
        createdAt: "2021-10-02T09:20:28.298Z",
        file: { url: "/test.pdf", size: 468683 },
        category: "Техническая документация",
      },
      {
        id: "g7bpdq1e6a",
        title: "Сертификат соответствия",
        createdAt: "2024-02-18T02:06:36.992Z",
        file: { url: "/test.pdf", size: 866811 },
        category: "Новые технологии",
      },
      {
        id: "urtadqgpx5",
        title: "Руководство по монтажу",
        createdAt: "2022-02-19T16:25:27.258Z",
        file: { url: "/test.pdf", size: 218457 },
        category: "Техническая документация",
      },
      {
        id: "4ha5oedoet",
        title: "Техническая документация",
        createdAt: "2018-07-14T09:46:19.469Z",
        file: { url: "/test.pdf", size: 840825 },
        category: "Каталог",
      },
      {
        id: "buib5f03dy",
        title: "Каталог решений",
        createdAt: "2021-03-05T12:22:15.086Z",
        file: { url: "/test.pdf", size: 503441 },
        category: "Типовой договор",
      },
      {
        id: "n6j85cu69c",
        title: "Сертификат соответствия",
        createdAt: "2019-05-12T06:05:55.707Z",
        file: { url: "/test.pdf", size: 263952 },
        category: "Каталог",
      },
      {
        id: "wu92ly46xn",
        title: "Информационный буклет",
        createdAt: "2025-05-04T13:30:01.919Z",
        file: { url: "/test.pdf", size: 699404 },
        category: "Техническая документация",
      },
      {
        id: "oawayywd9n",
        title: "Техническая документация",
        createdAt: "2023-06-06T19:26:44.530Z",
        file: { url: "/test.pdf", size: 142350 },
        category: "Новые технологии",
      },
      {
        id: "nan6v39obe",
        title: "Прайс-лист",
        createdAt: "2021-06-24T19:55:38.066Z",
        file: { url: "/test.pdf", size: 665751 },
        category: "Типовой договор",
      },
      {
        id: "rhctt627oh",
        title: "Техническая документация",
        createdAt: "2023-12-12T17:58:26.872Z",
        file: { url: "/test.pdf", size: 599259 },
        category: "Подарок",
      },
      {
        id: "p1vkdg748a",
        title: "Типовые формулировки контрактов",
        createdAt: "2018-10-07T00:27:39.467Z",
        file: { url: "/test.pdf", size: 753307 },
        category: "Подарок",
      },
      {
        id: "tzctmproqc",
        title: "Спецификация материалов",
        createdAt: "2022-08-08T04:52:45.728Z",
        file: { url: "/test.pdf", size: 642789 },
        category: "Типовой договор",
      },
      {
        id: "sickvmmww5",
        title: "Спецификация материалов",
        createdAt: "2021-09-11T09:15:43.797Z",
        file: { url: "/test.pdf", size: 547157 },
        category: "Подарок",
      },
      {
        id: "u8vuffciha",
        title: "Информационный буклет",
        createdAt: "2018-03-27T13:33:28.050Z",
        file: { url: "/test.pdf", size: 221444 },
        category: "Изменение цены",
      },
      {
        id: "nx0foamt2b",
        title: "Сертификат соответствия",
        createdAt: "2019-05-06T16:02:36.227Z",
        file: { url: "/test.pdf", size: 830011 },
        category: "Сертификаты",
      },
      {
        id: "cap3kxq9zg",
        title: "Техническая документация",
        createdAt: "2023-06-20T18:23:39.627Z",
        file: { url: "/test.pdf", size: 187615 },
        category: "Презентация",
      },
      {
        id: "sel56qnchs",
        title: "Информационный буклет",
        createdAt: "2025-02-19T11:35:44.577Z",
        file: { url: "/test.pdf", size: 718118 },
        category: "Техническая документация",
      },
      {
        id: "uvoc40ym36",
        title: "Спецификация материалов",
        createdAt: "2025-11-29T17:46:49.866Z",
        file: { url: "/test.pdf", size: 584768 },
        category: "Изменение цены",
      },
      {
        id: "uer430gdw5",
        title: "Типовые формулировки контрактов",
        createdAt: "2023-05-18T07:57:34.904Z",
        file: { url: "/test.pdf", size: 239737 },
        category: "Изменение цены",
      },
      {
        id: "dojclvcftw",
        title: "Презентация новых технологий",
        createdAt: "2018-02-14T11:34:56.971Z",
        file: { url: "/test.pdf", size: 707552 },
        category: "Новые технологии",
      },
      {
        id: "frv8msxi4m",
        title: "Сертификат соответствия",
        createdAt: "2019-08-26T20:22:37.244Z",
        file: { url: "/test.pdf", size: 616014 },
        category: "Новые технологии",
      },
      {
        id: "kk0zlgc6bx",
        title: "Типовые формулировки контрактов",
        createdAt: "2025-06-23T08:03:13.693Z",
        file: { url: "/test.pdf", size: 191686 },
        category: "Подарок",
      },
      {
        id: "v9p1lypbx5",
        title: "Презентация новых технологий",
        createdAt: "2021-12-22T10:18:29.135Z",
        file: { url: "/test.pdf", size: 834862 },
        category: "Техническая документация",
      },
      {
        id: "4geaqaorec",
        title: "Каталог решений",
        createdAt: "2025-02-12T02:58:12.158Z",
        file: { url: "/test.pdf", size: 639005 },
        category: "Техническая документация",
      },
      {
        id: "plvohi7zuj",
        title: "Спецификация материалов",
        createdAt: "2025-03-08T01:31:30.086Z",
        file: { url: "/test.pdf", size: 136284 },
        category: "Типовой договор",
      },
      {
        id: "eahjw23do4",
        title: "Руководство по монтажу",
        createdAt: "2021-03-25T11:50:26.112Z",
        file: { url: "/test.pdf", size: 616373 },
        category: "Презентация",
      },
      {
        id: "82qcnbkrp6",
        title: "Прайс-лист",
        createdAt: "2025-02-15T03:54:17.595Z",
        file: { url: "/test.pdf", size: 555004 },
        category: "Буклет",
      },
      {
        id: "ggrltxj13l",
        title: "Презентация новых технологий",
        createdAt: "2018-07-06T13:50:30.449Z",
        file: { url: "/test.pdf", size: 694233 },
        category: "Презентация",
      },
      {
        id: "ph4ue8rs1d",
        title: "Информационный буклет",
        createdAt: "2022-03-29T09:00:28.807Z",
        file: { url: "/test.pdf", size: 156495 },
        category: "Сертификаты",
      },
      {
        id: "hi8vznk54x",
        title: "Сертификат соответствия",
        createdAt: "2025-10-01T23:11:00.198Z",
        file: { url: "/test.pdf", size: 351688 },
        category: "Каталог",
      },
      {
        id: "4aeq3j4c0l",
        title: "Спецификация материалов",
        createdAt: "2018-07-09T18:53:38.517Z",
        file: { url: "/test.pdf", size: 591703 },
        category: "Каталог",
      },
      {
        id: "ikpyux8yvy",
        title: "Спецификация материалов",
        createdAt: "2021-06-23T03:31:45.874Z",
        file: { url: "/test.pdf", size: 737954 },
        category: "Буклет",
      },
      {
        id: "4c3pdlnnxl",
        title: "Информационный буклет",
        createdAt: "2018-03-09T04:02:26.473Z",
        file: { url: "/test.pdf", size: 798020 },
        category: "Сертификаты",
      },
      {
        id: "p1tcr5s2ab",
        title: "Презентация новых технологий",
        createdAt: "2025-02-12T13:12:40.774Z",
        file: { url: "/test.pdf", size: 104822 },
        category: "Подарок",
      },
      {
        id: "7udbhmn54r",
        title: "Прайс-лист",
        createdAt: "2020-02-10T23:13:21.654Z",
        file: { url: "/test.pdf", size: 521883 },
        category: "Изменение цены",
      },
      {
        id: "aos2zu9ah5",
        title: "Презентация новых технологий",
        createdAt: "2021-04-19T04:51:10.629Z",
        file: { url: "/test.pdf", size: 490211 },
        category: "Сертификаты",
      },
      {
        id: "66svzi78j9",
        title: "Руководство по монтажу",
        createdAt: "2020-10-11T16:51:08.930Z",
        file: { url: "/test.pdf", size: 871941 },
        category: "Сертификаты",
      },
      {
        id: "qwqc5601u",
        title: "Техническая документация",
        createdAt: "2020-08-11T23:46:08.609Z",
        file: { url: "/test.pdf", size: 219931 },
        category: "Буклет",
      },
      {
        id: "wl9hdgjara",
        title: "Презентация новых технологий",
        createdAt: "2022-08-08T18:05:39.961Z",
        file: { url: "/test.pdf", size: 240992 },
        category: "Презентация",
      },
      {
        id: "9dufjvv5my",
        title: "Информационный буклет",
        createdAt: "2025-01-24T01:10:36.680Z",
        file: { url: "/test.pdf", size: 339124 },
        category: "Подарок",
      },
      {
        id: "1xfbty1ygy",
        title: "Типовые формулировки контрактов",
        createdAt: "2022-08-13T00:50:26.113Z",
        file: { url: "/test.pdf", size: 186627 },
        category: "Буклет",
      },
      {
        id: "eo9x9m5eur",
        title: "Сертификат соответствия",
        createdAt: "2025-12-22T03:09:47.918Z",
        file: { url: "/test.pdf", size: 546746 },
        category: "Техническая документация",
      },
      {
        id: "g6tee7lhzw",
        title: "Руководство по монтажу",
        createdAt: "2025-05-20T10:05:05.235Z",
        file: { url: "/test.pdf", size: 536009 },
        category: "Новые технологии",
      },
      {
        id: "01umovm2e9",
        title: "Информационный буклет",
        createdAt: "2019-12-10T22:14:47.404Z",
        file: { url: "/test.pdf", size: 260684 },
        category: "Техническая документация",
      },
      {
        id: "5xw8k8cobt",
        title: "Каталог решений",
        createdAt: "2024-07-09T20:01:19.646Z",
        file: { url: "/test.pdf", size: 106854 },
        category: "Каталог",
      },
      {
        id: "bevndq171j",
        title: "Презентация новых технологий",
        createdAt: "2023-12-03T17:27:25.969Z",
        file: { url: "/test.pdf", size: 300300 },
        category: "Новые технологии",
      },
      {
        id: "8b7qe9umx5",
        title: "Прайс-лист",
        createdAt: "2025-08-03T06:29:48.556Z",
        file: { url: "/test.pdf", size: 712115 },
        category: "Подарок",
      },
      {
        id: "v0wrwekzn1",
        title: "Типовые формулировки контрактов",
        createdAt: "2019-03-13T19:41:36.167Z",
        file: { url: "/test.pdf", size: 362324 },
        category: "Подарок",
      },
      {
        id: "vm34bvy6fj",
        title: "Каталог решений",
        createdAt: "2020-07-23T20:22:57.365Z",
        file: { url: "/test.pdf", size: 800607 },
        category: "Изменение цены",
      },
      {
        id: "zirkfl57el",
        title: "Прайс-лист",
        createdAt: "2025-10-14T11:21:46.000Z",
        file: { url: "/test.pdf", size: 804141 },
        category: "Подарок",
      },
      {
        id: "47e0752oso",
        title: "Прайс-лист",
        createdAt: "2021-09-10T11:17:07.619Z",
        file: { url: "/test.pdf", size: 307481 },
        category: "Сертификаты",
      },
      {
        id: "l6p7o7sgwu",
        title: "Спецификация материалов",
        createdAt: "2023-02-10T20:15:28.366Z",
        file: { url: "/test.pdf", size: 724504 },
        category: "Каталог",
      },
      {
        id: "iavbab5qa7",
        title: "Спецификация материалов",
        createdAt: "2025-06-28T23:09:18.261Z",
        file: { url: "/test.pdf", size: 341452 },
        category: "Новые технологии",
      },
      {
        id: "93wayveyor",
        title: "Прайс-лист",
        createdAt: "2019-01-08T09:04:07.568Z",
        file: { url: "/test.pdf", size: 565808 },
        category: "Подарок",
      },
      {
        id: "zx8gqldv7b",
        title: "Техническая документация",
        createdAt: "2021-08-05T11:22:46.193Z",
        file: { url: "/test.pdf", size: 320805 },
        category: "Буклет",
      },
      {
        id: "zdzfeoezuo",
        title: "Техническая документация",
        createdAt: "2019-07-22T01:02:53.909Z",
        file: { url: "/test.pdf", size: 638713 },
        category: "Изменение цены",
      },
      {
        id: "3vpn5rs7zi",
        title: "Презентация новых технологий",
        createdAt: "2023-05-15T22:11:54.039Z",
        file: { url: "/test.pdf", size: 461858 },
        category: "Техническая документация",
      },
      {
        id: "r6yizgmell",
        title: "Типовые формулировки контрактов",
        createdAt: "2018-12-02T18:52:38.408Z",
        file: { url: "/test.pdf", size: 483112 },
        category: "Сертификаты",
      },
      {
        id: "244ctg8qw2",
        title: "Руководство по монтажу",
        createdAt: "2023-03-03T21:06:47.928Z",
        file: { url: "/test.pdf", size: 545723 },
        category: "Типовой договор",
      },
      {
        id: "7euy2nx9nu",
        title: "Руководство по монтажу",
        createdAt: "2022-08-29T17:23:07.478Z",
        file: { url: "/test.pdf", size: 212437 },
        category: "Сертификаты",
      },
      {
        id: "623fk7wd8d",
        title: "Сертификат соответствия",
        createdAt: "2021-10-23T02:23:38.759Z",
        file: { url: "/test.pdf", size: 156040 },
        category: "Типовой договор",
      },
      {
        id: "zouso7hwx",
        title: "Информационный буклет",
        createdAt: "2018-07-09T18:28:12.992Z",
        file: { url: "/test.pdf", size: 290137 },
        category: "Новые технологии",
      },
      {
        id: "97qsqyfz0l",
        title: "Руководство по монтажу",
        createdAt: "2021-03-11T06:52:55.856Z",
        file: { url: "/test.pdf", size: 717631 },
        category: "Буклет",
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
          isBanned: false,
          favorites: [],
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
          favorites: [],
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
          favorites: [],
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
          favorites: [],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "16",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "17",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "18",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "19",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
          createdAt: "2024-12-30T12:34:56Z",
        },
        {
          id: "20",
          title: "Перечень выдаваемой отделом проектирования документации",
          description:
            "Уважаемые Партнеры, По ссылке>> бюллетень c актуальным перечнем документации, выдаваемой отделом проектирования",
          img: {
            src: "/news-1.webp",
            alt: "Картинка завода Астрон",
          },
          content: [
            {
              type: "html",
              content:
                "<h2>Ежегодная складская конференция</h2><p>Коллеги, представляем вашему вниманию полный цикл сессий Ежегодной конференции Knight Frank 2022.</p><h3>Расписание сессий</h3><ul><li>Сессия 1. Общеэкономическая ситуация</li><li>Сессия 2. Тенденции и прогнозы развития рынка складской логистики</li><li>Сессия 3. Перспективы «логистики третьего поколения»</li><li>Сессия 4. E-commerce vs классический ретейл. Кто основной драйвер рынка?</li><li>Сессия 5. Промышленное строительство</li></ul><h3>Спикеры</h3><ol><li>Ягодкин Помидорослав</li><li>Травин Бананослав</li><li>Директоров Крутослав</li><li>Наследников Сынослав</li></ol>",
            },
            {
              type: "section",
              title: {
                type: "h2",
                text: "Прямая трансляция",
              },
              text: "<p>Репортёр от Astron Buildings в течении 72 часов неустанно будет осыпать вас свежими новостями</p>",
              media: {
                type: "video",
                src: "https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true",
                thumbnail: "/video-poster-1.webp",
              },
            },
          ],
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
          logo: "/company-logo.webp",
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
          logo: "/company-logo.webp",
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
          logo: "/company-logo.webp",
          certificate: "/",
          userId: "4",
        },
      ],
      documents,
      bulletins: [
        {
          id: "ce22n84su2",
          title: "Спецификация материалов",
          createdAt: "2025-08-24T16:09:19.556Z",
          file: { url: "/test.pdf", size: 889218 },
          category: "Каталог",
        },
        {
          id: "ki9aa763ds",
          title: "Руководство по монтажу",
          createdAt: "2025-06-04T11:06:59.352Z",
          file: { url: "/test.pdf", size: 543571 },
          category: "Техническая документация",
        },
        {
          id: "q163mgbckp",
          title: "Презентация новых технологий",
          createdAt: "2025-05-11T04:54:27.016Z",
          file: { url: "/test.pdf", size: 497099 },
          category: "Подарок",
        },
        {
          id: "i08e1ek1yr",
          title: "Информационный буклет",
          createdAt: "2025-06-30T21:41:05.662Z",
          file: { url: "/test.pdf", size: 878892 },
          category: "Подарок",
        },
        {
          id: "hm8rvq0vf9",
          title: "Сертификат соответствия",
          createdAt: "2025-06-18T10:53:44.006Z",
          file: { url: "/test.pdf", size: 305587 },
          category: "Буклет",
        },
        {
          id: "t5u1wqqv8x",
          title: "Информационный буклет",
          createdAt: "2025-07-13T15:34:25.535Z",
          file: { url: "/test.pdf", size: 472312 },
          category: "Каталог",
        },
        {
          id: "otgthmxjpm",
          title: "Прайс-лист",
          createdAt: "2025-09-22T20:47:53.344Z",
          file: { url: "/test.pdf", size: 291215 },
          category: "Каталог",
        },
        {
          id: "t4xsqii7po",
          title: "Спецификация материалов",
          createdAt: "2025-10-08T16:33:05.270Z",
          file: { url: "/test.pdf", size: 578991 },
          category: "Типовой договор",
        },
        {
          id: "h0yd3o421p",
          title: "Сертификат соответствия",
          createdAt: "2025-08-11T03:45:23.263Z",
          file: { url: "/test.pdf", size: 507102 },
          category: "Буклет",
        },
        {
          id: "pss5ul9amk",
          title: "Техническая документация",
          createdAt: "2025-07-30T10:44:16.902Z",
          file: { url: "/test.pdf", size: 316643 },
          category: "Сертификаты",
        },
        {
          id: "pvbgkc7f44",
          title: "Техническая документация",
          createdAt: "2025-10-08T13:35:08.482Z",
          file: { url: "/test.pdf", size: 456064 },
          category: "Каталог",
        },
        {
          id: "w14z01yhag",
          title: "Информационный буклет",
          createdAt: "2025-03-01T04:20:32.487Z",
          file: { url: "/test.pdf", size: 456252 },
          category: "Подарок",
        },
        {
          id: "ge1ods83ta",
          title: "Типовые формулировки контрактов",
          createdAt: "2025-02-22T21:42:52.316Z",
          file: { url: "/test.pdf", size: 779178 },
          category: "Каталог",
        },
        {
          id: "zj0iq6lc45",
          title: "Презентация новых технологий",
          createdAt: "2025-12-18T07:50:08.899Z",
          file: { url: "/test.pdf", size: 849983 },
          category: "Типовой договор",
        },
        {
          id: "x6jkccr92m",
          title: "Типовые формулировки контрактов",
          createdAt: "2025-07-02T13:41:47.888Z",
          file: { url: "/test.pdf", size: 351260 },
          category: "Каталог",
        },
        {
          id: "578gfr2srw",
          title: "Спецификация материалов",
          createdAt: "2025-09-18T10:48:37.743Z",
          file: { url: "/test.pdf", size: 533240 },
          category: "Каталог",
        },
        {
          id: "t438ltb97l",
          title: "Спецификация материалов",
          createdAt: "2025-05-28T15:10:52.662Z",
          file: { url: "/test.pdf", size: 242394 },
          category: "Техническая документация",
        },
        {
          id: "qlnk8h58v3",
          title: "Информационный буклет",
          createdAt: "2025-08-24T23:12:07.537Z",
          file: { url: "/test.pdf", size: 825054 },
          category: "Сертификаты",
        },
        {
          id: "bil23jm07i",
          title: "Спецификация материалов",
          createdAt: "2025-07-20T23:47:34.292Z",
          file: { url: "/test.pdf", size: 439061 },
          category: "Буклет",
        },
        {
          id: "i87zlv881k",
          title: "Информационный буклет",
          createdAt: "2025-06-10T14:23:11.378Z",
          file: { url: "/test.pdf", size: 704665 },
          category: "Каталог",
        },
        {
          id: "b1ocr74wir",
          title: "Информационный буклет",
          createdAt: "2025-09-05T19:17:40.505Z",
          file: { url: "/test.pdf", size: 104908 },
          category: "Изменение цены",
        },
        {
          id: "t7pxpci648",
          title: "Сертификат соответствия",
          createdAt: "2025-07-10T20:07:01.700Z",
          file: { url: "/test.pdf", size: 153806 },
          category: "Сертификаты",
        },
        {
          id: "bju0585s8b",
          title: "Типовые формулировки контрактов",
          createdAt: "2025-08-28T19:38:44.991Z",
          file: { url: "/test.pdf", size: 204382 },
          category: "Каталог",
        },
        {
          id: "3v0u490zb7",
          title: "Руководство по монтажу",
          createdAt: "2025-08-13T22:01:56.331Z",
          file: { url: "/test.pdf", size: 525828 },
          category: "Техническая документация",
        },
        {
          id: "0zzftlq3c6",
          title: "Типовые формулировки контрактов",
          createdAt: "2025-11-23T13:56:22.893Z",
          file: { url: "/test.pdf", size: 359294 },
          category: "Изменение цены",
        },
        {
          id: "jraj31srbc",
          title: "Типовые формулировки контрактов",
          createdAt: "2025-06-12T06:54:49.961Z",
          file: { url: "/test.pdf", size: 286514 },
          category: "Техническая документация",
        },
        {
          id: "t12zaih3as",
          title: "Каталог решений",
          createdAt: "2025-11-14T12:56:30.505Z",
          file: { url: "/test.pdf", size: 826058 },
          category: "Презентация",
        },
        {
          id: "0nwk5xlwc7",
          title: "Информационный буклет",
          createdAt: "2025-03-26T22:09:12.019Z",
          file: { url: "/test.pdf", size: 862166 },
          category: "Изменение цены",
        },
        {
          id: "il945fdfyq",
          title: "Сертификат соответствия",
          createdAt: "2025-05-11T19:06:17.985Z",
          file: { url: "/test.pdf", size: 710042 },
          category: "Сертификаты",
        },
        {
          id: "foldrf0ujt",
          title: "Презентация новых технологий",
          createdAt: "2025-12-21T19:10:07.612Z",
          file: { url: "/test.pdf", size: 257876 },
          category: "Каталог",
        },
        {
          id: "r67mqihg9w",
          title: "Сертификат соответствия",
          createdAt: "2025-06-02T09:07:23.538Z",
          file: { url: "/test.pdf", size: 456680 },
          category: "Изменение цены",
        },
        {
          id: "5hh9q6nbnc",
          title: "Спецификация материалов",
          createdAt: "2025-11-12T12:18:04.969Z",
          file: { url: "/test.pdf", size: 397104 },
          category: "Техническая документация",
        },
        {
          id: "fzcp46izsv",
          title: "Презентация новых технологий",
          createdAt: "2025-11-08T14:21:18.889Z",
          file: { url: "/test.pdf", size: 626612 },
          category: "Презентация",
        },
        {
          id: "iska4kaqnn",
          title: "Информационный буклет",
          createdAt: "2025-12-03T06:23:54.812Z",
          file: { url: "/test.pdf", size: 452438 },
          category: "Подарок",
        },
        {
          id: "aon03ejzqa",
          title: "Информационный буклет",
          createdAt: "2025-12-18T09:58:52.916Z",
          file: { url: "/test.pdf", size: 269112 },
          category: "Техническая документация",
        },
        {
          id: "7ugnm4ezyw",
          title: "Презентация новых технологий",
          createdAt: "2025-02-17T12:31:00.753Z",
          file: { url: "/test.pdf", size: 117514 },
          category: "Презентация",
        },
        {
          id: "rr0xcf6tmz",
          title: "Типовые формулировки контрактов",
          createdAt: "2025-08-12T12:03:42.898Z",
          file: { url: "/test.pdf", size: 210762 },
          category: "Изменение цены",
        },
        {
          id: "g2h2mxsowz",
          title: "Информационный буклет",
          createdAt: "2025-08-24T17:25:52.519Z",
          file: { url: "/test.pdf", size: 749327 },
          category: "Буклет",
        },
        {
          id: "idosi7syhx",
          title: "Презентация новых технологий",
          createdAt: "2025-07-22T23:20:56.443Z",
          file: { url: "/test.pdf", size: 317921 },
          category: "Презентация",
        },
        {
          id: "6cnfqnrc86",
          title: "Сертификат соответствия",
          createdAt: "2025-10-18T08:52:54.812Z",
          file: { url: "/test.pdf", size: 234754 },
          category: "Подарок",
        },
        {
          id: "blswb3o0zw",
          title: "Сертификат соответствия",
          createdAt: "2025-10-03T20:59:17.909Z",
          file: { url: "/test.pdf", size: 249752 },
          category: "Изменение цены",
        },
        {
          id: "guttovj9ol",
          title: "Руководство по монтажу",
          createdAt: "2025-06-13T14:06:01.212Z",
          file: { url: "/test.pdf", size: 598640 },
          category: "Сертификаты",
        },
        {
          id: "uw2cgguuly",
          title: "Руководство по монтажу",
          createdAt: "2025-04-02T10:03:48.815Z",
          file: { url: "/test.pdf", size: 617233 },
          category: "Сертификаты",
        },
        {
          id: "asq81n74et",
          title: "Информационный буклет",
          createdAt: "2025-04-24T13:10:42.588Z",
          file: { url: "/test.pdf", size: 442550 },
          category: "Буклет",
        },
        {
          id: "0wd6s5rduq",
          title: "Презентация новых технологий",
          createdAt: "2025-03-13T21:40:58.642Z",
          file: { url: "/test.pdf", size: 614290 },
          category: "Каталог",
        },
        {
          id: "tuy91nwctl",
          title: "Информационный буклет",
          createdAt: "2025-07-18T23:32:35.256Z",
          file: { url: "/test.pdf", size: 760501 },
          category: "Презентация",
        },
        {
          id: "3uhlgxler2",
          title: "Техническая документация",
          createdAt: "2025-09-16T17:23:09.460Z",
          file: { url: "/test.pdf", size: 498344 },
          category: "Типовой договор",
        },
        {
          id: "1j74jmvf8f",
          title: "Каталог решений",
          createdAt: "2025-07-29T19:47:48.016Z",
          file: { url: "/test.pdf", size: 463139 },
          category: "Сертификаты",
        },
        {
          id: "e67nyrnuy0",
          title: "Сертификат соответствия",
          createdAt: "2025-04-21T11:40:49.469Z",
          file: { url: "/test.pdf", size: 811850 },
          category: "Подарок",
        },
        {
          id: "gbxdrpse8s",
          title: "Презентация новых технологий",
          createdAt: "2025-11-13T19:23:02.241Z",
          file: { url: "/test.pdf", size: 264259 },
          category: "Новые технологии",
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
      academyProjects: [
        {
          id: "1",
          title: "Производственные объекты",
          description:
            "В Astron мы в качестве Производстенного объекта используем так называемую карту проекта",
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-projects-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-benefits-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-benefits-2.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-benefits-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-benefits-2.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-benefits-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-benefits-2.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-benefits-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-benefits-2.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-benefits-1.webp", alt: "Описание изображения" },
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
          img: { src: "/academy-benefits-2.webp", alt: "Описание изображения" },
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
