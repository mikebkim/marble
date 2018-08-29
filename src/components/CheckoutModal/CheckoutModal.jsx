import React from 'react';
import './CheckoutModal.css'
import CheckoutModalPop from '../CheckoutModalPop/CheckoutModalPop';

const CheckoutModal = (props) => {
    return (
        <div className="CheckoutModal">
            <div className='CheckoutModal-content'>
                <div className='CheckoutModal-close' onClick={props.onClose}>X</div>
                {props.product && <CheckoutModalPop product={props.product}/>}
            </div>
        </div>
    );
}

export default CheckoutModal;
