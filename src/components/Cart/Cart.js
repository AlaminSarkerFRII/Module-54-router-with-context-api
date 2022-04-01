import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // 4 ways conditional rendering
  //1.Element Variable
  // 2 . ternary operator ( condition ? true : false)
  //3. && operator ( short hand)
  //4. || (or = false) ... opposite of 3 no.&&

  let command;

  if (cart.length == 0) {
    command = (
      <div>
        <h2>Add at least one items</h2>
        <p>Items Need add </p>
      </div>
    );
  } else if (cart.length == 1) {
    command = <p>Please Add More ...</p>;
  } else {
    command = <p> Thanks for adding items</p>;
  }

  return (
    <div>
      <h1>Selected Items : {cart.length} </h1>

      {cart.map((tshirt) => (
        <p>
          {tshirt.title}
          <button onClick={() => handleRemoveFromCart(tshirt)}>
            Remove Item
          </button>
        </p>
      ))}

      {cart.length === 0 || <p className="orange"> You Select Items </p>}

      {cart.length === 3 && (
        <div className="orange">
          <h2>Thanks for shop with us </h2>
          <p>your products is here</p>
        </div>
      )}
      {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}

      {cart.length === 4 && <button className="orange"> Review Order </button>}

      {command}
    </div>
  );
};

export default Cart;
