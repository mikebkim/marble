import React from 'react';
import './ProductModal.css'
import ProductModalPop from '../ProductModalPop/ProductModalPop';

const ProductModal = (props) => {
    return (
        <div className='ProductModal'>
            <div className='ProductModal-content col-7'>
                <div className='ProductModal-close hvr-back-pulse' onClick={props.onClose}>X</div>
                {props.product && <ProductModalPop product={props.product}/>}
            </div>
        </div>
    );
}

export default ProductModal;
