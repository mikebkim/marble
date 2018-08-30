import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import ProductPage from './pages/ProductPage/ProductPage';
import HomePage from './pages/HomePage/HomePage';
import Contact from './components/Contact/Contact';
import CartPage from './pages/CartPage/CartPage';
import LoginRegisterModal from './components/LoginRegisterModal/LoginRegisterModal';
import ProductModal from './components/ProductModal/ProductModal';
import CheckoutModal from './components/CheckoutModal/CheckoutModal';
import userService from './utils/userService';
import MyAccount from './components/MyAccount/MyAccount';
import productsAPI from './utils/productsAPI';
import ordersAPI from './utils/ordersAPI';
import Footer from './components/Footer/Footer';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      showLoginModal: false,
      showProductModal: false,
      showCheckoutModal: false,
      cart: null,
      selectedProduct: null
    }
  }

  // helper methods

  // callback methods

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignup = () => {
    this.setState({
      user: userService.getUser(),
      showLoginModal: false
    });
  }

  handleLogin = () => {
    this.setState({
      user: userService.getUser(),
      showLoginModal: false
    });
  }

  handleUpdate = () => {
    this.setState({
      user: userService.getUser()
    });
  }

  handleLoginModal = () => {
    this.setState({ showLoginModal: !this.state.showLoginModal });
  }

  handleProductModal = (product) => {
    this.setState({ showProductModal: !this.state.showProductModal, selectedProduct: product });

  }
  handleCheckoutModal = (product) => {
    this.setState({ showCheckoutModal: !this.state.showCheckoutModal, selectedProduct: product });
  }

  handleAddItem = (productId) => {
    productsAPI.addProduct(productId)
      .then(cart => {
        this.setState({ cart });
        this.props.history.push('/cart');
      });
  }

  handleRemoveItem = (productId) => {
    productsAPI.removeProduct(productId)
      .then(cart => {
        this.setState({ cart });
      });
  }

  // lifecycle methods

  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user }, function () {
      if (user) {
        ordersAPI.getCart()
          .then(cart => this.setState({ cart }))
      }
    });
  }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Route path='/' render={(props) => (
            <NavBar
              user={this.state.user}
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              handleSignup={this.handleSignup}
              handleLoginModal={this.handleLoginModal}
              {...props}
            />)}
          />
          {this.state.showLoginModal && <LoginRegisterModal
            show={this.state.showLoginModal} onClose={this.handleLoginModal}
            handleSignup={this.handleSignup}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
          />}
          {this.state.showProductModal && <ProductModal
            product={this.state.selectedProduct}
            onClose={this.handleProductModal}
          />}
          {this.state.showCheckoutModal && <CheckoutModal
            product={this.state.selectedProduct}
            onClose={this.handleCheckoutModal}
          />}
          <Banner />
          <Switch>
            <Route exact path='/' render={() => <HomePage />} />
            <Route path='/products' render={(props) => <ProductPage
              handleAddItem={this.handleAddItem}
              handleProductModal={this.handleProductModal}
              user={this.state.user}
              {...props}
            />} />
            <Route path='/contact' render={() => <Contact />} />
            <Route path='/cart' render={(props) => <CartPage
              user={this.state.user}
              cart={this.state.cart}
              handleAddItem={this.handleAddItem}
              handleRemoveItem={this.handleRemoveItem}
              handleCheckoutModal={this.handleCheckoutModal}
              {...props}
            />}
            />
            <Route path='/checkout' render={(props) => <CheckoutPage />} />
            <Route path='/myaccount' render={(props) => <MyAccount
              user={this.state.user}
              {...props}
            />}
            />
          </Switch>
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
