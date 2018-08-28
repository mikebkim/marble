import React from 'react';

const CartItem = (props) => {
    return (
        <div className="CartItem">
            <p>{props.item.product.name}</p>
            <p>Price:&nbsp;{props.item.product.price}</p>
            <p>Description:&nbsp;{props.item.product.description}</p>
            <p>Ingredients:&nbsp;{props.item.product.ingredients}</p>
            <p>Qty:&nbsp;{props.item.quantity}</p>
            <p><button onClick={() => props.handleRemoveItem(props.item.product._id)}> - </button></p>
        </div>
    );
};

export default CartItem;