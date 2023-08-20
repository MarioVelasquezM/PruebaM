import React from "react";
import logo from "../Assets/ic_shipping.png";
import "./product-item.css";
import { useNavigate } from "react-router";

let usdolar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "ARS",
});

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const clickOveProduct = (e) => {
    e.preventDefault();

    navigate(`/items/${product.id}`);
  };

  return (
    <div className="itemContainer">
      <div className="ContentProduct">
        <div className="detailsProduct" onClick={clickOveProduct}>
          <div className="imageProduct">
            <img src={product.imageUrl} alt="logo" className="logoImage"></img>
          </div>

          <div className="ProductInfo">
            <h3 className="ItemPrice">{usdolar.format(product.price)}</h3>
            {product.free_shipping && (
              <img src={logo} alt="freeshipping" className="freeshipping"></img>
            )}
            <p className="ProductDescription">{product.title}</p>
          </div>
        </div>
        <div>
          <p className="sellerName">{product.sellernicknamer}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default ProductItem;
