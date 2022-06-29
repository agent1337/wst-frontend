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
    return axiosInstance
        .post("auth/signin", {
            email: email,
            password: password,
        })
        .then(res => {
            localStorage.setItem("accessToken", res.data.accessToken);
        })
        .then(() => {
            return true
        })
}

export const gotwitter = (data) => {
    return axiosInstance
        .post(`auth/twitter/signin`, data)
              .then((res) => {
                console.log(res, 'res')
    
                let token = res.data.accessToken;
                localStorage.setItem("accessToken", token);
               
              })
              .catch((error) => {
                console.log(error);
              });
}