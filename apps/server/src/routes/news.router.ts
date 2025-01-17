import express, { Request, Response } from "express";
import dbService from "../services/db.service";
import { Error, News } from "../types/globals";

const newsRouter = express.Router();

newsRouter.get(
  "/",
  (req: Request, res: Response<{ data: News[]; nextPage: number }>) => {
    const { page = "1", limit = "10" } = req.query as {
      page: string;
      limit: string;
    };
    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const endIndex = parseInt(page) * parseInt(limit);

    const news = dbService.get("news").slice(startIndex, endIndex);
    const totalNews = dbService.get("news").length;
    const totalPages = Math.ceil(totalNews / parseInt(limit));
    const currentPage = parseInt(page);
    const nextPage = currentPage + 1;

    res.json({
      data: news,
      nextPage: nextPage <= totalPages ? nextPage : 0,
    });
  }
);

newsRouter.get("/:newsId", (req: Request, res: Response<News | Error>) => {
  const newsId = req.params.newsId;
  const news = dbService.get("news").find((news) => news.id === newsId);

  if (!news) {
    res
      .status(404)
      .json({ message: "Новость с такими идентификатором не найдена" });
    return;
  }

  res.json(news);
});

export { newsRouter };
