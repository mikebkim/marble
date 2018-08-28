import React from 'react';

const Product = (props) => {
    return (
        <div>
            <article className="Product">
                <div>
                    <h3> {props.product.name} </h3>
                    <p> Price:&nbsp;{props.product.price} </p>
                    <p> Description:&nbsp;{props.product.description} </p>
                    <p> Ingredients:&nbsp;{props.product.ingredients} </p>
                    <div>
                        <button onClick={() => props.handleAddItem(props.product)}>Add to Cart</button>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Product;