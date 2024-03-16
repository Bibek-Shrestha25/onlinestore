import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import App from "./App";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About_us from "./Pages/About_us";
import Register from "./Pages/Register";
import Login from "./Pages/Log_in";
import Category from "./Pages/Category";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import Display from "./Components/Display";
import Productdetails from "./Pages/Productdetails";
import MyCounter from "./Components/reducers/MyCounter";
import Counter from "./Components/Counter";


const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />

          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/display" element={<Display />} />
          <Route path="product/:id" element={<Productdetails />} />
          <Route path="mycounter" element={<MyCounter />} />
          <Route path="counter" element={<Counter />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
