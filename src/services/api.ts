import {constants} from '@utils';
import axios from 'axios';

let api = `${constants.baseUrl}/api/`;

const instance = axios.create({
  baseURL: api,
  timeout: 3000,
});

// instance interceptors request
instance.interceptors.request.use(async req => {
  // const token = ""
  // if (token != null) {
  //   req.headers.Authorization = `Bearer ${token}`;
  // }
  return req;
});

// instance interceptor response
instance.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    return Promise.reject(error);
  },
);

const get = (url: string, params?: any) => {
  return instance.get(url, {params});
};
export {get};
