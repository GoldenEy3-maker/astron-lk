import { Request, Response, Router } from "express";
import {
  LeadGenerationList,
  LeadGenerationMonth,
  LeadGenerationQuarterPassed,
} from "../types/globals";
import dbService from "../services/db.service";
import { authMiddleware } from "../middlewares/auth.middleware";

const leadGenerationRouter = Router();

leadGenerationRouter.get(
  "/list",
  authMiddleware,
  (req: Request, res: Response<LeadGenerationList[]>) => {
    res.json(dbService.get("leadGenerations"));
  }
);

leadGenerationRouter.get(
  "/plan",
  authMiddleware,
  (req: Request, res: Response<LeadGenerationMonth[]>) => {
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

    const data: LeadGenerationMonth[] = [];

    for (const [idx, value] of group.entries()) {
      data.push({ monthIdx: idx, value });
    }

    res.json(data);
  }
);

leadGenerationRouter.get(
  "/uploaded-dates",
  (req: Request, res: Response<{ uploadedAt: string; updatedAt: string }>) => {
    res.json({
      updatedAt: new Date().toISOString(),
      uploadedAt: new Date().toISOString(),
    });
  }
);

leadGenerationRouter.get(
  "/uploaded-years",
  (req: Request, res: Response<string[]>) => {
    const list = dbService.get("leadGenerations");
    const years = list
      .map((item) => new Date(item.fixedAt).getFullYear().toString())
      .sort((a, b) => parseInt(b) - parseInt(a));

    res.json(Array.from(new Set(years)));
  }
);

leadGenerationRouter.get(
  "/quarter-passed",
  (req: Request, res: Response<LeadGenerationQuarterPassed[]>) => {
    res.json([
      { quarter: 1, value: 5 },
      { quarter: 2, value: 7 },
      { quarter: 3, value: 4 },
      { quarter: 4, value: 8 },
    ]);
  }
);

export { leadGenerationRouter };
