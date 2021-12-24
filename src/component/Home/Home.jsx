import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderNavbar from '../headerNavbar/HeaderNavbar';
import Products from '../Products/Products';
import Homepage from '../Homepage/Homepage';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <BrowserRouter>
          <HeaderNavbar />
          <div>
            <Route exact path="/" exact component={Homepage}></Route>
            <Route exact path="/products" exact component={Products}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
