import React from "react";

import "./pro.css";

class Product extends React.Component {
  state = {
    amount: this.props.amount,
  };
  incrementCount = () => {
    this.setState(({ amount }) => ({ amount: amount - 1 }));
  };

  render() {
    return (
      <div>
        <div className="Product">
          <p>{this.props.title}</p>
          <img className="imges" src={this.props.imgis} />
          <div>Count: {this.state.amount}</div>
          <div>
            <button onClick={this.incrementCount}>Increment Count</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
