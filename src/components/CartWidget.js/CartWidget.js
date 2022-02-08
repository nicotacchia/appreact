import React from "react";
import "./CartWidget.css";
import { GrCart } from "react-icons/gr";

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <GrCart/>
      <p> 0</p>
    </div>
  );
};

export default CartWidget;