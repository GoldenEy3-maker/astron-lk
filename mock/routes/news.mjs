import express from "express";

const newsRouter = express.Router();

newsRouter.get("/", (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const news = req.news.slice(startIndex, endIndex);
  const totalNews = req.news.length;
  const totalPages = Math.ceil(totalNews / limit);
  const currentPage = parseInt(page);
  const nextPage = currentPage + 1;

  return res.json({
    data: news,
    nextPage: nextPage <= totalPages ? nextPage : false,
  });
});

export { newsRouter };
