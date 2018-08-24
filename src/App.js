import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>Use Promo Code "PRIME10" for 20% Off Your Next Order!</header>
        <NavBar />
        <Banner />
        <Router>
          <Switch>
            <Route exact path='/products' render={({ history }) =>
              <Products />
            } />
          </Switch>
        </Router>
        <Router>
          <Switch>
            <Route exact path='/about' render={({ history }) =>
              <About />
            } />
          </Switch>
        </Router>
        <Router>
          <Switch>
            <Route exact path='/contact' render={({ history }) =>
              <Contact />
            } />
          </Switch>
        </Router>
        <Router>
          <Switch>
            <Route exact path='/cart' render={({ history }) =>
              <Cart />
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
