import React from "react";
import "./App.css";
import Prodact from "./compunent/product/pro";
import Heder from "./compunent/heder/heder";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <Heder />
          <Prodact
            title="tomato"
            amount={5}
            imgis="https://www.zeraim.com/sites/g/files/zhg866/f/styles/syngenta_cta_teaser/public/tory_s_2.png?itok=LpJp9sAm"
          />
          <Prodact title="cucumber" amount={5} />
          <Prodact title="tomato" amount={5} />
          <Prodact title="tomato" amount={7} />
          <Prodact title="tomato" amount={4} />
          <Prodact title="tomato" amount={5} />
        </div>
      </div>
    );
  }
}

export default App;
