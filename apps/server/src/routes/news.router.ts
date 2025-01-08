import express, { Request, Response } from "express";
import cacheService from "../services/cache.service";
import { Error, News } from "../types/globals";

const newsRouter = express.Router();

newsRouter.get(
  "/",
  (req: Request, res: Response<{ data: News[]; nextPage: number | false }>) => {
    const { page = "1", limit = "10" } = req.query as {
      page: string;
      limit: string;
    };
    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const endIndex = parseInt(page) * parseInt(limit);

    const news = cacheService.getData().news.slice(startIndex, endIndex);
    const totalNews = cacheService.getData().news.length;
    const totalPages = Math.ceil(totalNews / parseInt(limit));
    const currentPage = parseInt(page);
    const nextPage = currentPage + 1;

    res.json({
      data: news,
      nextPage: nextPage <= totalPages ? nextPage : false,
    });
  }
);

newsRouter.get("/:newsId", (req: Request, res: Response<News | Error>) => {
  const newsId = req.params.newsId;
  const news = cacheService.getData().news.find((news) => news.id === newsId);

  if (!news) {
    res
      .status(404)
      .json({ message: "Новость с такими идентификатором не найдена" });
    return;
  }

  res.json(news);
});

export { newsRouter };
