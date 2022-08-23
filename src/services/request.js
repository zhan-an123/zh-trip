import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class HttpRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
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
}

export default new HttpRequest(BASE_URL, TIMEOUT);
