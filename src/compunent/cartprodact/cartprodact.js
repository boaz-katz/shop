import React, { useState } from "react";

import "./cartpodact.css";

function Cartprodact(props) {
  const [proimg, setimg] = useState(props);
  const [countr, setcountr] = useState(props.cart);

  console.log(props);

  return (
    <div>
      <div className="cartProduct">
        <div>
          <img className="imgcart" src={proimg.img} />
        </div>
        <p className="prodactcartcounter">{props.amount}</p>

        <button className="cartbutton" onClick={() => props.onremove()}>
          delit
        </button>
      </div>
    </div>
  );
}

export default Cartprodact;
