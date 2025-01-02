import { SignJWT, jwtVerify } from "jose";

const ACCESS_TOKEN_SECRET = "dawdkwalkdmwalkdm";
const REFRESH_TOKEN_SECRET = "dwakmdlkawdmklwad";

export default new (class TokenService {
  async generateTokens(payload) {
    const { id, email, tokenVersion } = payload;

    const accessToken = await new SignJWT({ email })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("15m")
      .sign(new TextEncoder().encode(ACCESS_TOKEN_SECRET));
    const refreshToken = await new SignJWT({ id, tokenVersion })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("30d")
      .sign(new TextEncoder().encode(REFRESH_TOKEN_SECRET));

    return { accessToken, refreshToken };
  }

  async verifyAccessToken(token) {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(ACCESS_TOKEN_SECRET)
      );

      return payload;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async verifyRefreshToken(token) {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(REFRESH_TOKEN_SECRET)
      );

      return payload;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  sendRefreshToken(res, token) {
    res.cookie("refresh", token, {
      domain: "localhost",
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });
  }
})();
