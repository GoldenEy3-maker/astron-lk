import express, { Request, Response } from "express";
import cacheService from "../services/cache.service";
import { Document } from "../types/globals";

const documentsRouter = express.Router();

documentsRouter.get(
  "/",
  (
    req: Request,
    res: Response<{
      data: Document[];
      nextPage: number | false;
      totalPages: number;
    }>
  ) => {
    const {
      page = "1",
      limit = "10",
      category,
    } = req.query as {
      page?: string;
      limit?: string;
      category?: string;
    };
    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const endIndex = parseInt(page) * parseInt(limit);

    const documents = cacheService
      .getData()
      .documents.filter((doc) => (category ? doc.category === category : true))
      .slice(startIndex, endIndex);
    const totalDocuments = cacheService
      .getData()
      .documents.filter((doc) =>
        category ? doc.category === category : true
      ).length;
    const totalPages = Math.ceil(totalDocuments / parseInt(limit));
    const currentPage = parseInt(page);
    const nextPage = currentPage + 1;

    res.json({
      data: documents,
      nextPage: nextPage <= totalPages ? nextPage : false,
      totalPages,
    });
  }
);

documentsRouter.get("/categories", (req: Request, res: Response) => {
  const categories = new Set(
    cacheService.getData().documents.map((doc) => doc.category)
  );
  res.json(Array.from(categories));
});

export { documentsRouter };
