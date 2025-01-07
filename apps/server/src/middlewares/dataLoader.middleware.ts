import { NextFunction } from "express";
import { Request, Response } from "express";
import cacheService from "../services/cache.service";

export async function dataLoaderMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (cacheService.getData().users.length === 0) {
    await cacheService.loadAll();
  }

  req.users = cacheService.getData().users;
  req.news = cacheService.getData().news;
  req.companies = cacheService.getData().companies;
  next();
}
