import React, { useEffect, useState } from "react";
import "./main-view.css";
import ProductItem from "../Product/product-item";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const baseUrlApi = "https://api.mercadolibre.com/sites/MLA/search";

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
  {
    price: 2007,
    details: "aifone 14pluexsd",
    storeplace: "guanajuato",
    id: 47,
  },
];

const MainView = () => {
  // const [products, setProducts] = useState([]);
  const [searchParams, _] = useSearchParams();

  useEffect(() => {
    const searchProduct = searchParams.get("search");
    const loadProduct = async () => {
      const response = await axios.get(`${baseUrlApi}?q=${searchProduct}#json`);
      return response.data;
    };

    loadProduct()
      .then()
      .catch((error) => console.log(error));
  }, [searchParams]);

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
export default MainView;
