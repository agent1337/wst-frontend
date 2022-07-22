import {
  CREATE_RESUME,
  CREATE_RESUME_ERROR,
  CREATE_RESUME_SUCCESS,
  GET_OTHER_RESUME_DATA,
  GET_OTHER_RESUME_DATA_SUCCESS,
  GET_OWN_RESUME,
  GET_OWN_RESUMES_DATA,
  GET_OWN_RESUMES_DATA_SUCCESS,
  GET_OWN_RESUME_SUCCESS,
} from "./resume.types";

const initialState = {
  resumes: [],
  othersResumes: [],
  resume: {},
  media: [],
  nationality: [],
  loading: false,
};

export const resumeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_OWN_RESUMES_DATA:
      return { ...state, loading: true };
    case GET_OWN_RESUMES_DATA_SUCCESS:
      return { ...state, resumes: payload, loading: false };

    case GET_OTHER_RESUME_DATA:
      return { ...state, loading: true };
    case GET_OTHER_RESUME_DATA_SUCCESS:
      return { ...state, othersResumes: payload, loading: false };

    case GET_OWN_RESUME:
      return { ...state, loading: true };
    case GET_OWN_RESUME_SUCCESS:
      return { ...state, resume: payload, loading: false };

    case CREATE_RESUME:
      return {
        ...state,
        loading: true,
      };
    case CREATE_RESUME_SUCCESS:
      return {
        ...state,
        resumes: [...state.resumes, payload],
        loading: false,
      };
    case CREATE_RESUME_ERROR:
      return {
        ...state,
        loading: false,
      };

    // case GET_OTHER_RESUME_DATA_SUCCESS:
    //     return { ...state, othersResumes: payload }
    // case GET_OWN_RESUME_SUCCESS:
    //     return { ...state, resume: payload, loading: false }
    // case GET_OTHER_RESUME:
    //     return { ...state, resume: payload }
    // case SAVE_TO_MY_LIST:
    //     return {
    //         ...state,
    //         othersResumes: [...state.othersResumes, payload]
    //     }
    // case GET_MEDIA_REQUEST:
    //     return { ...state, loading: true }
    // case GET_MEDIA_SUCCESS:
    //     return { ...state, media: payload, loading: false }
    // case GET_MEDIA_ERROR:
    //     return { ...state, loading: false }
    // case GET_NATIONALITY:
    //     return { ...state, nationality: payload }
    // case REMOVE_SELECTED_RESUME:
    //     return {
    //         ...state, resumes: state.resumes.filter(resume => resume.id !== payload)
    //     }
    // case CLONE_SELECTED_RESUME:
    //     return {
    //         ...state,
    //         resumes: [...state.resumes, payload]
    //     }
    default:
      return state;
  }
};
