import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import orderReducer from './order.reducer';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
    order: orderReducer,
});

export default rootReducer;