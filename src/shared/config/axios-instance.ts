import axios from "axios";
import { useAuth } from "../store/auth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
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
  const token = useAuth.getState().token;

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url !== "/api/refresh"
    ) {
      if (!isRefershQueryLoading) {
        isRefershQueryLoading = true;

        try {
          const { data } = await axiosInstance.get("/api/refresh");
          useAuth.setState({ token: data.accessToken });
          isRefershQueryLoading = false;
          callRefreshQuerySubcsribers(data.accessToken);
          refreshQuerySubscribers = [];
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          useAuth.setState({ token: null });
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
