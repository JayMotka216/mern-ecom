import { authConstant } from "../actions/constants";

const initialState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: '',
    },
    authenticate: false,
    authenticating: false,
};
    
export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case authConstant.LOGIN_REQUEST:
            return { ...state, authenticating: true }
        case authConstant.LOGIN_SUCCESS:
            return { ...state, authenticate: true, authenticating: false, ...action.payload }
        case authConstant.LOGIN_FAILURE:
            return { ...state, authenticate: false, authenticating: false, ...action.payload }
        default:
            return state;
    }
};