import React, { Component } from 'react';
import Data from '../Data/Data';
import './Products.css';

export default class products extends Component {
  state = {
    // counter: 0,
    arrayOfData: [],
  };
  // addCount = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  //   // console.log(this.state.counter);
  // };

  printData = () => {
    const dataMaps = Data.map((element) => {
      return (
        <div className="Data-style-card" key={element.id}>
          <img className="image-maps" src={element.image} alt="" />
          <div>{element.price}</div>
          <div>{element.title}</div>
          <button onClick={this.props.clickhandle}>Add to cart</button>
        </div>
      );
    });
    return dataMaps;
  };

  render() {
    return <div className="Data-style">{this.printData()}</div>;
  }
}
