import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const baseUrlApi = "https://api.mercadolibre.com/items/";

const DetailProduct = () => {
  const [product, setProduct] = useState([]);
  const [ProductDescription, setDescription] = useState([]);
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
      })

      .catch((error) => console.error(error))
      .finally(console.log("done"));

    loadDescription()
      .then((data) => {
        setDescription(data.plain_text);
      })
      .catch((e) => console.error(e));
  }, [id]);

  return (
    <div className="detail-container">
      <div className="details">
        <img src={product?.pictures[1]?.url || ""} alt=" del producto" />
      </div>
      <h4>Descripcion del producto</h4>
      <div>{ProductDescription || ""}</div>
    </div>
  );
};
export default DetailProduct;
