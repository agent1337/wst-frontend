import { SHOW_ALERT, HIDE_ALERT } from "./alert.types";

export const showToast = (payload) => ({
  type: SHOW_ALERT,
  payload,
})

export const hideToast = (payload) => ({
  type: HIDE_ALERT,
  payload,
})