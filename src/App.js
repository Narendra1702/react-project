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
  const [cart, setcart] = useState([""]);
  const [product, setproduct] = useState([])
  const [user, setuser] = useState([])
  const [totalprice, settotalprice] = useState(0)

  useEffect(() =>{
    loadData()
  },[])

  let loadData = () => {
    const quantity = 1
    const totalprice = 0

    const existingProduct = cart.find(item => item.id === product.id);

    if(existingProduct){
      setcart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1, } : item
      ));
    } else {
      setcart([...cart, { ...product, quantity: 1 }]);
    }
  }

  const decrement = (product) => {
    const quantity = product.quantity - 1

    if (quantity === 0) {
      cart.findIndex((item, index) => {
        if (item.id === product.id) {
          cart.splice(index, 1)

        }
      })

    }



    setcart(cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1, } : item
    ));

  }
  const ProductShow = (product) => {
    console.log(product);
    setproduct([product])
    // addprice()
  }


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
      setcart([...cart, { ...product, quantity: 1, totalprice: 0 }]);
    }
  };

  const removehandler = (itemId) => {
    const updatedcart = cart.filter((product) => product.id !== itemId.id);
    setcart(updatedcart);
  };

  return (
    <div>
      <BrowserRouter>
        <store.Provider value={[name, setname]}>
          <store1.Provider value={[islogin, setislogin]}>
            <Header />
            <Routes>
              <Route path="/Home" element={<Home addtocart={addtocart} />} />

              <Route path="/About" element={<About />} />
              <Route
                path="/Tours"
                element={<Tours addtocart={addtocart} />}
              />
              <Route path="/" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route
                path="/Cart"
                element={<Cart cart={cart} removehandler={removehandler} />}
              />
            </Routes>
            <Footer />
          </store1.Provider>
        </store.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
