import { combineReducers } from "redux";
import { ordersReducer } from "./orders/orders.reducer";
import { userReducer } from "./user/user.reducer";
import { productReducer } from "./product/product.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    orders: ordersReducer,
    product: productReducer
})