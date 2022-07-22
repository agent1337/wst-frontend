import { axiosInstance } from "api/axios";
import { showToast } from "redux/toast/toast.actions";

import {
  CLONE_SELECTED_RESUME,
  REMOVE_SELECTED_RESUME,
  SAVE_TO_MY_LIST,
  GET_OTHER_RESUME,
  GET_NATIONALITY,
  GET_MEDIA_REQUEST,
  GET_MEDIA_SUCCESS,
  GET_MEDIA_ERROR,
  GET_OWN_RESUMES_DATA_SUCCESS,
  GET_OTHER_RESUME_DATA_SUCCESS,
  GET_OWN_RESUME_SUCCESS,
  CREATE_RESUME_SUCCESS,
  GET_OWN_RESUMES_DATA,
  GET_OTHER_RESUME_DATA,
  CREATE_RESUME,
  CREATE_RESUME_ERROR,
  UPLOAD_FILE,
  UPLOAD_FILE_ERROR,
} from "./resume.types";

export const getOwnResumeData = () => {
  return async (dispatch) => {
    try {
      dispatch(getOwnResumeDataInit());

      const response = await axiosInstance.get("resumes/own");

      dispatch(getOwnResumeDataSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOwnResumeDataInit = () => {
  return { type: GET_OWN_RESUMES_DATA };
};

export const getOwnResumeDataSuccess = (payload) => {
  return { type: GET_OWN_RESUMES_DATA_SUCCESS, payload };
};

export const getOtherResumeData = () => {
  return async (dispatch) => {
    try {
      dispatch(getOtherResumeDataInit());

      const response = await axiosInstance.get("resumes/others");

      dispatch(getOtherResumeDataSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOtherResumeDataInit = () => {
  return { type: GET_OTHER_RESUME_DATA };
};

export const getOtherResumeDataSuccess = (payload) => {
  return { type: GET_OTHER_RESUME_DATA_SUCCESS, payload };
};

export const getOwnResumeDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_MEDIA_REQUEST,
      });

      const response = await axiosInstance.get(`/resumes/own/${id}`);

      dispatch({
        type: GET_OWN_RESUME_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_MEDIA_ERROR,
      });
    }
  };
};

export const getOtherResume = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get(`/resumes/other/${id}`);

      dispatch({
        type: GET_OTHER_RESUME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUploadedFiles = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_MEDIA_REQUEST,
      });

      const response = await axiosInstance.get(`/media/${id}`);

      dispatch({
        type: GET_MEDIA_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_MEDIA_ERROR,
      });
    }
  };
};

export const getNationality = () => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get("nationality");

      dispatch({
        type: GET_NATIONALITY,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createResume = (data, accessToken, uploadImage, multipleFiles) => {
  return async (dispatch) => {
    try {
      dispatch(createResumeInit());

      const response = await axiosInstance
        .post("resumes", data, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .catch((error) => {
          dispatch(showToast(error.response.data.message));
        });

      dispatch(uploadFiles(uploadImage, response.data._id, accessToken));
      for (let i = 0; i < multipleFiles.length; i++) {
        dispatch(uploadFiles(multipleFiles[i], response.data._id, accessToken));
      }

      dispatch(createResumeSuccess(response));
    } catch (error) {
      dispatch(createResumeError(error));
    }
  };
};

export const createResumeInit = () => {
  return { type: CREATE_RESUME };
};

export const createResumeSuccess = (payload) => {
  return { type: CREATE_RESUME_SUCCESS, payload };
};

export const createResumeError = (payload) => {
  return { type: CREATE_RESUME_ERROR, payload };
};

export const uploadFiles = (uploadImage, resumeId, accessToken) => {
  return async (dispatch) => {
    try {
      dispatch(uploadFilesInit());
      const formData = new FormData();
      formData.append("image", uploadImage);
      formData.append("resumeId", resumeId);

      const response = await axiosInstance
        .post("media", formData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            type: "formData",
          },
        })
        .catch((err) => console.log(err));

      return response;
    } catch (error) {
      dispatch(uploadFilesError(error.response.data.message));
      dispatch(showToast(error.response.data.message));
    }
  };
};

export const uploadFilesInit = () => {
  return { type: UPLOAD_FILE };
};

export const uploadFilesError = (payload) => {
  return { type: UPLOAD_FILE_ERROR, payload };
};

export const saveToMyList = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post(`resumes/save/${id}`);

      dispatch({
        type: SAVE_TO_MY_LIST,
        payload: response.data,
      });
    } catch (error) {
      dispatch(showToast(error.response.data.message));
    }
  };
};

export const removeSelectedResume = (resumeId) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.delete(`resumes/` + resumeId);

      dispatch({
        type: REMOVE_SELECTED_RESUME,
        payload: response.data,
      });

      dispatch(showToast(`"${response.data.resumeTitle}" was delete`));
    } catch (error) {
      console.log(error);
    }
  };
};

export const cloneResume = (resumeId) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post(`resumes/copy/` + resumeId);

      dispatch({
        type: CLONE_SELECTED_RESUME,
        payload: response.data,
      });

      dispatch(showToast(`Created "${response.data.resumeTitle}"`));
    } catch (error) {
      dispatch(showToast(error.response.data.message));
    }
  };
};
