import {
    CREATE_RESUME,
    GET_MEDIA,
    GET_OWN_RESUME,
    CLONE_SELECTED_RESUME,
    REMOVE_SELECTED_RESUME,
    SET_PROFILE,
    GET_OWN_RESUMES_DATA,
    GET_OTHER_RESUME_DATA,
    GET_OTHER_RESUME,
    SAVE_TO_MY_LIST,
    GET_NATIONALITY,
} from "./profile.constants";

const initialState = {
    user: [],
    resumes: [],
    othersResumes: [],
    currentResume: {},
    media: [],
    nationality: [],
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
            return { ...state, user: action.payload }
        case GET_OWN_RESUMES_DATA:
            return { ...state, resumes: action.payload }
        case GET_OTHER_RESUME_DATA:
            return { ...state, othersResumes: action.payload }
        case GET_OWN_RESUME:
            return { ...state, currentResume: action.payload }
        case GET_OTHER_RESUME:
            return { ...state, currentResume: action.payload }
        case SAVE_TO_MY_LIST:
            return {
                ...state,
                othersResumes: [...state.othersResumes, action.payload]
            }
        case GET_MEDIA:
            return { ...state, media: action.payload }
        case GET_NATIONALITY:
            return { ...state, nationality: action.payload }
        case REMOVE_SELECTED_RESUME:
            const newList = state.resumes.filter(resume =>resume.id !== action.payload)
            return {
                ...state, resumes: newList
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