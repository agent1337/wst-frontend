import { SHOW_TOAST, HIDE_TOAST } from "./toast.types";

const initialState = {
  list: [],
};

export const toastReducer = (state = initialState, action) => {
  let toastProperties = {
    id: state.list.length + 1,
    description: action.payload,
  };
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        list: [...state.list, toastProperties],
      };
    case HIDE_TOAST:
      return {
        ...state,
        list: state.list.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};
