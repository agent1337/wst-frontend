import {
    CREATE_RESUME_SUCCESS,
    CLONE_SELECTED_RESUME,
    REMOVE_SELECTED_RESUME,
    GET_OTHER_RESUME,
    SAVE_TO_MY_LIST,
    GET_NATIONALITY,
    GET_MEDIA_REQUEST,
    GET_MEDIA_SUCCESS,
    GET_MEDIA_ERROR,
    GET_OWN_RESUMES_DATA_SUCCESS,
    GET_OTHER_RESUME_DATA_SUCCESS,
    GET_OWN_RESUME_SUCCESS,
} from "./resume.types";

const initialState = {
    resumes: [],
    othersResumes: [],
    resume: {},
    media: [],
    nationality: [],
    loading: false
}

export const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_RESUME_SUCCESS:
            return {
                ...state,
                resumes: [...state.resumes, action.payload]
            }
        case GET_OWN_RESUMES_DATA_SUCCESS:
            return { ...state, resumes: action.payload }
        case GET_OTHER_RESUME_DATA_SUCCESS:
            return { ...state, othersResumes: action.payload }
        case GET_OWN_RESUME_SUCCESS:
            return { ...state, resume: action.payload, loading: false }
        case GET_OTHER_RESUME:
            return { ...state, resume: action.payload }
        case SAVE_TO_MY_LIST:
            return {
                ...state,
                othersResumes: [...state.othersResumes, action.payload]
            }
        case GET_MEDIA_REQUEST:
            return { ...state, loading: true }
        case GET_MEDIA_SUCCESS:
            return { ...state, media: action.payload, loading: false }
        case GET_MEDIA_ERROR:
            return { ...state, loading: false }
        case GET_NATIONALITY:
            return { ...state, nationality: action.payload }
        case REMOVE_SELECTED_RESUME:
            return {
                ...state, resumes: state.resumes.filter(resume => resume.id !== action.payload)
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