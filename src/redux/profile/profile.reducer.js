import {
  SAVE_TOKEN,
  GET_ME,
  GET_ME_SUCCESS,
  REMOVE_TOKEN,
} from "./profile.types";

const initialState = {
  accessToken: "",
  email: "",
  userId: "",
  loading: true,
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_TOKEN:
      return { ...state, accessToken: payload };
    case REMOVE_TOKEN:
      return { ...state, accessToken: null };

    case GET_ME:
      return { ...state, loading: true };
    case GET_ME_SUCCESS:
      return {
        ...state,
        loading: false,
        email: payload.email,
        userId: payload._id,
      };

    default:
      return state;
  }
};
