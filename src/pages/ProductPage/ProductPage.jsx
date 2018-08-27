import React, { Component } from 'react';
import productsAPI from '../../utils/productsAPI';
import ProductList from '../../components/ProductList/ProductList';

class ProductPage extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        productsAPI.index().then(products =>
            this.setState({ products })
        );
    }
    render() {
        return (
            <div>
                <ProductList products={this.state.products} />
            </div>
        );
    }
}

export default ProductPage;