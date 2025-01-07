import tokenService from "./services/token.service.mjs";

export async function authMiddleware(req, res, next) {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (String(accessToken) === "undefined")
    return res.status(401).json({ message: "Пользователь не авторизован!" });

  const accessTokenPayload = await tokenService.verifyAccessToken(accessToken);

  if (!accessTokenPayload)
    return res.status(401).json({ message: "Пользователь не авторизован!" });

  const user = req.users.find(
    (user) => user.email === accessTokenPayload.email
  );

  if (!user)
    return res.status(401).json({ message: "Пользователь не авторизован!" });

  req.user = user;

  next();
}
