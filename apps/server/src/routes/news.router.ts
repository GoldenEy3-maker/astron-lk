import express from "express";

const newsRouter = express.Router();

newsRouter.get("/", (req, res) => {
  const { page = "1", limit = "10" } = req.query as {
    page: string;
    limit: string;
  };
  const startIndex = (parseInt(page) - 1) * parseInt(limit);
  const endIndex = parseInt(page) * parseInt(limit);

  const news = req.news.slice(startIndex, endIndex);
  const totalNews = req.news.length;
  const totalPages = Math.ceil(totalNews / parseInt(limit));
  const currentPage = parseInt(page);
  const nextPage = currentPage + 1;

  res.json({
    data: news,
    nextPage: nextPage <= totalPages ? nextPage : false,
  });
});

newsRouter.get("/:newsId", (req, res) => {
  const newsId = req.params.newsId;
  const news = req.news.find((news) => news.id === newsId);

  if (!news) {
    res
      .status(404)
      .json({ message: "Новость с такими идентификатором не найдена" });
    return;
  }

  res.json(news);
});

export { newsRouter };
