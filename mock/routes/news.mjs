import express from "express";

const newsRouter = express.Router();

newsRouter.get("/", (req, res) => {
  return res.json(req.news);
});

export { newsRouter };
