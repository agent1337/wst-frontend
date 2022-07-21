import { LOGOUT, SIGN_IN, SIGN_IN_ERROR, SIGN_IN_SUCCESS } from "./auth.types";

const initialState = {
    loading: true,
    token: null,
    errors: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return { ...state, token: action.payload, loading: false }
        case SIGN_IN:
            return { ...state, loading: true }
        case SIGN_IN_ERROR:
            return { ...state, loading: false }
        case LOGOUT:
            return { ...state, token: null }
        default:
            return state;
    }
}