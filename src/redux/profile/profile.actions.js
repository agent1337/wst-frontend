
import { axiosInstance } from "../../api/axios"
import {
    SET_PROFILE,
} from "./profile.types";

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