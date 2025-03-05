import { Request, Response, Router } from "express";
import { Retailing, RetailingQuartersPlan } from "../types/globals";
import dbService from "../services/db.service";
import dateService from "../services/date.service";

const retailingRouter = Router();

type RetailingQueryType = "sales" | "booking";

retailingRouter.get("/", (req: Request, res: Response<Retailing[]>) => {
  const { type, year } = req.query as {
    type: RetailingQueryType;
    year: string;
  };
  const queryKey = type === "sales" ? "sales" : "bookings";
  const data = dbService
    .get(queryKey)
    .filter(
      (item) => new Date(item.createdAt).getFullYear() === parseInt(year)
    );

  res.json(
    data.map((item) => ({
      ...item,
      monthIdx: new Date(item.createdAt).getMonth(),
      createdAt: type === "booking" ? item.createdAt : undefined,
    }))
  );
});

retailingRouter.get(
  "/quarters-plan",
  (req: Request, res: Response<RetailingQuartersPlan>) => {
    const { type, year } = req.query as {
      type: RetailingQueryType;
      year: string;
    };
    const queryKey = type === "sales" ? "sales" : "bookings";

    const data = dbService
      .get(queryKey)
      .filter(
        (item) => new Date(item.createdAt).getFullYear() === parseInt(year)
      );

    res.json({
      data: Array.from({ length: 4 }, (_, idx) => ({
        quarter: idx + 1,
        plan: 7500000,
        fact: data.reduce((acc, item) => {
          const currQuarter = idx + 1;
          const itemQuarter = dateService.getFiscalQuarter(
            new Date(item.createdAt)
          );

          if (currQuarter === itemQuarter) acc += item.sum;

          return acc;
        }, 0),
      })),
      updatedAt: new Date(data[0].createdAt).toISOString(),
      uploadedAt: new Date(data[0].createdAt).toISOString(),
    });
  }
);

retailingRouter.get(
  "/uploaded-years",
  (req: Request, res: Response<string[]>) => {
    const { type } = req.query as { type: RetailingQueryType };
    const queryKey = type === "sales" ? "sales" : "bookings";
    const years = dbService
      .get(queryKey)
      .map((item) => new Date(item.createdAt).getFullYear())
      .sort((a, b) => b - a)
      .map((item) => item.toString());

    res.json(Array.from(new Set(years)));
  }
);

export { retailingRouter };
