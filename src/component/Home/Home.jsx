import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderNavbar from '../headerNavbar/HeaderNavbar';
import Products from '../Products/Products';
import Homepage from '../Homepage/Homepage';
import './Home.css';
import Checkout from '../Checkout/Checkout';

export default class Home extends Component {
  state = {
    quantity: 1,
    counter: 0,
    arrayOfItems: [],
  };
  addCount = (productElementFromMap) => {
    this.setState({ counter: this.state.counter + 1 });
    this.setState((prevState) => ({
      arrayOfItems: [...prevState.arrayOfItems, productElementFromMap],
    }));
  };

  removeItem = (productElementFromMap) => {
    this.setState({ counter: this.state.counter - 1 });
    this.setState((prevState) => ({
      arrayOfItems: prevState.arrayOfItems.filter(
        (e) => e !== productElementFromMap
      ),
    }));
  };

  render() {
    return (
      <div className="Home">
        <BrowserRouter>
          <HeaderNavbar counter={this.state.counter} />
          <div>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/products">
              <Products clickhandle={this.addCount} />
            </Route>
            <Route exact path="/checkout">
              <Checkout
                choosenItem={this.state.arrayOfItems}
                quantityButton={this.state.quantity}
                deleteitemFromCart={this.removeItem}
              />
            </Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
//props

//leftside - name of props
//riht side - value of the props

// if we are in the object where the state is  value ==> this.state.(what ever you want)
// when i want to use my props ==> this.props.(name pf the props)
