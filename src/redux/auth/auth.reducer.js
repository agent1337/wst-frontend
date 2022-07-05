import { SIGN_IN } from "./auth.constants";

const initialState = {
    isLogined: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, isLogined: action.payload}
        default:
            return state;
    }
}