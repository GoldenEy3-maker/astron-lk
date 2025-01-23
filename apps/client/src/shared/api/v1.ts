import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const signIn_Body = z
  .object({
    login: z.string(),
    password: z.string(),
    remember: z.boolean().optional(),
  })
  .strict();
const Session = z
  .object({
    email: z.string(),
    surname: z.string(),
    name: z.string(),
    patronymic: z.string().optional(),
    phone: z.string(),
    favorites: z.array(z.string()),
  })
  .strict();
const Error = z.object({ message: z.string() }).strict();
const Success = z.object({ message: z.string() }).strict();
const changeUserPassword_Body = z
  .object({ password: z.string(), newPassword: z.string() })
  .strict();
const recoveryUserPassword_Body = z
  .object({ password: z.string(), token: z.string() })
  .strict();
const Company = z
  .object({
    id: z.string(),
    title: z.string(),
    projects: z
      .object({
        count: z.number().int(),
        link: z.string(),
        implementedArea: z.number().int(),
      })
      .strict(),
    cooperationYears: z.number().int(),
    logo: z.string(),
    certificate: z.string(),
    userId: z.string(),
  })
  .strict();
const Document = z
  .object({
    id: z.string(),
    title: z.string(),
    file: z.object({ url: z.string(), size: z.number().int() }).strict(),
    category: z.string(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .strict();
const Bulletin = z
  .object({
    id: z.string(),
    title: z.string(),
    file: z.object({ url: z.string(), size: z.number().int() }).strict(),
    category: z.string(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .strict();
const Favorite = z.union([Document, Bulletin]);
const Image = z
  .object({ src: z.string(), alt: z.string().optional() })
  .strict();
const News = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    img: Image,
    content: z.string(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .strict();
const SearchResult = z
  .object({
    id: z.string(),
    title: z.string(),
    type: z.enum(["news", "document", "bulletin"]),
    description: z.string().optional(),
    fileUrl: z.string().optional(),
  })
  .strict();
const EmployeeTesting = z
  .object({
    id: z.string(),
    test: z.string(),
    name: z.string(),
    result: z.number().int(),
  })
  .strict();
const sendFeedback_Body = z
  .object({
    fio: z.string(),
    phone: z.string(),
    message: z.string(),
    privacy: z.boolean(),
    personalData: z.boolean(),
  })
  .strict();
const Video = z
  .object({
    src: z.string(),
    thumbnail: z.string(),
    alt: z.string().optional(),
  })
  .strict();
const FactoryTeam = z
  .object({
    id: z.string(),
    img: Image,
    role: z.string(),
    title: z.string(),
    phone: z.string(),
    email: z.string(),
  })
  .strict();
const ImageBlock = z
  .object({
    type: z.literal("image"),
    src: z.string(),
    alt: z.string().optional(),
  })
  .strict();
const VideoBlock = z
  .object({
    type: z.literal("video"),
    src: z.string(),
    thumbnail: z.string(),
    alt: z.string().optional(),
  })
  .strict();
const MediaBlock = z.discriminatedUnion("type", [ImageBlock, VideoBlock]);
const SectionBlock = z
  .object({
    type: z.literal("section"),
    title: z
      .object({ type: z.enum(["h1", "h2", "h3"]), text: z.string() })
      .strict(),
    text: z.string().optional(),
    media: MediaBlock.optional(),
    documents: z.array(Document).optional(),
  })
  .strict();
const SeparatorBlock = z.object({ type: z.literal("separator") }).strict();
const HtmlBlock = z
  .object({ type: z.literal("html"), content: z.string() })
  .strict();
const InfoBlock = z.discriminatedUnion("type", [
  SectionBlock,
  SeparatorBlock,
  HtmlBlock,
]);
const AcademySales = z
  .object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    content: z.array(InfoBlock),
  })
  .strict();
const User = z
  .object({
    id: z.string(),
    surname: z.string(),
    name: z.string(),
    patronymic: z.string().optional(),
    email: z.string(),
    phone: z.string(),
    password: z.string(),
    tokenVersion: z.number().int(),
    isBanned: z.boolean(),
    favorites: z.array(z.string()),
  })
  .strict();

export const schemas = {
  signIn_Body,
  Session,
  Error,
  Success,
  changeUserPassword_Body,
  recoveryUserPassword_Body,
  Company,
  Document,
  Bulletin,
  Favorite,
  Image,
  News,
  SearchResult,
  EmployeeTesting,
  sendFeedback_Body,
  Video,
  FactoryTeam,
  ImageBlock,
  VideoBlock,
  MediaBlock,
  SectionBlock,
  SeparatorBlock,
  HtmlBlock,
  InfoBlock,
  AcademySales,
  User,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/api/academy/sales",
    alias: "getAcademySales",
    requestFormat: "json",
    response: z.array(AcademySales),
  },
  {
    method: "get",
    path: "/api/bulletins",
    alias: "getBulletins",
    requestFormat: "json",
    parameters: [
      {
        name: "page",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "category",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "sort",
        type: "Query",
        schema: z.enum(["latest", "oldest"]).optional().default("latest"),
      },
      {
        name: "fromDate",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "toDate",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: z
      .object({
        data: z.array(Bulletin),
        totalPages: z.number().int(),
        nextPage: z.number().int(),
      })
      .strict(),
  },
  {
    method: "get",
    path: "/api/bulletins/categories",
    alias: "getBulletinCategories",
    requestFormat: "json",
    response: z.array(z.string()),
  },
  {
    method: "get",
    path: "/api/documents",
    alias: "getDocuments",
    requestFormat: "json",
    parameters: [
      {
        name: "page",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "category",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: z
      .object({
        data: z.array(Document),
        totalPages: z.number().int(),
        nextPage: z.number().int(),
      })
      .strict(),
  },
  {
    method: "get",
    path: "/api/documents/categories",
    alias: "getDocumentCategories",
    requestFormat: "json",
    response: z.array(z.string()),
  },
  {
    method: "get",
    path: "/api/factory",
    alias: "getFactoryInfo",
    requestFormat: "json",
    response: z
      .object({
        text: z.string(),
        img: Image,
        video: Video,
        document: Document,
      })
      .strict(),
  },
  {
    method: "get",
    path: "/api/factory/team",
    alias: "getFactoryTeam",
    requestFormat: "json",
    response: z.array(FactoryTeam),
  },
  {
    method: "post",
    path: "/api/feedback",
    alias: "sendFeedback",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: sendFeedback_Body,
      },
    ],
    response: z.object({ message: z.string() }).strict(),
  },
  {
    method: "get",
    path: "/api/kpi/employee-testing",
    alias: "getEmployeeTesting",
    requestFormat: "json",
    parameters: [
      {
        name: "period",
        type: "Query",
        schema: z.enum([
          "all",
          "today",
          "month",
          "quarter",
          "year",
          "prev-year",
          "prev-prev-year",
        ]),
      },
    ],
    response: z.array(EmployeeTesting),
  },
  {
    method: "get",
    path: "/api/news",
    alias: "getNews",
    requestFormat: "json",
    parameters: [
      {
        name: "page",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
    ],
    response: z
      .object({ data: z.array(News), nextPage: z.number().int() })
      .strict(),
  },
  {
    method: "get",
    path: "/api/news/:id",
    alias: "getNewsById",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: News,
    errors: [
      {
        status: 404,
        description: `Новость с таким ID не найдена`,
        schema: z.object({ message: z.string() }).strict(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/search",
    alias: "search",
    requestFormat: "json",
    parameters: [
      {
        name: "query",
        type: "Query",
        schema: z.string(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
    ],
    response: z
      .object({
        data: z.array(SearchResult),
        totalPages: z.number().int(),
        totalResults: z.number().int(),
        nextPage: z.number().int(),
      })
      .strict(),
  },
  {
    method: "get",
    path: "/api/user/company",
    alias: "getUserCompany",
    requestFormat: "json",
    response: Company,
    errors: [
      {
        status: 401,
        description: `Пользователь не авторизован`,
        schema: z.object({ message: z.string() }).strict(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/user/favorites",
    alias: "getUserFavorites",
    requestFormat: "json",
    parameters: [
      {
        name: "page",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
    ],
    response: z
      .object({
        data: z.array(Favorite),
        nextPage: z.number().int(),
        totalPages: z.number().int(),
      })
      .strict(),
    errors: [
      {
        status: 401,
        description: `Пользователь не авторизован`,
        schema: z.object({ message: z.string() }).strict(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/user/favorites/add",
    alias: "addFavorite",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({ id: z.string() }).strict(),
      },
    ],
    response: z.object({ message: z.string() }).strict(),
    errors: [
      {
        status: 401,
        description: `Пользователь не авторизован`,
        schema: z.object({ message: z.string() }).strict(),
      },
      {
        status: 404,
        description: `Документ/бюллетень с таким ID не найден`,
        schema: z.object({ message: z.string() }).strict(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/user/favorites/remove",
    alias: "removeFavorite",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({ id: z.string() }).strict(),
      },
    ],
    response: z.object({ message: z.string() }).strict(),
    errors: [
      {
        status: 401,
        description: `Пользователь не авторизован`,
        schema: z.object({ message: z.string() }).strict(),
      },
      {
        status: 404,
        description: `Документ/бюллетень с таким ID не найден`,
        schema: z.object({ message: z.string() }).strict(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/user/password/change",
    alias: "changeUserPassword",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: changeUserPassword_Body,
      },
    ],
    response: z.object({ message: z.string() }).strict(),
    errors: [
      {
        status: 400,
        description: `Введен неверный пароль`,
        schema: z.object({ message: z.string() }).strict(),
      },
      {
        status: 401,
        description: `Пользователь не авторизован`,
        schema: z.object({ message: z.string() }).strict(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/user/password/recovery",
    alias: "recoveryUserPassword",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: recoveryUserPassword_Body,
      },
    ],
    response: z.object({ message: z.string() }).strict(),
    errors: [
      {
        status: 403,
        description: `Время на восстановление пароля по этой ссылке истекло`,
        schema: z.object({ message: z.string() }).strict(),
      },
      {
        status: 404,
        description: `Пользователь с таким ID токена не найден`,
        schema: z.object({ message: z.string() }).strict(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/user/password/send-link",
    alias: "sendRecoveryPasswordLink",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({ email: z.string() }).strict(),
      },
    ],
    response: z.object({ message: z.string() }).strict(),
    errors: [
      {
        status: 404,
        description: `Пользователь с таким email не найден`,
        schema: z.object({ message: z.string() }).strict(),
      },
      {
        status: 500,
        description: `Ошибка при отправке письма`,
        schema: z.object({ message: z.string() }).strict(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/user/session",
    alias: "getSession",
    requestFormat: "json",
    response: Session,
    errors: [
      {
        status: 401,
        description: `Ошибка авторизации`,
        schema: z.object({ message: z.string() }).strict(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/user/session/refresh",
    alias: "refreshToken",
    requestFormat: "json",
    response: z.object({ accessToken: z.string() }).strict(),
    errors: [
      {
        status: 401,
        description: `Ошибка авторизации`,
        schema: z.object({ message: z.string() }).strict(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/user/sign-in",
    alias: "signIn",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: signIn_Body,
      },
    ],
    response: z.object({ accessToken: z.string(), user: Session }).strict(),
    errors: [
      {
        status: 400,
        description: `Ошибка ввода данных`,
        schema: z.object({ message: z.string() }).strict(),
      },
      {
        status: 403,
        description: `Пользователь забанен`,
        schema: z.object({ message: z.string() }).strict(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/user/sign-out",
    alias: "signOut",
    requestFormat: "json",
    response: z.object({ message: z.string() }).strict(),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
