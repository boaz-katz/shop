import React, { useState } from "react";

import "./cart.css";

function Cart(props) {
  const [chosep, setchosep] = useState([]);

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
