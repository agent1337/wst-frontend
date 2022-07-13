import {
    CREATE_RESUME,
    GET_MEDIA,
    GET_RESUME,
    CLONE_SELECTED_RESUME,
    REMOVE_SELECTED_RESUME,
    SET_PROFILE,
    SET_RESUMES
} from "./profile.constants";

const initialState = {
    user: [],
    resumes: [],
    resumeData: [],
    media: [],
    loading: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_RESUME:
            return {
                ...state,
                resumes: [...state.resumes, action.payload]
            }
        case SET_PROFILE:
            return {...state, user: action.payload }
        case SET_RESUMES:
            return { ...state, resumes: action.payload }
        case GET_RESUME:
            return { ...state, resumeData: action.payload }
        case GET_MEDIA:
            console.log(action.payload, 'actionv ')
            return { ...state, media: action.payload }

        case REMOVE_SELECTED_RESUME:
            return {
                ...state, resumes: state.resumes.filter(resume =>
                    resume.id !== action.payload
                )
            }
        case CLONE_SELECTED_RESUME:
            return {
                ...state,
                resumes: [...state.resumes, action.payload]
            }
        default:
            return state;
    }
}