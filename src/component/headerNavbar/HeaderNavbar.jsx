import React, { Component } from 'react';
import './HeaderNavbar.css';
import { Link } from 'react-router-dom';
// import Products from '../Products/Products';

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
        <button onClick={this.props.handleclick}>counter</button>
      </div>
    );
  }
}
//https://fakestoreapi.com/products
