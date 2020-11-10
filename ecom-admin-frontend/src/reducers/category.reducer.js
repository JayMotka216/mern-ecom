import { categoryConstant } from "../actions/constants"

const initState = {
    loading: false,
    error: null,
    categories: [],
}

const buildNewCategory = (parentId, categories, category) => {
    const mycategory = [];
    if(parentId === undefined){
        return [
            ...categories,
            {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                children: [],
            }
        ];
    }
    for(let cat of categories) {
        if(cat._id === parentId) {
            mycategory.push({
                ...cat,
                children: cat.children ? buildNewCategory(parentId, [...cat.children, {
                    _id: category._id,
                    name: category.name,
                    parentId: category.parentId,
                    slug: category.slug,
                    children: category.children,
                }], category) : [],
            });
        } else {
            mycategory.push({
                ...cat,
                children: cat.children ? buildNewCategory(parentId, cat.children, category) : [],
            });
        }
    }
    return mycategory;
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
            return {...state, categories: buildNewCategory(action.payload.category.parentId, state.categories, action.payload.category), loading: false}
        case categoryConstant.POST_CATEGORY_FAILURE:
            return {...state, ...action.payload, loading:false}
        default:
            return initState;
    }
}