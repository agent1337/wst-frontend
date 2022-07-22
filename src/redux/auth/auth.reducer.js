import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_ERROR,
  LOGOUT,
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
} from "./auth.types";

const initialState = {
  loading: true,
  token: null,
  errors: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, loading: true };
    case SIGN_IN_ERROR:
      return { ...state, loading: false };

    case SIGN_UP:
      return { ...state, loading: true };
    case SIGN_UP_ERROR:
      return { ...state, loading: false };

    case FORGOT_PASSWORD:
      return { ...state, loading: true };
    case FORGOT_PASSWORD_ERROR:
      return { ...state, loading: false };

    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
};
