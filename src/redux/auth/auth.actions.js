import {
  RESET_PASSWORD,
  SIGN_UP,
  SIGN_UP_ERROR,
  SIGN_IN,
  SIGN_IN_ERROR,
} from "./auth.types";
import { axiosInstance } from "../../api/axios";
import { showToast } from "../alert/alert.actions";
import { getMe, removeToken, saveToken } from "../profile/profile.actions";

export const signup = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(signUpInit());

      const response = await axiosInstance.post("auth/signup", {
        email,
        password,
      });
      localStorage.setItem("accessToken", response.data.accessToken);

      dispatch(saveToken(response.data.accessToken));
      dispatch(getMe());
    } catch (error) {
      dispatch(signUpError(error.response.data.message));
      dispatch(showToast(error.response.data.message));
    }
  };
};

export const signUpInit = () => {
  return { type: SIGN_UP };
};

export const signUpError = (payload) => {
  return { type: SIGN_UP_ERROR, payload };
};

export const signin = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(signInInit());
      const response = await axiosInstance.post("auth/signin", {
        email,
        password,
      });
      localStorage.setItem("accessToken", response.data.accessToken);

      dispatch(saveToken(response.data.accessToken));
      dispatch(getMe());
    } catch (error) {
      dispatch(signInError(error.response.data.message));
      dispatch(showToast(error.response.data.message));
    }
  };
};

export const signInInit = () => {
  return { type: SIGN_IN };
};

export const signInError = (payload) => {
  return { type: SIGN_IN_ERROR, payload };
};

export const signInWithTwitter = (data) => {
  return async (dispatch) => {
    try {
      dispatch(signInInit());
      const response = await axiosInstance.post("auth/twitter/signin", data);
      localStorage.setItem("accessToken", response.data.accessToken);

      dispatch(saveToken(response.data.accessToken));
      dispatch(getMe());
    } catch (error) {
      console.log(error);
    }
  };
};

export const forgotPassword = (data) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.put("/auth", data);

      const sendEmail = await axiosInstance.post("/email/html-email", data);

      dispatch({
        type: RESET_PASSWORD,
        payload: true,
      });

      return { response, sendEmail };
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetPasswordInit = () => {
  return { type: RESET_PASSWORD };
};

// export const resetPasswordSuccess = (payload) => {
//   return { type: SIGN_IN_SUCCESS, payload };
// };

// export const resetPasswordError = (payload) => {
//   return { type: SIGN_IN_ERROR, payload };
// };

export const logout = () => {
  return async (dispatch) => {
    dispatch(removeToken());
    localStorage.removeItem("accessToken");
  };
};
