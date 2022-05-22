// src/service/index.ts

import axios, { AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { CancelRequestSource, RequestConfig, RequestInterceptors } from './types';

class Request {
  // axios instance
  instance: AxiosInstance
  // interceptor instance
  interceptorsObj?: RequestInterceptors<AxiosResponse>
  // a map to save cancel method
  cancelRequestSourceList?: CancelRequestSource[]
  // a map for all request url
  requestUrlList?: string[]

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors
    this.cancelRequestSourceList = []
    this.requestUrlList = []

    // execute order: interface req -> instance req -> global req ->
    // instance res -> global res -> interface res
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('global request interceptor');
        return res
      },
      (err: any) => err
    )
    
    // use instance's interceptor
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('global response interceptor');
        return res.data
      },
      (err: any) => err
    )

  }

  private getSourceIndex(url: string) {
    return this.cancelRequestSourceList?.findIndex(
      (item: CancelRequestSource) => {
        return Object.keys(item)[0] === url
      }
    ) as number
  }

  /**
   * @description del requestUrlList and cancelRequestSourceList
   * @param url 
   * @returns {*}
   */
  private delUrl(url: string) {
    const urlIndex = this.requestUrlList.findIndex(u => u === url)
    const sourceIndex = this.getSourceIndex(url)
    
    urlIndex !== -1 && this.requestUrlList?.splice(urlIndex as number, 1)
    sourceIndex !== -1 && this.cancelRequestSourceList?.splice(sourceIndex as number, 1)
  }

  // cancel all request
  cancelAllRequest() {
    this.cancelRequestSourceList?.forEach(source => {
      const key = Object.keys(source)[0]
      source[key]()
    })
  }

  // cancel request
  cancelRequest(url: string | string[]) {
    if (typeof url === 'string') {
      const sourceIndex = this.getSourceIndex(url)
      sourceIndex !== -1 && this.cancelRequestSourceList?.[sourceIndex][url]()
    } else {
      url.forEach(u => {
        const sourceIndex = this.getSourceIndex(u)
        sourceIndex !== -1 && this.cancelRequestSourceList?.[sourceIndex][u]()
      })

    }
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // use interceptor for single request if defined
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }

      const url = config.url
      if (url) {
        this.requestUrlList?.push(url)
        config.cancelToken = new axios.CancelToken(c => {
          this.cancelRequestSourceList?.push({
            [url]: c
          })
        })
      }

      this.instance
      .request<any, T>(config)
      .then(res => {
        // use interceptor for single request if defined
        if (config.interceptors.responseInterceptors) {
          res = config.interceptors.responseInterceptors(res)
        }
        resolve(res)
      })
      .catch((err: any) => {
        reject(err)
      })
      .finally(() => {
        url && this.delUrl(url)
      })
    })
  }
}

export default Request
export { RequestConfig, RequestInterceptors }