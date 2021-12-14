import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
// import SingleItem from "./components/SingleItem/SingleItem";
// // import Product from "./components/Products/Product/Product";

function App({ current }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Products />
        <Routes>
          <Route exact path="/" component={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          {/* {current ? (
            <Route path="*" component={<Navigate to="/product" />} />
          ) : (
            <Route exact path="/product/:id" component={<SingleItem />} />
          )} */}
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
