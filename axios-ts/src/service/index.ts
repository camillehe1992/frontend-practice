// index.ts

import { AxiosResponse } from "axios";
import Request from "./request";
import type { RequestConfig } from "./request/types";

export interface MyResponse<T> {
  code: number
  message: string
  data: T
}

// redefine response type
interface MyRequestConfig<T, R> extends RequestConfig<MyResponse<R>> {
  data?: T
}

const request = new Request({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // request interceptor
    requestInterceptors: config => {
      console.log('instance request interceptor');
      return config
    },
    // response interceptor
    responseInterceptors: (res: AxiosResponse) => {
      console.log('instance response interceptor');
      return res
    }
  }
})

/**
 * @description A packaged http request
 * @interface D req params interface
 * @interface T res params interface
 * @param {MyRequestConfig} config  
 * @returns {Promise}
 */
const myRequest = <D = any, T = any>(config: MyRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return request.request<MyResponse<T>>(config)
}

// cancel request
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
} 

// cancel all requests
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default myRequest
