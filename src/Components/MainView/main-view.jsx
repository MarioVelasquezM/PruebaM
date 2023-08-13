import React from "react";
import "./main-view.css";
import ProductItem from "../Product/product-item";

const products = [
  {
    price: 2000,
    details: "carrito de compras",
    storeplace: "guanajuato",
    id: 1,
  },
  {
    price: 2000,
    details: "carrito de compras",
    storeplace: "guanajuato",
    id: 2,
  },
  {
    price: 4000,
    details: "iaifone",
    storeplace: "DF",
    id: 3,
  },
  {
    price: 2007,
    details: "aifone 14pluexsd",
    storeplace: "guanajuato",
    id: 4,
  },
];

const MainView = () => {
  return (
    <div className="container">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};
export default MainView;
