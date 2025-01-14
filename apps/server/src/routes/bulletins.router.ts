import express, { Request, Response } from "express";
import dbService from "../services/db.service";
import { Bulletin } from "../types/globals";

const bulletinsRouter = express.Router();

bulletinsRouter.get(
  "/",
  (
    req: Request,
    res: Response<{
      data: Bulletin[];
      nextPage: number | false;
      totalPages: number;
    }>
  ) => {
    const {
      page = "1",
      limit = "10",
      category,
      sort = "latest",
      fromDate,
      toDate,
    } = req.query as {
      page?: string;
      limit?: string;
      category?: string;
      sort?: "latest" | "oldest";
      fromDate?: string;
      toDate?: string;
    };
    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const endIndex = parseInt(page) * parseInt(limit);

    const bulletins = dbService
      .get("bulletins")
      .sort((a, b) => {
        if (sort === "oldest") {
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        }

        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      })
      .filter((bulletin) => (category ? bulletin.category === category : true))
      // .filter((bulletin) => {
      //   if (fromDate && toDate)
      //     return (
      //       new Date(bulletin.createdAt) >= new Date(fromDate) &&
      //       new Date(bulletin.createdAt) <= new Date(toDate)
      //     );

      //   if (fromDate) return new Date(bulletin.createdAt) >= new Date(fromDate);

      //   return true;
      // })
      .slice(startIndex, endIndex);
    const totalBulletins =
      // .filter((bulletin) => {
      //   if (fromDate && toDate)
      //     return (
      //       new Date(bulletin.createdAt) >= new Date(fromDate) &&
      //       new Date(bulletin.createdAt) <= new Date(toDate)
      //     );

      //   return true;
      // })
      dbService
        .get("documents")
        .filter((bulletin) =>
          category ? bulletin.category === category : true
        ).length;
    const totalPages = Math.ceil(totalBulletins / parseInt(limit));
    const currentPage = parseInt(page);
    const nextPage = currentPage + 1;

    res.json({
      data: bulletins,
      nextPage: nextPage <= totalPages ? nextPage : false,
      totalPages,
    });
  }
);

bulletinsRouter.get("/categories", (req: Request, res: Response) => {
  const categories = new Set(
    dbService.get("bulletins").map((bulletin) => bulletin.category)
  );
  res.json(Array.from(categories));
});

export { bulletinsRouter };
