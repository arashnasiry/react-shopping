import React from 'react';
import formatCurrency from '../../../../utiles/util'

const Item = ({item , removeFromCart}) => {
    return (
        <li key={item._id}>
            <div>
                <img src={item.image} alt={item.title}></img>
            </div>
            <div>
                <div>{item.title}</div>
                <div className='right'>
                    {formatCurrency(item.price)} X {item.count} {' '}
                    <button className='button' onClick={() => removeFromCart(item)}>Remove</button>
                </div>
            </div>
        </li>
    );
}

export default Item;
