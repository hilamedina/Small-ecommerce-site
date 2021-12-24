import React, { Component } from 'react';
import Data from '../Data/Data';
import './Products.css';

export default class products extends Component {
  state = {
    counter: 0,
    arrayOfData: [],
  };
  addCount = () => {
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter);
  };

  printData = () => {
    const dataMaps = Data.map((element) => {
      return (
        <div className="Data-style" key={element.id}>
          <div className="Data-style-card">
            <img className="image-maps" src={element.image} alt="" />
            <div>{element.price}</div>
            <div>{element.title}</div>
            <button
              onClick={() => {
                this.addCount();
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      );
    });
    return dataMaps;
  };

  render() {
    return <div>{this.printData()}</div>;
  }
}
