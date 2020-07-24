import axios from "axios";
import { message } from "antd";

class Service {
  constructor() {
    let service = axios.create({});

    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    switch (error?.response?.status) {
      case 403:
        message.error("Invalid session. Please try signing in again.");
        break;
      case 404:
        message.error("Not found");
        break;
      default:
        message.error("Internal server error.");
        break;
    }
    return Promise.reject(error);
  };

  get(path, params) {
    return this.service.get(path, { params: params });
  }

  post(path, payload) {
    return this.service.post(path, payload);
  }
}

let service = new Service();
export default service;
