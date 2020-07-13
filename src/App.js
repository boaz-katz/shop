import React from "react";
import "./App.css";
import Prodact from "./compunent/product/pro";
import Heder from "./compunent/heder/heder";
import Cart from "./compunent/cart/cart";
class App extends React.Component {
  state = {
    Products: [
      {
        key: 111,
        title: "tomato",
        amount: 5,
        img:
          "https://ca-times.brightspotcdn.com/dims4/default/129d07e/2147483647/strip/true/crop/1421x1351+0+0/resize/840x799!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc1%2F99%2F95996981234386c4e0a3e46464df%2Fsdut-tomato-a-20160902",
      },

      {
        key: 311,
        title: "cucumber",
        amount: 6,
        img: "https://m.pricez.co.il/ProductPictures/Pricez65716.jpg",
      },
      {
        key: 411,
        title: "watermelon",
        amount: 7,
        img: "https://images-na.ssl-images-amazon.com/images/I/51Y-SvrbIDL.jpg",
      },

      {
        key: 511,
        title: "avocado",
        amount: 8,
        img:
          "data:image/jpeg;base64,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  ",
      },
      {
        key: 611,
        title: "orange",
        amount: 3,
        img:
          "https://cdn.shopify.com/s/files/1/0060/1466/4807/products/0000368_-orange_600x.jpg?v=1576668915",
      },
      {
        title: "banana",
        amount: 3,
        img: "https://www.wpclipart.com/food/fruit/banana/banana_peeled.jpg",
      },
    ],
    cart: 0,
  };

  add = () => {
    this.setState(({ cart }) => ({ cart: cart - 1 }));
  };
  remove = () => {
    this.setState(({ cart }) => ({ cart: cart + 1 }));
  };

  render() {
    return (
      <div>
        <div className="App">
          <Heder />
          <Cart cart={this.state.cart} />
          {this.state.Products.map((items) => (
            <Prodact
              key={items.key}
              title={items.title}
              amount={items.amount}
              img={items.img}
              add={this.add}
              remove={this.remove}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
