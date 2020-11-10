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
    loading: false,
    error: null,
    message: '',
};
    
export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case authConstant.LOGIN_REQUEST:
            return { ...state, authenticating: true }
        case authConstant.LOGIN_SUCCESS:
            return { ...state, authenticate: true, authenticating: false, ...action.payload }
        case authConstant.LOGIN_FAILURE:
            return { ...state, authenticate: false, authenticating: false, ...action.payload }
        case authConstant.SIGNOUT_REQUEST:
            return { ...initialState, token: null, authenticate: false, loading: true}
        case authConstant.SIGNOUT_SUCCESS:
            return { ...initialState, loading: false }
        case authConstant.SIGNOUT_FAILURE:
            return { ...state, ...action.payload, loading: false }
        default:
            return state;
    }
};