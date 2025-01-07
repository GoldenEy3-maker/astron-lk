import { axiosInstance } from "../config/axios-instance";
import { createApiClient } from "./v1";

export { schemas } from "./v1";

export const apiClient = createApiClient(
  import.meta.env.DEV
    ? "http://localhost:3000"
    : "https://astron-lk-tawny.vercel.app",
  {
    axiosInstance: axiosInstance,
    axiosConfig: {
      withCredentials: true,
    },
  }
);
