import { LOGOUT, SIGN_IN_SUCCESS } from "./auth.constants";

const initialState = {
    loading: true,
    isLogined: false,
    token: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return { ...state, token: action.payload, loading: false }
        case LOGOUT:
            return { ...state, token: null }
        default:
            return state;
    }
}