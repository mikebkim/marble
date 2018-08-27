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
import Cart from './components/Cart/Cart';
import LoginRegisterModal from './components/LoginRegisterModal/LoginRegisterModal';
import userService from './utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      showLoginModal: false
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

  handleLoginModal = () => {
    this.setState({ showLoginModal: !this.state.showLoginModal });
  }

  // lifecycle methods

  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user })
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
            />}
            <Switch>
              <Route exact path='/' render={() => <HomePage />} />
              <Route path='/products' render={() => <ProductPage />} />
              <Route path='/contact' render={() => <Contact />} />
              <Route path='/cart' render={({ history }) => <Cart history={history} />} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
