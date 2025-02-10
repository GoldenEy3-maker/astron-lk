import { Request, Response, Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { PartnerCard, PartnerInList, PartnerInSelect } from "../types/globals";
import dbService from "../services/db.service";

const partnersRouter = Router();

partnersRouter.get(
  "/session",
  authMiddleware,
  (req: Request, res: Response<PartnerCard>) => {
    const partnerId = res.locals.user.partnerId;
    const partner = dbService
      .get("partners")
      .find((partner) => partner.id === partnerId);

    res.json({
      id: partner.id,
      title: partner.title,
      projects: partner.projects
        ? {
            count: partner.projects.count,
            link: partner.projects.link,
            implementedArea: partner.projects.implementedArea,
          }
        : undefined,
      cooperationYears: partner.cooperationYears,
      logo: partner.logo,
      certificate: partner.certificate,
    });
  }
);

partnersRouter.get(
  "/select",
  authMiddleware,
  (req: Request, res: Response<PartnerInSelect[]>) => {
    res.json(
      dbService.get("partners").map((partner) => ({
        id: partner.id,
        title: partner.title,
      }))
    );
  }
);

partnersRouter.get(
  "/uploaded-date",
  authMiddleware,
  (req: Request, res: Response<string>) => {
    res.json("2024-01-01T12:00:00.000Z");
  }
);

partnersRouter.get(
  "/",
  authMiddleware,
  (req: Request, res: Response<PartnerInList[]>) => {
    const { sort } = req.query as {
      sort:
        | "asc-sales"
        | "desc-sales"
        | "asc-bookings"
        | "desc-bookings"
        | "asc-name"
        | "desc-name";
    };

    const partners = dbService
      .get("partners")
      .sort((a, b) => {
        switch (sort) {
          case "asc-sales":
            return a.sales.total - b.sales.total;
          case "desc-sales":
            return b.sales.total - a.sales.total;
          case "asc-bookings":
            return a.booking.total - b.booking.total;
          case "desc-bookings":
            return b.booking.total - a.booking.total;
          case "asc-name":
            return a.title.localeCompare(b.title);
          case "desc-name":
            return b.title.localeCompare(a.title);
        }
      })
      .map((partner) => ({
        id: partner.id,
        title: partner.title,
        logo: partner.logo,
        sales: partner.sales,
        booking: partner.booking,
      }));

    res.json(partners);
  }
);

partnersRouter.get(
  "/:id",
  authMiddleware,
  (req: Request, res: Response<PartnerCard>) => {
    const partnerId = req.params.id;
    const partner = dbService
      .get("partners")
      .find((partner) => partner.id === partnerId);

    res.json({
      id: partner.id,
      title: partner.title,
      projects: {
        count: partner.projects.count,
        link: partner.projects.link,
        implementedArea: partner.projects.implementedArea,
      },
      cooperationYears: partner.cooperationYears,
      logo: partner.logo,
      certificate: partner.certificate,
    });
  }
);

export { partnersRouter };
