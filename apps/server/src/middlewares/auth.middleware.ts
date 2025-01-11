import dbService from "../services/db.service";
import tokenService from "../services/token.service";
import { Request, Response, NextFunction } from "express";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (String(accessToken) === "undefined") {
    res.status(401).json({ message: "Пользователь не авторизован!" });
    return;
  }

  const accessTokenPayload = await tokenService.verifyAccessToken(
    accessToken ?? ""
  );

  if (!accessTokenPayload) {
    res.status(401).json({ message: "Пользователь не авторизован!" });
    return;
  }

  const user = dbService
    .get("users")
    .find((user) => user.email === accessTokenPayload.email);

  if (!user) {
    res.status(401).json({ message: "Пользователь не авторизован!" });
    return;
  }

  res.locals.user = user;

  next();
}
