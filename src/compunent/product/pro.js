import React, { useState } from "react";

import "./pro.css";

const Product = (props) => {
  const [count, setcount] = useState(props.amount);

  const incrementCount = () => {
    if (count) {
      setcount(count - 1);
      props.remove();

      if (count + 1 > props.amount) {
        props.addtocart();
      } else {
      }
    }
  };

  const resetCount = () => {
    if (count < props.amount) {
      setcount(count + 1);

      props.add();
    }
  };

  return (
    <div>
      <div className="Product">
        <p className="titel">{props.title}</p>
        <img className="img" src={props.img} />
        <div> left: {count}</div>
        <div> {props.items}</div>

        <div>
          <button onClick={incrementCount}>add</button>
          <span>
            <button onClick={resetCount}> return </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
