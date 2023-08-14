import React, { useEffect, useState } from "react";
import "./main-view.css";
import ProductItem from "../Product/product-item";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const baseUrlApi = "https://api.mercadolibre.com/sites/MLA/search";

const MainView = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, _] = useSearchParams();

  useEffect(() => {
    const searchProduct = searchParams.get("search");
    const loadProduct = async () => {
      const response = await axios.get(`${baseUrlApi}?q=${searchProduct}#json`);
      return response.data.results;
    };

    loadProduct()
      .then((data) => {
        const products = data.map((product) => {
          return {
            title: product.title,
            price: product.price,
            sellernicknamer: product.seller.nickname,
            imageUrl: product.thumbnail,
            id: product.id,
            free_shipping: product.shipping.free_shipping,
          };
        });
        console.log(products);
        setProducts(products.slice(0, 4));
      })
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
