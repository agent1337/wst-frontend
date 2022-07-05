import { SIGN_IN } from "./auth.constants"
import { axiosInstance } from "../../api/axios"
import { SET_ALERT } from "../alert/alert.constants"

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