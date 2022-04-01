import React, { useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
import useTshirts from "../hooks/useTshirt";
import Tshirt from "../Tshirt/Tshirt";

const Home = () => {
  // call custom hooks
  const [tshirts, setTshirts] = useTshirts();

  // add to cart
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedItem) => {
    // jodi tshirt and selected items thake.. tahole
    const exists = cart.find((tshirt) => tshirt.id === selectedItem.id);
    // jodi na thake
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("Items already added in your cart");
    }
  };

  //remove from cart

  const handleRemoveFromCart = (selectedItem) => {
    const rest = cart.filter((tshirt) => tshirt.id !== selectedItem.id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt.id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
