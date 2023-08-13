import React from "react";
import logo from "../Assets/Logo_ML.png";

const ProductItem = () => {
  return (
    <div className="ContentBox">
      <img src={logo} alt="logo" className="ImageProduct"></img>

      <div className="">
        <h3>1900$</h3>
        <p>carrito</p>
          
      </div>
      <div>
        <span>Capital Federal</span>
      </div>
    </div>
  );
};
export default ProductItem;
