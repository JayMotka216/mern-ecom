import { authConstant } from "./constants"

export const Login = (user) => {
    return async (dispatch) => {
        dispatch({ 
            type: authConstant.LOGIN_REQUEST,
            payload: {
                ...user,
            }
        });
    }
}