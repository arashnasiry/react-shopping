import axios from 'axios'
import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER } from '../types'

export const createOrder = (order) => async (dispatch) => {
    axios.post('http://localhost:5000/order', order)
        .then((res) => {
            dispatch({
                type: CREATE_ORDER,
                payload: res.data
            })
            localStorage.clear("cartItems")
            dispatch({
                type: CLEAR_CART,
            })
        })

}

export const clearOrder = () => (dispatch) => {
    dispatch({ type: CLEAR_ORDER })
} 