import { SET_ALERT } from "./alert.constants";

const initialState = {
    alert: ""
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALERT:
            return {...state, alert: action.payload}
        default:
            return state;
    }
}