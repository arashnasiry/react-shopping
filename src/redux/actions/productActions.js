import axios from 'axios'
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILUR,
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE
} from '../types'

export const fetchProducts = () => async (dispatch) => {
    dispatch({
        type: FETCH_PRODUCTS_REQUEST,
    })
    try {
        await axios.get(`http://localhost:5000/products`)
            .then((res) =>
                dispatch({
                    type: FETCH_PRODUCTS_SUCCESS,
                    payload: res.data,
                })
            )
    } catch {
        dispatch({
            type: FETCH_PRODUCTS_FAILUR,
            payload: "Error Occurd"
        })
    }
}
export const filterProducts = (products, size) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: size === "ALL"
                ? products
                : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
        }
    })
}
export const sortProducts = (filterdProducts, sort) => (dispatch) => {
    const sortedProducts = filterdProducts.slice()
    if (sort === "latest") {
        sortedProducts.sort((a, b) => (a._id > b._id) ? 1 : -1)
    } else {
        sortedProducts.sort((a, b) => (
            sort === 'lowest' ? a.price > b.price ? 1 : -1
                :
                a.price > b.price ? -1 : 1
        ))
    }
    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts,

        }
    })
}