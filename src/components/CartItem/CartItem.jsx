import React from 'react';

const CartItem = (props) => {
    return(
        <div className="CartItem">
            <p>
                This is a cart item
                <button onClick={() => props.handleRemoveItem(props.item.products)}> - </button>
                Qty:
                <span>{props.item.quantity}</span>{props.item.product.name}
            </p>
        </div>
    );
};

export default CartItem;