import axiosInstant from "../helpers/axios";
import { authConstant } from "./constants";

export const Login = (user) => {
    return async (dispatch) => {
        
        dispatch({ type: authConstant.LOGIN_REQUEST });
        
        const res = await axiosInstant.post('/admin/signin', {
            ...user,
        });

        if(res.status === 200) {
            const { token, user } = res.data;

            localStorage.setItem( 'token', token );
            localStorage.setItem( 'user', JSON.stringify(user) );

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

export const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if(token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token, user,
                }
            });
        } else {
            dispatch({ 
                type: authConstant.LOGIN_FAILURE,
                payload: { error: 'Failed to Login!' }
            });
        }
    }
}

export const signOut = () => {
    return async dispatch => {
        dispatch({ type: authConstant.SIGNOUT_REQUEST });
        const res = await axiosInstant.post('/admin/signout');

        if(res.status === 200){
            localStorage.clear();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            dispatch({
                type: authConstant.SIGNOUT_SUCCESS,
            });
        } else {
            dispatch({ type: authConstant.SIGNOUT_FAILURE, payload: { error: res.data.error }});
        }
    }
}