import { SHOW_TOAST, HIDE_TOAST } from "./toast.types";

export const showToast = (payload) => ({
  type: SHOW_TOAST,
  payload,
});

export const hideToast = (payload) => ({
  type: HIDE_TOAST,
  payload,
});
