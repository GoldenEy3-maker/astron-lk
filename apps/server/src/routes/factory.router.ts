import { Request, Response, Router } from "express";
import { Document } from "../types/globals";
import dbService from "../services/db.service";

const factoryRouter = Router();

factoryRouter.get("/document", (req: Request, res: Response<Document>) => {
  const documents = dbService.get("documents");
  res.json(documents[Math.floor(Math.random() * documents.length)]);
});

export { factoryRouter };
