
import { axiosInstance } from "../../api/axios"
import { setAlert } from "../alert/alert.actions";
import { SET_ALERT } from "../alert/alert.constants";
import { 
    CLONE_SELECTED_RESUME, 
    CREATE_RESUME, 
    GET_MEDIA, 
    GET_OWN_RESUME, 
    REMOVE_SELECTED_RESUME, 
    SET_PROFILE, 
    GET_OWN_RESUMES_DATA, 
    GET_OTHER_RESUME_DATA,
    SAVE_TO_MY_LIST,
    GET_OTHER_RESUME,
    GET_NATIONALITY,
} from "./profile.constants";

export const getProfile = () => {
    return async dispatch => {
        try {
            const response = await axiosInstance.get("auth/me")
        
            dispatch({
                type: SET_PROFILE,
                payload: response.data
            })
        }
        catch (error) {
            console.log(error.response.data.message)
        }
    }
}

export const getOwnResumeData = () => {
    return async dispatch => {
        try {
            const response = await axiosInstance.get("resumes/own")

            dispatch({
                type: GET_OWN_RESUMES_DATA,
                payload: response.data
            })
        }
        catch (error) {
            console.log(error.response.data.message)
        }
    }
}


export const getOtherResumeData = () => {
    return async dispatch => {
        try {
            const response = await axiosInstance.get("resumes/others")

            dispatch({
                type: GET_OTHER_RESUME_DATA,
                payload: response.data
            })
        }
        catch (error) {
            console.log(error.response.data.message)
        }
    }
}

export const getOwnResume = (id) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.get(`/resumes/own/${id}`)

            dispatch({
                type: GET_OWN_RESUME,
                payload: response.data
            })
        }
        catch (error) {
            console.log(error.response.data.message)
        }
    }
}

export const getOtherResume = (id) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.get(`/resumes/other/${id}`)

            dispatch({
                type: GET_OTHER_RESUME,
                payload: response.data
            })
        }
        catch (error) {
            console.log(error.response.data.message)
        }
    }
}

export const getUploadedFiles = (id) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.get(`/media/${id}`)

            dispatch({
                type: GET_MEDIA,
                payload: response.data
            })
        }
        catch (error) {
            console.log(error.response.data.message)
        }
    }
}

export const getNationality = () => {
    return async dispatch => {
        try {
            const response = await axiosInstance.get("nationality")
        
            dispatch({
                type: GET_NATIONALITY,
                payload: response.data
            })
        }
        catch (error) {
            dispatch(setAlert(error.response.data.message))
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
            dispatch(setAlert(error.response.data.message))
        }
    }
}

export const saveToMyList = (id) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.post(`resumes/save/${id}`)

            dispatch ({
                type: SAVE_TO_MY_LIST,
                payload: response.data
            })
        }
        catch (error) {
            console.log(error.response.data.message)
        }
    }
}

export const removeSelectedResume = (resumeId) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.delete(`resumes/` + resumeId)

            dispatch({
                type: REMOVE_SELECTED_RESUME,
                payload: response.data
            })

            dispatch({
                type: SET_ALERT,
                payload: `${response.data.resumeTitle} was delete`
            })
        }
        catch (error) {
            console.log(error.response.data.message)
        }
    }
}

export const cloneResume = (resumeId) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.post(`resumes/copy/` + resumeId)

            dispatch({
                type: CLONE_SELECTED_RESUME,
                payload: response.data
            })

            dispatch({
                type: SET_ALERT,
                payload: `Created “${response.data.resumeTitle}”`
            })
        }
        catch (error) {
            console.log(error.response.data.message)
        }
    }
}