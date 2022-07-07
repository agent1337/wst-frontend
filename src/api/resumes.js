import { axiosInstance } from "./axios"

export const publishResume = (data) => {
    return async (dispatch) => {
        axiosInstance
            .post("resumes", data)
            .then(res => {
                // dispatch(setResume(res.data))
            })
            .catch((err) => console.log(err, 'error'))
    }
}
