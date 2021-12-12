import React from 'react';

const Filter = ({filterProducts , products , sort }) => {
    return (
        <div className='filter-size'>
        Filter  {" "}
        <select onChange={(e) => filterProducts(products, e.target.value)} selectedvalue={sort}>
            <option value="ALL">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select>
    </div>
    );
}

export default Filter;
