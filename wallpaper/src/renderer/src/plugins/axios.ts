import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'

const http = axios.create({
  // baseURL: import.meta.env.DEV ? 'http://localhost:3000' : 'https://www.hdcms.com/api',
  baseURL: 'http://localhost:3000',
  timeout: 10000
})

// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    ElLoading.service({ fullscreen: true })
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    ElMessage({
      message: error.response.data.message,
      type: 'error',
      duration: 3000,
      center: false,
      grouping: true
    })
    return Promise.reject(error)
  }
)

export { http }
