import React, { Component } from 'react';
import {
  BrowserRouter as Router,
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
import userService from './utils/userService';
import MyAccount from './components/MyAccount/MyAccount';
import productsAPI from './utils/productsAPI';
import ordersAPI from './utils/ordersAPI';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      showLoginModal: false,
      showProductModal: false,
      cart: null
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

  handleProductModal = () => {
    this.setState({ showProductModal: !this.state.showProductModal });
  }

  handleAddItem = (productId) => {
    productsAPI.addProduct(productId)
      .then(cart => {
        this.setState({ cart });
      });
  }

  handleRemoveItem = (productId) => {

  }

  // lifecycle methods

  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user }, function () {
      ordersAPI.getCart()
        .then(cart => this.setState({ cart }))
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
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
            <Banner />
            {this.state.showLoginModal && <LoginRegisterModal
              show={this.state.showLoginModal} onClose={this.handleLoginModal}
              handleSignup={this.handleSignup}
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
            />}
            {this.state.showProductModal && <ProductModal
              show={this.state.showProductModal} onClose={this.handleProductModal}
            />}
            <Switch>
              <Route exact path='/' render={() => <HomePage />} />
              <Route path='/products' render={(props) => <ProductPage
                handleAddItem={this.handleAddItem}
                handleProductModal={this.handleProductModal}
                {...props}
              />} />
              <Route path='/contact' render={() => <Contact />} />
              <Route path='/cart' render={({ history }) => <CartPage
                user={this.state.user}
                cart={this.state.cart}
                handleAddItem={this.handleAddItem}
                history={history}
              />}
              />
              <Route path='/myaccount' render={(props) => <MyAccount
                user={this.state.user}
                {...props}
              />}
              />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
