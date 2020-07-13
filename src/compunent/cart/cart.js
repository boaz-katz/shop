import React from "react";

import "./cart.css";

function Cart(props) {
  return (
    <div>
      <div>
        <img
          className="CART"
          src="https://www.mamayokero.co.il/images/60000.jpg"
        />
      </div>
      <span className="caunter">{props.cart}</span>
    </div>
  );
}

export default Cart;
