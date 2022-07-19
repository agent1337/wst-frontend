import { SHOW_ALERT, SET_ALERT, HIDE_ALERT } from "./alert.constants";

const initialState = {
    alert: "",
    list: [],
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALERT:
            return { ...state, alert: action.payload }
        case SHOW_ALERT:
            let toastProperties = {
                id: state.list.length + 1,
                description: action.payload,
            }
            return {
                ...state,
                list: [...state.list, toastProperties]
            }
        case HIDE_ALERT:
            const newList = state.list.filter(e => e.id !== action.payload)
            return {
                ...state, list: newList
            }
        default:
            return state;
    }
}