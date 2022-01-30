import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
const Jackets = () => (
  <div>
    <h1>Jackets PAGE</h1>
  </div>
);
const Sneakers = () => (
  <div>
    <h1>Sneakers PAGE</h1>
  </div>
);
const Womens = () => (
  <div>
    <h1>Womens PAGE</h1>
  </div>
);
const Mens = () => (
  <div>
    <h1>Mens PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
        <Route path="/shop/jackets" component={Jackets} />
        <Route path="/shop/sneakers" component={Sneakers} />
        <Route path="/shop/womens" component={Womens} />
        <Route path="/shop/mens" component={Mens} />
      </Switch>
    </div>
  );
}

export default App;
