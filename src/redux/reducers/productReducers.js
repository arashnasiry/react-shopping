import { FETCH_PRODUCTS_REQUEST,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILUR, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from '../types'

const initialState= { loading: false, items: [] ,filterdItems:[], error: ''}
export const productReducers = (state =initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                  Loading:true,
                  error:'',
                  items:[],
                  filterdItems: [] 
                }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                  Loading:false,
                  items:action.payload,
                  filterdItems: action.payload 
                }
        case FETCH_PRODUCTS_FAILUR:
            return {
                ...state,
                  error:action.payload,
                  Loading:false,
                  items:[],
                  filterdItems:[] 
                }
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                size: action.payload.size,
                filterdItems: action.payload.items
            }
        case ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort,
                filterdItems: action.payload.items
            }
        default:
            return state

    }
}