import React, { Component } from 'react';

export default class Checkout extends Component {
  componentDidMount = () => {
    console.log(this.props.choosenItem);
  };
  showChoosenProduct = () => {
    const NewArray = this.props.choosenItem.map((element) => {});
  };

  render() {
    return <div>hila</div>;
  }
}

// return <div className="checkout-component">{this.props.choosenItem}</div>;
