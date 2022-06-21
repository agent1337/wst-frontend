import axios from "axios";
import { GET_TOKEN } from "./auth.constants";
import API from '../../utils/api';

export function login(email, password, redirect = "/") {
    return async (dispatch) => {
        API.post('auth/signin', { email, password })
            .then(res => {
                console.log(res)
                dispatch(getUserToken(res.data))
                let token = res.data.accessToken;
                localStorage.setItem("accessToken", token);
            })
    }
}

export const register = (email, password, redirect = "/") => {
    return async (dispatch) => {
        API.post('auth/signup', { email, password })
            .then(res => {
                console.log(res)
                dispatch(getUserToken(res.data))
                let token = res.data.accessToken;
                localStorage.setItem("accessToken", token);
            })
    }
}

export const getUserToken = (payload) => ({
    type: GET_TOKEN,
    payload,
})

// const loginTwitter = () => {
    // const provider = new TwitterAuthProvider();
    // signInWithPopup(authentication, provider)
    //   .then((res) => {
    //     console.log(res.user.displayName)
    //     let form = {
    //       name: res._tokenResponse.screenName,
    //       externalId: res.user.uid
    //     }
    //     API.post(`auth/twitter/signin`, form)
    //       .then((res) => {
    //         console.log(res, 'res')

    //         let token = res.data.accessToken;
    //         localStorage.setItem("accessToken", token);
    //         navigate.push("/resumes");
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //     console.log(res)
    //   })
    //   .catch((err) => console.log(err))
//   }

export const loginTwitter = () => {
    return async (dispatch) => {
        API.post('auth/signin', { email, password })
            .then(res => {
                console.log(res)
                dispatch(getUserToken(res.data))
                let token = res.data.accessToken;
                localStorage.setItem("accessToken", token);
            })
    }
}


// export function logout() {
//     localStorage.removeItem('token');
//     return {
//         type: LOGOUT
//     }
// }

// export function logoutAndRedirect() {
//     return (dispatch, state) => {
//         dispatch(logout());
//     }
// }
