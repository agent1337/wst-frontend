import { useDispatch } from "react-redux";
import { setAlert } from "../redux/alert/alert.actions";
import { axiosInstance } from "./axios"

export const signup = (email, password) => {
    return axiosInstance
        .post("auth/signup", {
            email,
            password,
        })
        .then(res => {
            localStorage.setItem("accessToken", res.data.accessToken);
            return true
        })
}

export const signin = (email, password) => {
    let data = {
        email: email,
        password: password
    }

    // return (dispatch) => {
        try {
            return axiosInstance
                .post("auth/signin", data)
                .then(res => {
                    localStorage.setItem("accessToken", res.data.accessToken);
                })
        }
        catch (err) {
            console.log(err.response.data.message)
            // useDispatch(setAlert(err.response.data.message))
        }
    // }
}

export const gotwitter = (data) => {
    return axiosInstance
        .post(`auth/twitter/signin`, data)
        .then((res) => {
            let token = res.data.accessToken;
            localStorage.setItem("accessToken", token);
        })
        .catch((error) => {
            console.log(error);
        });
}