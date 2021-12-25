import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShopCounter extends Component {
  render() {
    return (
      <div>
        <Link className="Link" to="/checkout">
          {/* <div>
            {this.props.counter}
            {this.props.nameOfButton} 🛒
          </div> */}
          <div>{this.props.counter} </div>
          <div>{this.props.nameOfButton} 🛒</div>
        </Link>
      </div>
    );
  }
}
