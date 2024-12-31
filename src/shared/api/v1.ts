import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const User = z
  .object({ id: z.string(), name: z.string(), email: z.string() })
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
  News,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/news",
    alias: "listNews",
    requestFormat: "json",
    response: z.array(News),
  },
  {
    method: "post",
    path: "/news",
    alias: "createPost",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: News,
      },
    ],
    response: News,
  },
  {
    method: "get",
    path: "/users",
    alias: "listUsers",
    requestFormat: "json",
    response: z.array(User),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
