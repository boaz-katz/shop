import React, { useState } from "react";

import "./pro.css";

const Product = (props) => {
  const [cunt, setcunt] = useState(props.amount);

  const incrementCount = () => {
    if (cunt) {
      setcunt(cunt - 1);
      props.remove();
    }
  };

  const resetCount = () => {
    if (cunt < props.amount) {
      setcunt(cunt + 1);

      props.add();
    }
  };

  return (
    <div>
      <div className="Product">
        <p className="titel">{props.title}</p>
        <img className="img" src={props.img} />
        <div> left: {cunt}</div>
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
