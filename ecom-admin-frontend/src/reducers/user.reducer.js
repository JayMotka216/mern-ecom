import { registerConstant } from "../actions/constants";

const initialState = {
    error: null,
    loading: false,
    message: '',
};
    
export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case registerConstant.SIGNUP_REQUEST:
            return { ...state, loading: true }
        case registerConstant.SIGNUP_SUCCESS:
            return { ...state, loading: false, ...action.payload }
        case registerConstant.SIGNUP_FAILURE:
            return { ...state, loading: false, ...action.payload }
        default:
            return state;
    }
};