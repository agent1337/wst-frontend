import { getMe, removeToken, saveToken } from "../profile/profile.actions";
import { showToast } from "../toast/toast.actions";

import { axiosInstance } from "../../api/axios";

import {
  SIGN_UP,
  SIGN_UP_ERROR,
  SIGN_IN,
  SIGN_IN_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_ERROR,
} from "./auth.types";

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
      dispatch(forgotPasswordInit());
      const response = await axiosInstance.put("/auth", data);

      const sendEmail = await axiosInstance.post("/email/html-email", data);

      dispatch(forgotPasswordSuccess(true));

      return { response, sendEmail };
    } catch (error) {
      dispatch(forgotPasswordError(error.response.data.message));
      dispatch(showToast(error.response.data.message));
    }
  };
};

export const forgotPasswordInit = () => {
  return { type: FORGOT_PASSWORD };
};

export const forgotPasswordSuccess = (payload) => {
  return { type: FORGOT_PASSWORD_SUCCESS, payload };
};

export const forgotPasswordError = (payload) => {
  return { type: FORGOT_PASSWORD_ERROR, payload };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(removeToken());
    localStorage.removeItem("accessToken");
  };
};
