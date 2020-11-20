import axiosInstant from "../helpers/axios";
import { categoryConstant, initialDataConstant, productConstant } from "./constants";

export const getInitialData = () => {
    return async dispatch => {
        dispatch({type: initialDataConstant.GET_INITIAL_DATA_REQUEST});
        const res = await axiosInstant.post('/initialdata');
        if(res.status === 200){
            const { categories, products } = res.data;
            if(categories.length > 0 && products.length > 0){
                dispatch({
                    type: productConstant.GET_PRODUCT_SUCCESS,
                    payload: {
                        products: products,
                    },
                });
                dispatch({
                    type: categoryConstant.GET_CATEGORY_SUCCESS,
                    payload: {
                        categories: categories,
                    }
                })
            }
        } else {
            console.log('error');
        }
    }
}