import { REMOVE_SELECTED_RESUME, SET_PROFILE, SET_RESUMES } from "./profile.constants";

const initialState = {
    email: '',
    resumes: [],
    loading: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, email: action.payload.email }
        case SET_RESUMES:
            return { ...state, resumes: action.payload }
        case REMOVE_SELECTED_RESUME:
            return { ...state, resumes: state.resumes.filter(resume =>
                resume.id !== action.payload
             )}
        default:
            return state;
    }
}