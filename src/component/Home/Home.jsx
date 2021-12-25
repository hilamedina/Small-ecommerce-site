import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderNavbar from '../headerNavbar/HeaderNavbar';
import Products from '../Products/Products';
import Homepage from '../Homepage/Homepage';
import './Home.css';
// import ShopCounter from '../ShopCounter/ShopCounter';
import Checkout from '../Checkout/Checkout';
// import Checkout from '../Checkout/Checkout';

export default class Home extends Component {
  state = {
    counter: 0,
  };
  addCount = () => {
    this.setState({ counter: this.state.counter + 1 });
    // console.log(this.state.counter);
  };
  render() {
    return (
      <div className="Home">
        <BrowserRouter>
          <HeaderNavbar counter={this.state.counter} />
          <div>
            <Route exact path="/" exact component={Homepage}>
              {' '}
            </Route>
            <Route exact path="/products">
              <Products clickhandle={this.addCount} />
            </Route>
            <Route exact path="/checkout" exact component={Checkout} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
