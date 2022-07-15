import { SET_ALERT, SET_INPUT_ERROR } from "./alert.constants";

export const setAlert = (payload) => ({
  type: SET_ALERT,
  payload,
})

export const setInputError = (payload) => ({
  type: SET_INPUT_ERROR,
  payload,
})