import React from 'react';
import './ProductList.css';
import Product from '../../components/Product/Product'

const ProductList = (props) => {
    return (
        <section className="ProductList">
            <div>
                <h2>Product List</h2>
            </div>
            <div className="ProductList-Products">
                {props.products.map(p =>
                    <Product product={p}
                    />
                )}
            </div>
        </section>
    )
};

export default ProductList;