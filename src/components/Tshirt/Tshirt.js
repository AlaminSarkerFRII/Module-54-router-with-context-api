import React from "react";
import "./Tshirt.css";

const Tshirt = (props) => {
  //   console.log(props);
  const { tshirt, handleAddToCart } = props;
  const { title, category, description, image, price, rating } = tshirt;

  return (
    <div className="t-shirt">
      <div className="t-shirt-images">
        <img src={image} alt="" />
      </div>
      <div className="tshirt-details">
        <h4>
          Tshirt : {title.length > 20 ? title.slice(0, 10) + "..." : title}
        </h4>
        <p>Price :{price}</p>

        <button onClick={() => handleAddToCart(tshirt)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Tshirt;
