import { RESET_PASSWORD, SIGN_IN_SUCCESS, LOGOUT } from "./auth.types"
import { axiosInstance } from "../../api/axios"
import { showToast } from "../alert/alert.actions"

export const signup = (email, password) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.post("auth/signup", { email, password })
            localStorage.setItem("accessToken", response.data.accessToken);

            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: response.data.accessToken
            })
        }
        catch (error) {
            console.log(error)
            dispatch(showToast(error.response.data.message))
        }
    }
}

export const signin = (email, password) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.post("auth/signin", { email, password })
            localStorage.setItem("accessToken", response.data.accessToken);

            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: response.data.accessToken
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const signInWithTwitter = (data) => {
    return async dispatch => {
        try {
            const response = await axiosInstance.post("auth/twitter/signin", data)
            localStorage.setItem("accessToken", response.data.accessToken);

            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: response.data.accessToken
            })
        }
        catch (error) {
            console.log(error)
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
        catch (error) {
            console.log(error)
        }
    }
}

export const logout = () => {
    return async dispatch => {
        dispatch({
            type: LOGOUT,
        })
    }
}