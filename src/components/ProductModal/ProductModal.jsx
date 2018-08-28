import React from 'react';
import './ProductModal.css'
import ProductModalPop from '../ProductModalPop/ProductModalPop';

const ProductModal = (props) => {
    return (
        <div className="ProductModal">
            <div className='ProductModal-content'>
                <div className='ProductModal-close' onClick={props.onClose}>X</div>
                {props.children}
                <ProductModalPop />
            </div>
        </div>
    );
}

export default ProductModal;
