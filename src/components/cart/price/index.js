import React from 'react';
import formatCurrency from '../../../utiles/util'
const Price = ({setCheckOutIsOpen,cartItems}) => {
    return (
        <div className='cart'>
            <div className='total'>
                Total:{" "}
                <div>
                    {formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
                </div>
                <button onClick={() => setCheckOutIsOpen(true)} className='button primary'>Proceed</button>
            </div>
        </div>
    );
}

export default Price;
