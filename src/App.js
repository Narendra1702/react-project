import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Tours from "./components/Tours";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Price from "./components/Price";

export const store = createContext();
export const store1 = createContext();

function App() {
  const [name, setname] = useState("");
  const [islogin, setislogin] = useState(false);
  const [cart, setcart] = useState([]);
  const [product, setproduct] = useState([]);
  const [user, setuser] = useState({});
  const [totalprice, settotalprice] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(user);
    if (user !== null) {
      setuser(user);
      setislogin(true);
    }
  };

  const addtocart = (product) => {
    const quantity = 1;
    const totalprice = 0;

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setcart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setcart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increment = (product) => {
    setcart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (product) => {
    const quantity = product.quantity - 1;

    if (quantity === 0) {
      cart.findIndex((item, index) => {
        if (item.id === product.id) {
          cart.splice(index, 1);
        }
      });
    }

    setcart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const ProductShow = (product) => {
    console.log(product);
    setproduct(product);
    console.log("data", product);
    // addprice()
  };

  // const addprice = (item) => {
  //   setproduct(product.map(item =>
  //     item.id === product.id ? { ...item, totalprice: item.quantity *item.price, } : item
  //   ));

  // }
  const removehandler = (itemId) => {
    const updatedcart = cart.filter((product) => product.id !== itemId.id);
    setcart(updatedcart);
  };
  const handleLogout = () => {
    setuser({});
    setislogin(false);
  };
  const handleLogin = () => {
    loadData();
  };

  return (
    <div>
      <BrowserRouter>
        <store.Provider value={[name, setname]}>
          <store1.Provider value={[islogin, setislogin]}>
            <Header user={user} login={islogin} handleLogout={handleLogout} />
            <Routes>
              <Route
                path="/home"
                element={
                  <Home
                    login={islogin}
                    addtocart={addtocart}
                    ProductShow={ProductShow}
                    product={product}
                  />
                }
              />

              <Route path="/about" element={<About />} />
              <Route
                path="/tours"
                element={
                  <Tours
                    addtocart={addtocart}
                    login={islogin}
                    ProductShow={ProductShow}
                  />
                }
              />
              <Route path="/" element={<Register login={islogin} />} />
              <Route
                path="/login"
                element={<Login login={islogin} handleLogin={handleLogin} />}
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    cart={cart}
                    removehandler={removehandler}
                    increment={increment}
                    decrement={decrement}
                    totalprice={totalprice}
                  />
                }
              />
              <Route path="/price" element={<Price product={product} />} />
            </Routes>
            <Footer />
          </store1.Provider>
        </store.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
