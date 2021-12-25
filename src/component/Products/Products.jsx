import React, { Component } from 'react';
import Data from '../Data/Data';
import './Products.css';

export default class products extends Component {
  printData = () => {
    const dataMaps = Data.map((element) => {
      return (
        <div className="Data-style-card" key={element.id}>
          <img className="Image-maps" src={element.image} alt="" />
          <div>{element.price}</div>
          <div>{element.title}</div>
          <button
            className="Add-to-cart-button"
            onClick={() => this.props.clickhandle(element)}
          >
            Add to cart
          </button>
        </div>
      );
    });
    return dataMaps;
  };
  render() {
    return <div className="Data-style">{this.printData()}</div>;
  }
}
