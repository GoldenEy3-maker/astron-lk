import { Request, Response, Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { employeeTestingRouter } from "./employee-testing.router";
import { leadGenerationRouter } from "./lead-generation.router";
import { retailingRouter } from "./retailing.router";

const kpiRouter = Router();

kpiRouter.get(
  "/uploaded-date",
  authMiddleware,
  (req: Request, res: Response<string>) => {
    res.json("2024-01-01T12:00:00.000Z");
  }
);

kpiRouter.use("/employee-testing", employeeTestingRouter);
kpiRouter.use("/lead-generation", leadGenerationRouter);
kpiRouter.use("/retailing", retailingRouter);

export { kpiRouter };
