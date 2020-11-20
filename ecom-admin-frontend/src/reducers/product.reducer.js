import { productConstant } from "../actions/constants";

const initialState = {
    loading: false,
    error: null,
    products: [],
}

export default function productReducer(state = initialState, action) {
    switch(action.type){
        case productConstant.GET_PRODUCT_REQUEST:
            return {...state, loading: true}
        case productConstant.GET_PRODUCT_SUCCESS:
            return {...state, loading: false, products: [...action.payload.products]}
        case productConstant.GET_PRODUCT_FAILURE:
            return {...state, loading: false, error: action.payload.error}
        default:
            return {...state}
    }
}