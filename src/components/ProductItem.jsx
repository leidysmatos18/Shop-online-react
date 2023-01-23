import React, { useState } from "react";
import "../styles/ProductItem.scss";

const ProductItem = ({ product }) => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  };

  return (
    <div className="ProductItem">
      <img src={product.images} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src="./icons/bt_add_to_cart.svg" alt="" />
        </figure>
        {cart}
      </div>
    </div>
  );
};

export default ProductItem;
