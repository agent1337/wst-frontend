import { axiosInstance } from "./axios"

export const getResumesData = (email, password) => {
    return axiosInstance
        .get("resumes")
        .then(res => {
            localStorage.setItem("accessToken", res.data.accessToken);
            return true
        })
}