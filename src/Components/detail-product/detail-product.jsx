import "./detail-product.css";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const baseUrlApi = "https://api.mercadolibre.com/items/";
let usdolar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "ARS",
});
const DetailProduct = () => {
  const [product, setProduct] = useState([]);
  const [ProductDescription, setDescription] = useState([]);
  const [isLoading, setIsLoading] = useState({
    product: false,
    description: false,
  });
  let { id } = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      const response = await axios.get(`${baseUrlApi}${id}`);
      return response.data;
    };
    const loadDescription = async () => {
      const description = await axios.get(`${baseUrlApi}${id}/description`);
      return description.data;
    };

    loadProduct()
      .then((data) => {
        setProduct(data);
        setIsLoading((prevState) => {
          return {
            ...prevState,
            product: true,
          };
        });
      })

      .catch((error) => console.error(error));

    loadDescription()
      .then((data) => {
        setDescription(data.plain_text);
        setIsLoading((prevState) => {
          return {
            ...prevState,
            description: true,
          };
        });
      })
      .catch((e) => console.error(e));
  }, [id]);
  const clickHandler = () => {
    alert("doit");
  };
  return (
    <Fragment>
      {isLoading.description && isLoading.product && (
        <div className="detail-container">
          <div className="details">
            <div className="main">
              <img
                className="img"
                src={product.pictures[0].url}
                alt=" del producto"
              />
              <div className="Description">
                <h4>Descripcion del producto</h4>
                <p>{ProductDescription}</p>
              </div>
            </div>
            <div className="Detalles">
              <span>Cantidad Vendidas: {product.sold_quantity}</span>
              <h3>{product.title}</h3>
              <h2>{usdolar.format(product.price)}</h2>
              <button type="button" className="Btn" onClick={clickHandler}>
                Comprarme
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default DetailProduct;
