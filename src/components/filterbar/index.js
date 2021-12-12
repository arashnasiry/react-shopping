import React from 'react'
import { connect } from 'react-redux'
import { filterProducts, sortProducts } from '../../redux/actions/productActions'
import Order from './order'
import Filter from './filter'
import './styles.css'

function Filterbar({ size, sort, products, filteredProducts, filterProducts, sortProducts }) {
    return (
        <div className='filter'>
            <div className='filter-result'>{filteredProducts ? filteredProducts.length : '0'} Products</div>
            <Order sortProducts={sortProducts} filteredProducts={filteredProducts} size={size} />
            <Filter filterProducts={filterProducts} products={products} sort={sort} />

        </div>
    )
}

export default connect((state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filterdItems,
}), {
    filterProducts, sortProducts
})(Filterbar)
