import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const login_Body = z
  .object({ login: z.string(), password: z.string(), remember: z.boolean() })
  .strict();
const restoreUserPassword_Body = z
  .object({ oldPassword: z.string(), newPassword: z.string() })
  .strict();
const Session = z
  .object({
    email: z.string(),
    surname: z.string(),
    name: z.string(),
    patronymic: z.string(),
  })
  .strict();
const News = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    createdAt: z.string(),
  })
  .strict();
const User = z
  .object({
    id: z.string(),
    surname: z.string(),
    name: z.string(),
    patronymic: z.string(),
    email: z.string(),
    password: z.string(),
    tokenVersion: z.number().int(),
    isBanned: z.boolean(),
  })
  .strict();

export const schemas = {
  login_Body,
  restoreUserPassword_Body,
  Session,
  News,
  User,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/api/getSession",
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
    method: "post",
    path: "/api/login",
    alias: "login",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: login_Body,
      },
    ],
    response: z.object({ accessToken: z.string() }).strict(),
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
    path: "/api/news",
    alias: "listNews",
    requestFormat: "json",
    response: z.array(News),
  },
  {
    method: "get",
    path: "/api/refreshToken",
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
    path: "/api/restorePassword",
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
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
