
import { axiosInstance } from "../../api/axios"
import { SET_ALERT } from "../alert/alert.constants";
import { CREATE_RESUME, GET_RESUME, REMOVE_SELECTED_RESUME, SET_PROFILE, SET_RESUMES } from "./profile.constants";

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

export const getResume = (id) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.get(`/resumes/${id}`)

            dispatch({
                type: GET_RESUME,
                payload: response.data
            })
        }
        catch (err) {
            console.log(err.response.data.message)
        }
    }
}

export const createResume = (data) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.post('resumes', data)

            dispatch ({
                type: CREATE_RESUME,
                payload: response
              })
        }
        catch (error) {
            
        }
    }
}

export const removeSelectedResume = (resumeId) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.delete(`resumes/` + resumeId)

            console.log(response.data, 'response.data')

            dispatch({
                type: REMOVE_SELECTED_RESUME,
                payload: response.data
            })
            dispatch({
                type: SET_ALERT,
                payload: `${response.data.resumeTitle} was delete`
            })
        }
        catch (err) {
            console.log(err.response.data.message)
        }
    }
}
