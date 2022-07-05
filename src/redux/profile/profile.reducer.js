import { SET_PROFILE, SET_RESUMES } from "./profile.constants";

const initialState = {
    email: '',
    resumes: [],
    loading: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {...state, email: action.payload.email}
        case SET_RESUMES:
            return {...state, resumes: action.payload}
        default:
            return state;
    }
}