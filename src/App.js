import Checkout from './Checkout.js'
import Cart from './Cart.js'
import Nav from './Nav.js'
import Products from './Products.js'
import Product1 from './Product1.js'
import Product2 from './Product2.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';

const App = () => {

  return (
    <Router>
      <Nav />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/Products" exact component={Products} />
        <Route path="/Checkout" exact component={Checkout} />
        <Route path="/Products/1" exact component={Product1} />
        <Route path="/Products/2" exact component={Product2} />
        <Route path="/Cart" exact component={Cart} />
      </Switch>
    </Router>
  )
}

export default App;
