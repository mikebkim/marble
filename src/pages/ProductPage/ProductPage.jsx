import React, { Component } from 'react';
import productAPI from '../../utils/productAPI';
import ProductList from '../../components/ProductList/ProductList';
import { Link } from 'react-router-dom';

class ProductPage extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        productAPI.index().then(products =>
            this.setState({ products })
        );
    }
    render() {
        return (
            <div>
                <ProductList products={this.props.products} />
            </div>
        );
    }
}

export default ProductPage;