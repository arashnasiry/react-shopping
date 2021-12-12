import { React, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../redux/actions/productActions'
import { addToCart } from '../../redux/actions/cartActions'
import Product from './Items/Product'
import './styles.css'

function Products({ products, addToCart, fetchProducts }) {

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            {!products ? (
                <div>Loading ...</div>
            ) : (

                <ul className='products'>
                    {products.map(product => (
                        <Product key={product.id} product={product} addToCart={addToCart} />
                    ))}

                </ul>
            )}
        </div>
    )
}
export default connect((state) => ({ products: state.products.filterdItems }), { fetchProducts, addToCart })(Products)
