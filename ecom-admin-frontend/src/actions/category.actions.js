import axiosInstant from "../helpers/axios";
import { categoryConstant } from "./constants";

export const getAllCategory = () => {
    return async (dispatch) => {

        dispatch({ type: categoryConstant.GET_CATEGORY_REQUEST });
        const res = await axiosInstant.get('/category/getCategories');

        const { categoryList } = res.data;
        if(res.status === 200){
            dispatch({
                type: categoryConstant.GET_CATEGORY_SUCCESS,
                payload: {
                    categories: categoryList,
                }
            });
        } else {
            dispatch({
                type: categoryConstant.GET_CATEGORY_FAILURE,
                payload: {
                    error: res.data.error,
                }
            });
        }
    };
}

export const addCategory = (form) => {
    return async (dispatch) => {
        dispatch({ type: categoryConstant.POST_CATEGORY_REQUEST });
        const res = await axiosInstant.post('/category/create', form);

        if(res.status === 200){
            dispatch({
                type: categoryConstant.POST_CATEGORY_SUCCESS,
                payload: { category: res.data.category, },
            });
        } else {
            dispatch({
                type: categoryConstant.POST_CATEGORY_FAILURE,
                payload: {
                    error: res.data.error,
                }
            });
        }
    };
}