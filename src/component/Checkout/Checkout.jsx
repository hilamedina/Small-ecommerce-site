import React, { Component } from 'react';
import './Checkout.css';

export default class Checkout extends Component {
  componentDidMount = () => {
    console.log(this.props.choosenItem);
  };
  showChoosenProduct = () => {
    const NewArray = this.props.choosenItem.map((element) => {
      return (
        <div className="Data-style-card-item" key={element.id}>
          <img className="Image-in-cart-item" src={element.image} alt="" />
          <div>{element.price}</div>
          <div>{element.title}</div>
          <div>Quantity</div>
          <div>Delete</div>
        </div>
      );
    });
    return NewArray;
  };
  render() {
    return (
      <div className="Checkout">
        <div className="Data-style-checkout">{this.showChoosenProduct()}</div>
      </div>
    );
  }
}

// return <div className="checkout-component">{this.props.choosenItem}</div>;
