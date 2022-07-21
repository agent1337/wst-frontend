import { SET_PROFILE } from "./profile.types";

const initialState = {
    user: [],
    loading: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, user: action.payload }
        default:
            return state;
    }
}