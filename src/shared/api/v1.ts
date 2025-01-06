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
  })
  .strict();
const Error = z.object({ message: z.string() }).strict();
const restoreUserPassword_Body = z
  .object({
    email: z.string(),
    oldPassword: z.string(),
    newPassword: z.string(),
  })
  .strict();
const Success = z.object({ message: z.string() }).strict();
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
    password: z.string(),
    tokenVersion: z.number().int(),
    isBanned: z.boolean(),
  })
  .strict();

export const schemas = {
  signIn_Body,
  Session,
  Error,
  restoreUserPassword_Body,
  Success,
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
    path: "/api/user/restore-password",
    alias: "restoreUserPassword",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: restoreUserPassword_Body,
      },
    ],
    response: z.object({ message: z.string() }).strict(),
    errors: [
      {
        status: 400,
        description: `Ошибка`,
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
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
