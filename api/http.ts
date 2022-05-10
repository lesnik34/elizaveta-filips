import axios, { AxiosRequestConfig } from "axios";

const Http = {
  Private: axios.create({
    baseURL: process.env.RES_URL,
    timeout: 10000,
    headers: {
      // Authorization: `Bearer ${token}`,
    },
  }),

  Public: axios.create({
    baseURL: process.env.RES_URL,
    timeout: 10000,
  }),
};

const requestHandler = (request: AxiosRequestConfig) => request;
const errorHandler = (error: any) => Promise.reject(error);

Http.Private.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

Http.Public.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

export default Http;
