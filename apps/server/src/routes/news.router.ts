import { Request, Response, Router } from "express";
import dbService from "../services/db.service";
import { Error, News, NewsInList, Success } from "../types/globals";
import { authMiddleware } from "../middlewares/auth.middleware";

const newsRouter = Router();

newsRouter.get(
  "/",
  (req: Request, res: Response<{ data: NewsInList[]; nextPage: number }>) => {
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
      data: news.map(({ content, ...news }) => news),
      nextPage: nextPage <= totalPages ? nextPage : 0,
    });
  }
);

newsRouter.post(
  "/read",
  authMiddleware,
  (req: Request, res: Response<Success>) => {
    const { user } = res.locals;
    const { id } = req.body;

    dbService.insert("newsReadedByUsers", {
      userId: user.id,
      newsId: id,
      createdAt: new Date().toISOString(),
    });
    res.json({ message: "Новость прочитана" });
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

  if (news.id === "1") {
    res.json({ ...news, img: undefined });
  }

  res.json(news);
});

export { newsRouter };
