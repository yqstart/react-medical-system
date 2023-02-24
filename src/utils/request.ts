import axios from "axios";
import { geToken, serverUrl } from "./tool";
// @ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const instance = axios.create({
  baseURL: serverUrl,
  timeout: 5000,
  withCredentials: true, // cookie
});

instance.interceptors.request.use(
  (config) => {
    config.headers.token = geToken();
    NProgress.start()
    return config;
  },
  (error) => {
      NProgress.done()
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
      NProgress.done()
    return response;
  },
  (error) => {
      NProgress.done()
    return Promise.reject(error);
  }
);

export const GET = (url: string, params: any = {}) =>
  instance.get(url, { params }).then((res) => res.data);
export const POST = (url: string, data: any = {}) =>
  instance.post(url, data).then((res) => res.data);
export const PUT = (url: string, data: any = {}) =>
  instance.put(url, data).then((res) => res.data);
export const PATCH = (url: string, data: any = {}) =>
  instance.patch(url, data).then((res) => res.data);
export const DELETE = (url: string) =>
  instance.delete(url).then((res) => res.data);
