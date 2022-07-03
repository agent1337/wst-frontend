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

// export const resumeReducer = (state = initialState, action) => {
//     switch (action.type) {
//        case SET_RESUME: 
//             return {...state, 
//                 resumeTitle: action.payload.resumeTitle,
//                 surname: action.payload.surname,
//                 name: action.payload.name,
//                 kanaSurname: action.payload.kanaSurname, 
//                 kanaName: action.payload.kanaName, 
//                 position: action.payload.position, 
//                 // nationality: action.payload.nationality, 
//                 // gender: action.payload.gender, 
//                 // birthday: action.payload.birthday, 
//                 phone: action.payload.phone, 
//                 eMail: action.payload.eMail, 
//                 address: action.payload.address, 
//                 busStation: action.payload.busStation, 
//                 transport: action.payload.transport, 
//             }
//         default:
//             return state;    
//      }
// }