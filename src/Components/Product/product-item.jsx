import React from "react";
import logo from "../Assets/Logo_ML.png";
import "./product-item.css";
/*const ProductItem = ('detail,price, Name,site, Envio') => */

const ProductItem = ({ product }) => {
  return (
    <div className="itemContainer">
      <div className="ContentProduct">
        <div className="detailsProduct">
          <div className="imageProduct">
            <img src={logo} alt="logo" className="logoImage"></img>
          </div>

          <div className="ProductInfo">
            <h3 className="ItemPrice">{product.price}</h3>
            <p className="ProductDescription">{product.details}</p>
          </div>
        </div>
        <div>
          <span>{product.storeplace}</span>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default ProductItem;
