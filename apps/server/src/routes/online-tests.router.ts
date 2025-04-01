import { Request, Response, Router } from "express";
import { InfoBlock } from "../types/globals";

const onlineTestsRouter = Router();

onlineTestsRouter.get("/", (req: Request, res: Response<InfoBlock[]>) => {
  res.json([
    {
      type: "html",
      content:
        "<h2>UI Type</h2><p><a href='https://ui-type.vercel.app/' target='_blank'>Ссылка на ui-type</a></p>",
    },
  ]);
});

export { onlineTestsRouter };
