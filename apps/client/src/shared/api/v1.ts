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
    projects: z.number().int(),
    projectsLink: z.string(),
    projectsImplementedArea: z.number().int(),
    cooperationYears: z.number().int(),
    logo: z.string(),
    certificate: z.string(),
    userId: z.string(),
  })
  .strict();
const News = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    img: z.string(),
    content: z.string(),
    createdAt: z.string().datetime({ offset: true }),
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
  News,
  User,
};

const endpoints = makeApi([
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
      .object({
        data: z.array(News),
        nextPage: z.union([z.number(), z.boolean()]),
      })
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
    path: "/api/user/company",
    alias: "getUserCompany",
    requestFormat: "json",
    response: Company,
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
