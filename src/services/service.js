import axios from "axios";
import { message } from "antd";

const service = axios.create({});

const serviceUtil = {
  get: function get(url, config) {
    return new Promise(async (res, rej) => {
      let response = await service.get(url, config);
      res(response);
    }).catch((error) => {
      message.error(error?.response?.data?.error);
    });
  },
  post: function post(url, data, config) {
    return new Promise(async (res, rej) => {
      let response = await service.post(url, data, config);
      res(response);
    }).catch((error) => {
      message.error(error?.response?.data?.error);
    });
  },
  put: function put(url, data, config) {
    return new Promise(async (res, rej) => {
      let response = await service.put(url, data, config);
      res(response);
    }).catch((error) => {
      message.error(error?.response?.data?.error);
    });
  },
};

export default serviceUtil;
