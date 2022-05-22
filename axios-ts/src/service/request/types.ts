// types.ts
import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestInterceptors<T> {
  // request interceptor
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any

  // response interceptor
  responseInterceptors?: (config: T) => T
  responseInterceptorsCatch?: (err: any) => any
  
}

// AxiosRequestConfig is not support to define interceptor, so we define a customized RequestConfig
// to extend AxiosRequestConfig
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}

export interface CancelRequestSource {
  [index: string]: () => void
}