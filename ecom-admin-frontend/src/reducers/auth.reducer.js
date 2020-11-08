import { authConstant } from "../actions/constants";

const initialState = {
    email: 'abc@gmail.com',
    password: '123456',
};
    
export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case authConstant.LOGIN_REQUEST:
            return { ...state, ...action.payload }
        default:
            return state;
    }
};