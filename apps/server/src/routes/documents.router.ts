import express, { Request, Response } from "express";
import dbService from "../services/db.service";
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

    const documents = dbService
      .get("documents")
      .filter((doc) => (category ? doc.category === category : true));

    const totalPages = Math.ceil(documents.length / parseInt(limit));
    const currentPage = parseInt(page);
    const nextPage = currentPage + 1;

    res.json({
      data: documents.slice(startIndex, endIndex),
      nextPage: nextPage <= totalPages ? nextPage : false,
      totalPages,
    });
  }
);

documentsRouter.get("/categories", (req: Request, res: Response) => {
  const categories = new Set(
    dbService.get("documents").map((doc) => doc.category)
  );
  res.json(Array.from(categories));
});

export { documentsRouter };
