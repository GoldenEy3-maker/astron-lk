import { Request, Response, Router } from "express";
import dbService from "../services/db.service";
import { Bulletin, Document, News, SearchResult } from "../types/globals";

const searchRouter = Router();

function prepareSearchString(str: string) {
  return str.toLowerCase().trim();
}

searchRouter.get(
  "/",
  (
    req: Request,
    res: Response<{
      data: SearchResult[];
      nextPage: number;
      totalPages: number;
      totalResults: number;
    }>
  ) => {
    const {
      query,
      page = "1",
      limit = "10",
    } = req.query as {
      query?: string;
      page?: string;
      limit?: string;
    };

    if (!query) {
      res.json({
        data: [],
        nextPage: 0,
        totalPages: 0,
        totalResults: 0,
      });
      return;
    }

    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const endIndex = parseInt(page) * parseInt(limit);

    const news = dbService
      .get("news")
      .filter(
        (news) =>
          prepareSearchString(news.title).includes(
            prepareSearchString(query)
          ) ||
          prepareSearchString(news.description).includes(
            prepareSearchString(query)
          )
      )
      .map((item) => ({
        ...item,
        type: "news",
      }));
    const bulletins = dbService
      .get("bulletins")
      .filter(
        (bulletin) =>
          prepareSearchString(bulletin.title).includes(
            prepareSearchString(query)
          ) ||
          prepareSearchString(bulletin.category.slug).includes(
            prepareSearchString(query)
          )
      )
      .map((item) => ({
        ...item,
        type: "bulletin",
      }));
    const documents = dbService
      .get("documents")
      .filter(
        (document) =>
          prepareSearchString(document.title).includes(
            prepareSearchString(query)
          ) ||
          prepareSearchString(document.category.slug).includes(
            prepareSearchString(query)
          )
      )
      .map((item) => ({
        ...item,
        type: "document",
      }));

    const result: SearchResult[] = [...news, ...bulletins, ...documents].map(
      (res) => {
        if (res.type === "news") {
          return {
            id: res.id,
            title: res.title,
            type: "news",
            description: (res as Omit<News, "isReaded">).description,
          };
        }

        return {
          id: res.id,
          title: res.title,
          fileUrl: (res as Document | Bulletin).file.url,
          type: res.type as "news" | "bulletin" | "document",
        };
      }
    );

    const totalResults = result.length;
    const totalPages = Math.ceil(totalResults / parseInt(limit));
    const currentPage = parseInt(page);
    const nextPage = currentPage + 1;

    res.json({
      data: result.slice(startIndex, endIndex),
      nextPage: nextPage <= totalPages ? nextPage : 0,
      totalPages,
      totalResults,
    });
  }
);

export { searchRouter };
