import { useAuthenticationStore } from "@/stores/authentication";
import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_ACCOUNTS_SERVICE,
  withCredentials: false,
});

service.interceptors.request.use(
  (config) => {
    const authentication = useAuthenticationStore();
    config.headers[authentication.head] = authentication.getFullToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
