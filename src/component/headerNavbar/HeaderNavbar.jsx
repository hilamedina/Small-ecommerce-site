import React, { Component } from 'react';
import './HeaderNavbar.css';
import { Link } from 'react-router-dom';

export default class HeaderNavbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="Link" to="/products">
          Products
        </Link>
        <Link className="Link" to="/">
          Homepage
        </Link>
        <Link className="Link" to="/checkout">
          <div>{this.props.counter} </div>
          <div>{this.props.nameOfButton} 🛒</div>
        </Link>
      </div>
    );
  }
}
//https://fakestoreapi.com/products
