import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const User = z
  .object({
    id: z.string(),
    surname: z.string(),
    name: z.string(),
    patronymic: z.string(),
    email: z.string(),
    password: z.string(),
  })
  .strict();
const changeUserPassword_Body = z
  .object({ oldPassword: z.string(), newPassword: z.string() })
  .strict();
const login_Body = z
  .object({ login: z.string(), password: z.string(), remember: z.boolean() })
  .strict();
const News = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    createdAt: z.string(),
  })
  .strict();

export const schemas = {
  User,
  changeUserPassword_Body,
  login_Body,
  News,
};

const endpoints = makeApi([
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
    response: User,
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
    path: "/api/news",
    alias: "listNews",
    requestFormat: "json",
    response: z.array(News),
  },
  {
    method: "get",
    path: "/api/users",
    alias: "listUsers",
    requestFormat: "json",
    response: z.array(User),
  },
  {
    method: "get",
    path: "/api/users/:userId",
    alias: "getUserById",
    requestFormat: "json",
    parameters: [
      {
        name: "userId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: User,
    errors: [
      {
        status: 404,
        description: `Пользователь не найден`,
        schema: z.object({ message: z.string() }).strict(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/users/:userId/change-password",
    alias: "changeUserPassword",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: changeUserPassword_Body,
      },
      {
        name: "userId",
        type: "Path",
        schema: z.string(),
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
