import { SignJWT, jwtVerify } from "jose";

const ACCESS_TOKEN_SECRET = "dawdkwalkdmwalkdm";
const REFRESH_TOKEN_SECRET = "dwakmdlkawdmklwad";
const RECOVERY_PASSWORD_TOKEN_SECRET = "dwadsad213213adawsd";

export default new (class TokenService {
  async generateTokens(payload) {
    const { id, email, tokenVersion, remember } = payload;

    const accessToken = await new SignJWT({ email })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("15m")
      .sign(new TextEncoder().encode(ACCESS_TOKEN_SECRET));
    const refreshToken = await new SignJWT({ id, tokenVersion, remember })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(remember ? "30d" : "1d")
      .sign(new TextEncoder().encode(REFRESH_TOKEN_SECRET));

    return { accessToken, refreshToken };
  }

  async generateRecoveryPasswordToken(payload) {
    const { id } = payload;

    const token = await new SignJWT({ id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(new TextEncoder().encode(RECOVERY_PASSWORD_TOKEN_SECRET));

    return token;
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

  async verifyRecoveryPasswordToken(token) {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(RECOVERY_PASSWORD_TOKEN_SECRET)
      );

      return payload;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  sendRefreshToken(res, token, remember) {
    res.cookie("refresh", token, {
      domain: "localhost",
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: remember ? 1000 * 60 * 60 * 24 * 30 : undefined,
    });
  }
})();
