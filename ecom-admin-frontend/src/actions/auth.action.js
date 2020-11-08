import axiosInstant from "../helpers/axios";
import { authConstant } from "./constants"

export const Login = (user) => {
    return async (dispatch) => {
        
        dispatch({ type: authConstant.LOGIN_REQUEST });
        
        const res = await axiosInstant.post('/admin/signin', {
            ...user,
        });

        if(res.status === 200) {
            const { token, user } = res.data;

            localStorage.setItem( 'token', token );

            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token, user,
                }
            });
        } else {
            if(res.status === 400) {
                dispatch({ 
                    type: authConstant.LOGIN_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}