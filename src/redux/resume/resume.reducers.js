import { SET_RESUME } from "./resume.constants";

const initialState = {
    resumeTitle: "",
    surname: "",
    name: "",
    kanaSurname: "",
    kanaName: "",
    position: "",
    nationality: "",
    gender: "",
    birthday: "",
    phone: "",
    eMail: "",
    address: "",
    busStation: "",
    transport: "",
}

export const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESUME:
            return [...action.payload, ...state];
        default:
            return state;
    }
}