import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk'
import { productReducers } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'
import { orderReducer } from "./reducers/orderReducer";

const initialState = {}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    products: productReducers,
    cart: cartReducer,
    order: orderReducer,
}),
    initialState,
    composeEnhancer(applyMiddleware(thunk))

)
const unsunScribe = store.subscribe(() => console.log("data is :", store.getState()))

export default store
