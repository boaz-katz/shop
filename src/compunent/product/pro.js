import React from "react";

import "./pro.css";

class Product extends React.Component {
  state = {
    amount: this.props.amount,
  };
  incrementCount = () => {
    if (this.state.amount) {
      this.setState(({ amount }) => ({ amount: amount - 1 }));
      this.props.remove();
    }
  };
  resetCount = () => {
    if (this.state.amount < this.props.amount) {
      this.setState(({ amount }) => ({ amount: amount + 1 }));

      this.props.add();
    }
  };

  render() {
    return (
      <div>
        <div className="Product">
          <p className="titel">{this.props.title}</p>
          <img className="img" src={this.props.img} />
          <div> left: {this.state.amount}</div>
          <div>
            <button onClick={this.incrementCount}>add</button>
            <span>
              <button onClick={this.resetCount}> return </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
