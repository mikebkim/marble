import React from 'react';
import './ProductList.css';
import Product from '../../components/Product/Product';

const ProductList = (props) => {
    return (
        <section className="ProductList">
            <div>
                <h1>Product List</h1>
            </div>
            <div className="ProductList-Products">
                {props.products.map(p => <Product
                    product={p} 
                    handleAddItem={props.handleAddItem}
                    handleProductModal={props.handleProductModal}
                />)}
            </div>
        </section>
    );
};

export default ProductList;