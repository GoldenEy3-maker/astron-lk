import { Response } from "express";
import { SignJWT, jwtVerify } from "jose";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const RECOVERY_PASSWORD_TOKEN_SECRET =
  process.env.RECOVERY_PASSWORD_TOKEN_SECRET;

type AccessTokenPayload = {
  email: string;
};

type RefreshTokenPayload = {
  id: string;
  tokenVersion: number;
  remember: boolean;
};

type RecoveryPasswordTokenPayload = {
  id: string;
};

export default new (class TokenService {
  async generateTokens(payload: AccessTokenPayload & RefreshTokenPayload) {
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

  async generateRecoveryPasswordToken(payload: RecoveryPasswordTokenPayload) {
    const { id } = payload;

    const token = await new SignJWT({ id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(new TextEncoder().encode(RECOVERY_PASSWORD_TOKEN_SECRET));

    return token;
  }

  async verifyAccessToken(token: string): Promise<AccessTokenPayload | null> {
    try {
      const { payload } = await jwtVerify<AccessTokenPayload>(
        token,
        new TextEncoder().encode(ACCESS_TOKEN_SECRET)
      );

      return payload;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async verifyRefreshToken(token: string): Promise<RefreshTokenPayload | null> {
    try {
      const { payload } = await jwtVerify<RefreshTokenPayload>(
        token,
        new TextEncoder().encode(REFRESH_TOKEN_SECRET)
      );

      return payload;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async verifyRecoveryPasswordToken(
    token: string
  ): Promise<RecoveryPasswordTokenPayload | null> {
    try {
      const { payload } = await jwtVerify<RecoveryPasswordTokenPayload>(
        token,
        new TextEncoder().encode(RECOVERY_PASSWORD_TOKEN_SECRET)
      );

      return payload;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  sendRefreshToken(res: Response, token: string, remember: boolean) {
    res.cookie("refresh", token, {
      domain: process.env.CLIENT_DOMAIN ?? "localhost",
      httpOnly: true,
      secure: !!process.env.CLIENT_DOMAIN,
      sameSite: "lax",
      maxAge: remember ? 1000 * 60 * 60 * 24 * 30 : undefined,
    });
  }
})();
