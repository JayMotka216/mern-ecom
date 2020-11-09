import axiosInstant from "../helpers/axios";
import { registerConstant } from "./constants";

export const UserSignup = (user) => {
    return async (dispatch) => {
        
        dispatch({ type: registerConstant.SIGNUP_REQUEST });
        
        const res = await axiosInstant.post('/admin/signup', {
            ...user,
        });

        if(res.status === 200) {
            const { message } = res.data.message;

            dispatch({
                type: registerConstant.SIGNUP_SUCCESS,
                payload: { message }
            });
        } else {
            if(res.status === 400) {
                dispatch({ 
                    type: registerConstant.SIGNUP_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}