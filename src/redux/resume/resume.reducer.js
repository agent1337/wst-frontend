import {
    CREATE_RESUME,
    GET_OWN_RESUME,
    CLONE_SELECTED_RESUME,
    REMOVE_SELECTED_RESUME,
    GET_OWN_RESUMES_DATA,
    GET_OTHER_RESUME_DATA,
    GET_OTHER_RESUME,
    SAVE_TO_MY_LIST,
    GET_NATIONALITY,
    GET_MEDIA_REQUEST,
    GET_MEDIA_SUCCESS,
    GET_MEDIA_ERROR,
} from "./resume.constants";

const initialState = {
    resumes: [],
    othersResumes: [],
    currentResume: {},
    media: [],
    nationality: [],
    loading: false
}

export const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_RESUME:
            return {
                ...state,
                resumes: [...state.resumes, action.payload]
            }
        case GET_OWN_RESUMES_DATA:
            return { ...state, resumes: action.payload }
        case GET_OTHER_RESUME_DATA:
            return { ...state, othersResumes: action.payload }
        case GET_OWN_RESUME:
            return { ...state, currentResume: action.payload, loading: false }
        case GET_OTHER_RESUME:
            return { ...state, currentResume: action.payload }
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