import { SET_ALERT } from "./alert.constants";

export const setAlert = (payload) => ({
  type: SET_ALERT,
  payload,
})