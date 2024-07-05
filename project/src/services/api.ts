import axios, { AxiosInstance } from 'axios';

const backendUrl = 'https://10.react.htmlacademy.pro/wtw';
const requestTimeout = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: backendUrl ,
    timeout: requestTimeout,
  });
  return api;
};
