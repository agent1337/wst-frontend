import { SHOW_ALERT, SET_ALERT, HIDE_ALERT } from "./alert.constants";

export const setAlert = (payload) => ({
  type: SET_ALERT,
  payload,
})

export const showToast = (payload) => ({
  type: SHOW_ALERT,
  payload,
})

export const hideToast = (payload) => ({
  type: HIDE_ALERT,
  payload,
})