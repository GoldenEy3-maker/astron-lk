import { Request, Response, Router } from "express";
import dbService from "../services/db.service";
import { Document, DocumentCategory } from "../types/globals";

const documentsRouter = Router();

documentsRouter.get(
  "/",
  (
    req: Request,
    res: Response<{
      data: Document[];
      nextPage: number;
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
      .filter((doc) => (category ? doc.category.slug === category : true))
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    const totalPages = Math.ceil(documents.length / parseInt(limit));
    const currentPage = parseInt(page);
    const nextPage = currentPage + 1;

    res.json({
      data: documents.slice(startIndex, endIndex),
      nextPage: nextPage <= totalPages ? nextPage : 0,
      totalPages,
    });
  }
);

documentsRouter.get(
  "/categories",
  (req: Request, res: Response<DocumentCategory[]>) => {
    const categories = dbService.get("documentCategories");
    res.json(categories);
  }
);

documentsRouter.get("/all", (req: Request, res: Response<Document[]>) => {
  const documents = dbService.get("documents");
  res.json(documents);
});

export { documentsRouter };
