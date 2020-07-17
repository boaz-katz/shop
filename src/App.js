import React, { useState, useEffect } from "react";
import "./App.css";
import Cartprodact from "./compunent/cartprodact/cartprodact";
import Prodact from "./compunent/product/pro";
import Heder from "./compunent/heder/heder";
import Cart from "./compunent/cart/cart";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  // geting prodacts from api
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://quilt-flax-chemistry.glitch.me/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  // bilding the cart object
  const [Cartp, setcartp] = useState([]);

  Cartp.filter((filerprodact) => {
    return Cartp.key !== filerprodact.key;
  });
  console.log(Cartp);

  // counter for cart prodacts
  const [Counterforcart, setCounter] = useState(1);

  // counting all the amunt of gods thet the costumer took
  const [cart, setcart] = useState(0);

  const add = () => {
    setcart(cart - 1);
  };

  const remove = () => {
    setcart(cart + 1);
  };

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>

        <div className="App">
          <Heder />
          <div className="cartarea">
            {Cartp.map((cartps) => (
              <Cartprodact
                key={cartps.key}
                img={cartps.img}
                title={cartps.title}
                amount={cartps.amount}
                onremove={() =>
                  setcartp(
                    Cartp.filter((cartprodactlist) => {
                      return cartps.key !== cartprodactlist.key;
                    })
                  )
                }
              />
            ))}
          </div>
          <Cart cart={cart} />
          <div className=".prodacts"></div>
          {Products.map((items) => (
            <Prodact
              key={items.id}
              img={items.image}
              title={items.title}
              amount={items.quantity}
              add={add}
              remove={remove}
              addtocart={() => {
                setcartp([
                  ...Cartp,
                  {
                    key: items.id,
                    img: items.image,
                    title: items.title,
                    amount: 1,
                  },
                ]);
                console.log(Cartp);
              }}
            />
          ))}
        </div>
      </div>
    </Router>
  );
};

export default App;
