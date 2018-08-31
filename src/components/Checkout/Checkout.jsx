import React, { Component } from 'react';
import './Checkout.css';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      creditCard: '',
      expDate: '',
      cvc: '',
      name: ''
    }
  }

  render() {
    return (
      <div className="Checkout">
        <h3>Shipping Information</h3>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control checkout" placeholder="Email" value={this.state.email} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control checkout" placeholder="Name" value={this.state.name} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control checkout" placeholder="Address" value={this.state.adress} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control checkout" placeholder="Address 2" value={this.state.address2} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control checkout" placeholder="City" value={this.state.city} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control checkout" placeholder="State" value={this.state.state} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control checkout" placeholder="Zipcode" value={this.state.zip} />
            </div>
          </div>
          <h3>Billing Information</h3>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control checkout" placeholder="Credit Card Number" value={this.state.creditCard} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control checkout" placeholder="Expiration Date" value={this.state.expDate} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control checkout" placeholder="CVC" value={this.state.cvc} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn-default btn success">Checkout</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Checkout;