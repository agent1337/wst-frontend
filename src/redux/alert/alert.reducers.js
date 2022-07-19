import { SHOW_ALERT, HIDE_ALERT } from "./alert.constants";

const initialState = {
    list: [],
}

export const alertReducer = (state = initialState, action) => {
    let toastProperties = {
        id: state.list.length + 1,
        description: action.payload,
    }
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                list: [...state.list, toastProperties]
            }
        case HIDE_ALERT:
            return {
                ...state, list: state.list.filter(e => e.id !== action.payload)
            }
        default:
            return state;
    }
}