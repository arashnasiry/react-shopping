import React from 'react';

const Order = ({ sortProducts, size, filteredProducts }) => {
    return (
        <div className='filter-sort'>
            order  {" "}
            <select onChange={(e) => sortProducts(filteredProducts, e.target.value)} selectedvalue={size}>
                <option value='latest'>Latest</option>
                <option value='lowest'>Lowest</option>
                <option value='highest'>Highest</option>
            </select>
        </div>
    );
}

export default Order;
