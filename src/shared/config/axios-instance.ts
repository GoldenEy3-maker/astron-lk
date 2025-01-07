import axios from "axios";
import { useSession } from "../lib/session-store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:3000"
    : "https://astron-lk-tawny.vercel.app",
  withCredentials: true,
});

type RefreshQuerySubscriber = (token: string) => void;

let isRefershQueryLoading = false;
let refreshQuerySubscribers: RefreshQuerySubscriber[] = [];

function callRefreshQuerySubcsribers(token: string) {
  refreshQuerySubscribers.map((callback) => callback(token));
}

function addRefreshQuerySubscriber(callback: RefreshQuerySubscriber) {
  refreshQuerySubscribers.push(callback);
}

axiosInstance.interceptors.request.use((config) => {
  const token = useSession.getState().token;

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url !== "/api/user/session/refresh"
    ) {
      if (!isRefershQueryLoading) {
        isRefershQueryLoading = true;

        try {
          const { data } = await axiosInstance.get("/api/user/session/refresh");
          useSession.setState({ token: data.accessToken });
          isRefershQueryLoading = false;
          callRefreshQuerySubcsribers(data.accessToken);
          refreshQuerySubscribers = [];
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          useSession.setState({ token: null });
          isRefershQueryLoading = false;
          callRefreshQuerySubcsribers("");
          refreshQuerySubscribers = [];
          return Promise.reject(refreshError);
        }
      }

      return new Promise((resolve, reject) => {
        addRefreshQuerySubscriber((token) => {
          if (token) {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axiosInstance(originalRequest));
          } else {
            reject(error);
          }
        });
      });
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
