import { setResume } from "../redux/resume/resume.actions";
import { axiosInstance } from "./axios"

export const getResumesData = () => {
    return axiosInstance
        .get("resumes")
        .then(res => {
            localStorage.setItem("accessToken", res.data.accessToken);
            return true
        })
}

export const publishResume = (data) => {
    return async (dispatch) => {
        axiosInstance
            .post("resumes", data)
            .then(res => {
                dispatch(setResume(res.data))
            })
            .catch((err) => console.log(err, 'error'))
    }
}

export const removeResume = (resumeId) => {
    // return axiosInstance
    //     .delete(`resumes/` + resumeId)
    //     .then((res) => {
    //         setIsOpen(false);
    //         setResumesData(resumesData.filter((item) => item._id !== resumeId));
    //         // return <ToastNotification text={`${resumeId} deleted`} value={true} />;
    //     })
    // .catch((error) => console.log(error));
}
