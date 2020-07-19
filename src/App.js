import React, { useState, useEffect } from "react";

import "./App.css";
import Cartprodact from "./compunent/cartprodact/cartprodact";
import Prodact from "./compunent/product/pro";
import Heder from "./compunent/heder/heder";
import Cart from "./compunent/cart/cart";
import axios from "axios";
import { Slider, Switch } from "antd";

const App = () => {
  // geting prodacts from api
  const [Products, setProducts] = useState([]);
  const [Min1, setMin] = useState();
  const [Max1, setMax] = useState();
  console.log(Products);
  useEffect(() => {
    axios.get("https://quilt-flax-chemistry.glitch.me/products").then((res) => {
      console.log(res.data);

      let praices = res.data.map((prod) => prod.price);
      setProducts(res.data);
      setMin(Math.min(...praices));
      setMax(Math.max(...praices));
    });
  }, []);

  // bilding the cart object
  const [Cartp, setcartp] = useState([]);

  // counting   all the amunt of gods thet the costumer took
  const [cart, setcart] = useState(0);

  const add = () => {
    setcart(cart - 1);
  };

  const remove = () => {
    setcart(cart + 1);
  };

  function onChange(value) {
    console.log("onChange: ", value);
  }

  function onAfterChange(value) {
    console.log("onAfterChange: ", value);
  }

  return (
    <div>
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
        <div className=".prodacts">
          <div className="slider">
            ringe of praice
            {Min1 && Max1 ? (
              <Slider
                tooltipVisible
                range
                step={10}
                min={Min1}
                max={Max1}
                defaultValue={[Min1, Max1]}
                onChange={onChange}
                onAfterChange={onAfterChange}
              />
            ) : null}
          </div>
        </div>

        {Products.filter((x) => x.price < Max1 && x.price > Min1).map(
          (items) => (
            <Prodact
              key={items.id}
              img={items.image}
              title={items.title}
              amount={items.quantity}
              price={items.price}
              add={add}
              remove={remove}
              addtocart={() => {
                const prodacttocart = Cartp.find(
                  (prod) => prod.key === items.id
                );
                if (!prodacttocart) {
                  setcartp([
                    ...Cartp,
                    {
                      key: items.id,
                      img: items.image,
                      title: items.title,
                      amount: 1,
                    },
                  ]);
                } else {
                  prodacttocart.amount++;
                }

                console.log(Cartp);
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
