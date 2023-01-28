import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import "../styles/MyOrder.scss";
import AppContext from "../context/AppContext";

const MyOrder = ({ setToggleOrders, toggleOrders }) => {
  const { state } = useContext(AppContext);

  const sumTotalPrice = () => {
    const reducer = (acumulador, currentValue) =>
      acumulador + currentValue.price;

    const total = state.cart.reduce(reducer, 0);

    return total;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img
          src="./icons/flechita.svg"
          alt="arrow"
          onClick={() => setToggleOrders(!toggleOrders)}
        />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <div className="container-order-product">
          {state.cart.map((product) => (
            <OrderItem product={product} key={`item-order${product.id}`} />
          ))}
        </div>

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotalPrice()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
