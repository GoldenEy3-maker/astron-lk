import { axiosInstance } from "../config/axios-instance";
import { createApiClient } from "./v1";

export { schemas } from "./v1";

export const apiClient = createApiClient(
  import.meta.env.VITE_API_URL ?? "http://localhost:3000",
  {
    axiosInstance: axiosInstance,
    axiosConfig: {
      withCredentials: true,
    },
  },
);
