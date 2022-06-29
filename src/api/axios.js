import axios from "axios"

const baseURL = `http://localhost:4040/`

export const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.interceptors.request.use(request => {
  const accessToken = localStorage.getItem("accessToken")
  if (accessToken != null && request.headers) {
    request.headers.Authorization = `Bearer ${accessToken}`
    return request
  }
  return request
})

axiosInstance.interceptors.response.use(
  res => {
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
