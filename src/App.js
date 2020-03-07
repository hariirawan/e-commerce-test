import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";
import SearchProduct from "./views/SearchProduct";
import Login from "./views/Login";
import Profile from "./views/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/product-detail/:id?" component={ProductDetail} />
        <Route path="/search" component={SearchProduct} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
