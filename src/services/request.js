import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import { useLoadingStore } from "@/store/loading";

const loadingStore = useLoadingStore();

class HttpRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    this.instance.interceptors.request.use(
      this.requestInterceptor,
      this.handleError
    );
    this.instance.interceptors.response.use(
      this.responseInterceptor,
      this.handleError
    );
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get(config) {
    return this.request(Object.assign(config, { method: "get" }));
  }
  post(config) {
    return this.request(Object.assign(config, { method: "post" }));
  }
  requestInterceptor(config) {
    loadingStore.loading = true;
    return config;
  }

  responseInterceptor(response) {
    loadingStore.loading = false;
    return response.data;
  }
  handleError(error) {
    loadingStore.loading = false;
    return Promise.reject(error);
  }
}

export default new HttpRequest(BASE_URL, TIMEOUT);
