import React from 'react';
import Item from './item';

const CartItems = ({ cartItems, removeFromCart }) => {
    return (
        <div className='cart'>
            <ul className='cart-items'>
                {cartItems.map(item => (
                    <Item item={item} removeFromCart={removeFromCart} />
                ))}
            </ul>
        </div>
    );
}

export default CartItems;
