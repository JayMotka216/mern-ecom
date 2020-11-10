import { categoryConstant } from "../actions/constants"

const initState = {
    loading: false,
    error: null,
    categories: [],
}

export default function categoryReducer(state = initState, action) {
    switch(action.type) {
        case categoryConstant.GET_CATEGORY_REQUEST:
            return {...state, loading: true}
        case categoryConstant.GET_CATEGORY_SUCCESS:
            return {...state, categories: action.payload.categories, loading: false}
        case categoryConstant.GET_CATEGORY_FAILURE:
            return {...state, loading: false, error: action.payload.error}
        case categoryConstant.POST_CATEGORY_REQUEST:
            return {...state, loading: true}
        case categoryConstant.POST_CATEGORY_SUCCESS:
            return {...state, loading: false}
        case categoryConstant.POST_CATEGORY_FAILURE:
            return {...state, ...action.payload, loading:false}
        default:
            return initState;
    }
}