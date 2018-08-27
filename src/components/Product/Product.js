import React from 'react';

const Product = (props) => {
    return(
        <div>
            <article className="Product">
                <div>
                    <h3> {props.product.name} </h3>
                    <p> {props.product.price} </p>
                    <p> {props.product.description} </p>
                    <p> {props.product.ingredients} </p>
                    <div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Product;