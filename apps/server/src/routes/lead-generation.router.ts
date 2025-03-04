import { Request, Response, Router } from "express";
import {
  LeadGenerationItem,
  LeadGenerationMonth,
  LeadGenerationQuarterPassed,
} from "../types/globals";
import dbService from "../services/db.service";
import { authMiddleware } from "../middlewares/auth.middleware";

const leadGenerationRouter = Router();

leadGenerationRouter.get(
  "/list",
  authMiddleware,
  (
    req: Request,
    res: Response<{
      data: LeadGenerationItem[];
      uploadedAt: string;
      updatedAt: string;
    }>
  ) => {
    const { year } = req.query as { year: string };

    res.json({
      data: dbService
        .get("leadGenerations")
        .filter(
          (lead) => new Date(lead.fixedAt).getFullYear() === parseInt(year)
        ),
      updatedAt: new Date().toISOString(),
      uploadedAt: new Date().toISOString(),
    });
  }
);

leadGenerationRouter.get(
  "/plan",
  authMiddleware,
  (
    req: Request,
    res: Response<{
      months: LeadGenerationMonth[];
      quarterPassed: LeadGenerationQuarterPassed[];
    }>
  ) => {
    const { year } = req.query as { year: string };

    const list = dbService.get("leadGenerations").filter((lead) => {
      const fixedAt = new Date(
        new Date(lead.fixedAt).getFullYear(),
        new Date(lead.fixedAt).getMonth(),
        new Date(lead.fixedAt).getDate(),
        12,
        0,
        0,
        0
      );

      return fixedAt.getFullYear() === Number(year);
    });

    const group = list.reduce((acc, item) => {
      const monthIndex = new Date(item.fixedAt).getMonth();

      if (acc.has(monthIndex)) {
        acc.set(monthIndex, acc.get(monthIndex) + 1);
      } else {
        acc.set(monthIndex, 1);
      }

      return acc;
    }, new Map<number, number>());

    const months: LeadGenerationMonth[] = [];

    for (const [idx, value] of group.entries()) {
      months.push({ monthIdx: idx, value });
    }

    res.json({
      months,
      quarterPassed: [
        { quarter: 1, value: 5 },
        { quarter: 2, value: 7 },
        { quarter: 3, value: 4 },
        { quarter: 4, value: 8 },
      ],
    });
  }
);

leadGenerationRouter.get(
  "/uploaded-years",
  (req: Request, res: Response<string[]>) => {
    const list = dbService.get("leadGenerations");
    const years = list
      .map((item) => new Date(item.fixedAt).getFullYear())
      .sort((a, b) => b - a)
      .map((year) => year.toString());

    res.json(Array.from(new Set(years)));
  }
);

export { leadGenerationRouter };
