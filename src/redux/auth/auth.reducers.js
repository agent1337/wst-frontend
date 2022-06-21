import { GET_TOKEN } from "./auth.constants"

const initial = {
   email: "",
   token: null,
}

export const authReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return {
                ...state,
                email: action.payload.email,
            }
        default:
            return state
    }
}

// http secure cookie (backend) 
// redux toolkit 