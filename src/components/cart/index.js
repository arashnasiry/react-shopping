import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react/cjs/react.development'
import { removeFromCart } from '../../redux/actions/cartActions'
import { createOrder, clearOrder } from '../../redux/actions/orderActions'
import formatCurrency from '../../utiles/util'
import Modal from 'react-modal'
import Checkout from './checkout'
import CartItems from './cartItems'
import Price from './price'
import './styles.css'

function Cart({ cartItems, removeFromCart, order, createOrder }) {
    const [checkoutIsOpen, setCheckOutIsOpen] = useState(false)
    const [isopen, setIsopen] = useState(false)
    const hendleOrder = (newOrder) => {
        createOrder({ ...newOrder, cartItems: cartItems, total: cartItems.reduce((a, c) => a + c.price * c.count, 0) })
        setIsopen(true)
    }
    const closeModal = () => {
        setIsopen(false)
        setCheckOutIsOpen(false)
        clearOrder()
    }
    return (
        <div>
            {cartItems.length === 0 ? (
                <div className='cart cart-header'>Cart is Empty</div>
            ) : (<div className='cart cart-header'>
                You have {cartItems.length} in the Cart {""}
            </div>
            )}
            <Modal
                isOpen={isopen}
                onRequestClose={closeModal}
                ariaHideApp={false}
            >

                <button className='close-modal' onClick={closeModal}>x</button>
                <div className='order-details'>
                    <h1>Add succcess</h1>
                </div>
            </Modal>

            <div>
                <CartItems cartItems={cartItems} removeFromCart={removeFromCart} />
                <div>
                    {cartItems.length !== 0 && (
                        <Price cartItems={cartItems} setCheckOutIsOpen={setCheckOutIsOpen} />
                    )}
                    <Checkout hendleOrder={hendleOrder} isOpen={checkoutIsOpen} />

                </div>
            </div>
        </div>
    )
}

export default connect((state) => ({
    cartItems: state.cart.cartItems,
    order: state.order
}), { removeFromCart, createOrder, clearOrder })(Cart)
