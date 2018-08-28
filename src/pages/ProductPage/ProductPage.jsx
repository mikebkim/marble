import React, { Component } from 'react';
import productsAPI from '../../utils/productsAPI';
import ProductList from '../../components/ProductList/ProductList';

class ProductPage extends Component {
    constructor(props) {
        super(props);
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
                <ProductList 
                    handleAddItem={this.props.handleAddItem}
                    handleRemoveItem={this.props.handleRemoveItem}
                    products={this.state.products} 
                />
            </div>
        );
    }
}

export default ProductPage;