import { setResume } from "../redux/resume/resume.actions";
import { axiosInstance } from "./axios"

export const getResumesData = (email, password) => {
    return axiosInstance
        .get("resumes")
        .then(res => {
            localStorage.setItem("accessToken", res.data.accessToken);
            return true
        })
}

export const publishResume = (data) => {
    return async (dispatch) => {
        axiosInstance
            .post("resumes", data)
            .then(res => {
                dispatch(setResume(res.data))
            })
            .catch((err) => console.log(err, 'error'))
    }
}
