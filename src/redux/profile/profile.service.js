
import { axiosInstance } from "../../api/axios"
import { SET_PROFILE, SET_RESUMES } from "./profile.constants";

export const getProfile = () => {
    return async dispatch => {
        try {
            const response = await axiosInstance.get("auth/me")
            
            dispatch({
                type: SET_PROFILE,
                payload: response.data
            })
        }
        catch (err) {
            console.log(err.response.data.message)
        }
    }
}

export const getResumes = () => {
    return async dispatch => {
        try {
            const response = await axiosInstance.get("resumes")
            
            dispatch({
                type: SET_RESUMES,
                payload: response.data
            })
        }
        catch (err) {
            console.log(err.response.data.message)
        }
    }
}