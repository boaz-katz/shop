import React, { useState, useEffect } from "react";
import "./App.css";
import Prodact from "./compunent/product/pro";
import Heder from "./compunent/heder/heder";
import Cart from "./compunent/cart/cart";
import axios from "axios";

const App = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://quilt-flax-chemistry.glitch.me/products").then((res) => {
      setProducts(res.data);
      console.log(res.data[0]);
    });
  }, []);

  const [cart, setcart] = useState(0);

  const add = () => {
    setcart(cart - 1);
  };
  const remove = () => {
    setcart(cart + 1);
  };

  return (
    <div>
      <div className="App">
        <Heder />
        <Cart cart={cart} />
        {Products.map((items) => (
          <Prodact
            key={items.id}
            img={items.image}
            title={items.title}
            amount={items.quantity}
            add={add}
            remove={remove}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
