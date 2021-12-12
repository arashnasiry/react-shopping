import React from 'react';
import formatCurrency from '../../../utiles/util'
const Product = ({ product, addToCart }) => {
    return (

        <li>
            <div className='product'>
                <a href={'#' + product._id}>
                    <img src={product.image} alt={product.title}></img>
                    <div className='title'>
                        <span>{product.title}</span>
                        <span>{formatCurrency(product.price)}</span>
                    </div>
                </a>
                <div className='product-price'>
                    <button
                        onClick={() => addToCart(product)}
                        className='button primary'>
                        Add to cart
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Product;
