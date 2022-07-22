import { axiosInstance } from "api/axios";
import { logout } from "../auth/auth.actions";
import {
  GET_ME,
  GET_ME_SUCCESS,
  REMOVE_TOKEN,
  SAVE_TOKEN,
} from "./profile.types";

export const getMe = () => {
  return async (dispatch) => {
    try {
      dispatch(getMeInit());
      const response = await axiosInstance.get("auth/me");

      dispatch(getMeSuccess(response.data));
    } catch (error) {
      dispatch(logout());
    }
  };
};

export const getMeInit = () => {
  return { type: GET_ME };
};

export const getMeSuccess = (payload) => {
  return { type: GET_ME_SUCCESS, payload };
};

export const saveToken = (payload) => {
  return { type: SAVE_TOKEN, payload };
};

export const removeToken = () => {
  return { type: REMOVE_TOKEN };
};
