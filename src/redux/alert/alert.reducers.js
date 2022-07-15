import { SET_ALERT, SET_INPUT_ERROR } from "./alert.constants";

const initialState = {
    alert: "",
    error: false
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALERT:
            return { ...state, alert: action.payload }
        case SET_INPUT_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}