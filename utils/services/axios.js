/** @format */

import axios from 'axios'
import cookiesService from './cookies'

const axiosApiInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL_LOCAL || process.env.NEXT_PUBLIC_API_URL,
})

// Request interceptor for API Calls
axiosApiInstance.interceptors.request.use(
  (config) => {
    const token = cookiesService.getAccessToken()
    if (token) {
      config.headers['Authorization'] = token
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptor for API Calls
axiosApiInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosApiInstance
