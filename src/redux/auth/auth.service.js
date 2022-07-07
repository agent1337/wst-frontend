import { RESET_PASSWORD, SIGN_IN } from "./auth.constants"
import { axiosInstance } from "../../api/axios"
import { SET_ALERT } from "../alert/alert.constants"

export const signup = (email, password) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.post("auth/signup", { email, password })
            localStorage.setItem("accessToken", response.data.accessToken);

            dispatch({
                type: SIGN_IN,
                payload: true
            })
        }
        catch (err) {
            console.log(err)
            dispatch({
                type: SET_ALERT,
                payload: err.response.data.message
            })
        }
    }
}

export const signin = (email, password) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.post("auth/signin", { email, password })
            localStorage.setItem("accessToken", response.data.accessToken);

            dispatch({
                type: SIGN_IN,
                payload: true
            })
        }
        catch (err) {
            console.log(err.response.data.message)
            dispatch({
                type: SET_ALERT,
                payload: err.response.data.message
            })
        }
    }
}

export const gotwitter = (data) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.post("auth/twitter/signin", data)
            localStorage.setItem("accessToken", response.data.accessToken);

            dispatch({
                type: SIGN_IN,
                payload: true
            })
        }
        catch (err) {
            console.log(err.response.data.message)
            dispatch({
                type: SET_ALERT,
                payload: err.response.data.message
            })
        }
    }
}

export const forgotPassword = (data) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.put("/auth", data)

            const sendEmail = await axiosInstance.post('/email/html-email', data)
            
            dispatch({
                type: RESET_PASSWORD,
                payload: true
            })

            return { response, sendEmail }
        }
        catch (err) {
            console.log(err.response)
            // dispatch({
            //     type: SET_ALERT,
            //     payload: err.response.data.message
            // })
        }
    }
}