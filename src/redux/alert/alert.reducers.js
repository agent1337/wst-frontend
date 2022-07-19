import { SHOW_ALERT, HIDE_ALERT } from "./alert.constants";

const initialState = {
    list: [],
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
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