import React, { Component } from 'react';
import Data from '../Data/Data';
import './Products.css';

export default class products extends Component {
  state = {
    // itemList: [],
    // arrayOfData: [],
  };
  printData = () => {
    const dataMaps = Data.map((element) => {
      return (
        <div className="Data-style-card" key={element.id}>
          <img className="image-maps" src={element.image} alt="" />
          <div>{element.price}</div>
          <div>{element.title}</div>
          <button onClick={() => this.props.clickhandle(element)}>
            Add to cart
          </button>
        </div>
      );
    });
    return dataMaps;
  };

  // addItemToCart = () => {
  //   let cartItem =

  // }

  render() {
    return <div className="Data-style">{this.printData()}</div>;
  }
}
