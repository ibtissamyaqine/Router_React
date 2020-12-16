import React from "react";
import "./App.css";
import Nav from "./nav.js";
import About from "./about.js";
import Shop from "./shop.js";
import ItemDetail from "./itemDetail";
import {BrowserRouter as Router,Switch , Route } from "react-router-dom";

function App() {
  return (
    <Router> 
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/shop" exact component={Shop}/>
            <Route path="/shop/:id" component={ItemDetail} />
          </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  
    <div>
      <h1>Home page</h1>
    </div>
);

export default App;
