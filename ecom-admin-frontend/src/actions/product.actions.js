import axiosInstant from "../helpers/axios";
import { productConstant } from "./constants";

export const getAllProduct = () => {
    return async (dispatch) => {

        dispatch({ type: productConstant.GET_PRODUCT_REQUEST });
        const res = await axiosInstant.post('/product/getProducts');

        const { products } = res.data;
        if(res.status === 200){
            dispatch({
                type: productConstant.GET_PRODUCT_SUCCESS,
                payload: {
                    products: products,
                }
            });
        } else {
            dispatch({
                type: productConstant.GET_PRODUCT_FAILURE,
                payload: {
                    error: res.data.error,
                }
            });
        }
    };
}

export const addProduct = (form) => {
    return async (dispatch) => {
        dispatch({ type: productConstant.POST_PRODUCT_REQUEST });
        const res = await axiosInstant.post('/product/create', form);

        if(res.status === 200){
            dispatch({
                type: productConstant.POST_PRODUCT_SUCCESS,
                payload: { product: res.data.product, },
            });
        } else {
            dispatch({
                type: productConstant.POST_PRODUCT_FAILURE,
                payload: {
                    error: res.data.error,
                }
            });
        }
    };
}