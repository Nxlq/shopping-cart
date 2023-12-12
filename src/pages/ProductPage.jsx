import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductPage({ getProductInfo }) {
  const { itemId } = useParams();

  const productInfo = getProductInfo(itemId);

  console.log({ productInfo });

  return (
    <>
      {productInfo && (
        <div className="product-page">
          <img className="product-image" src={`${productInfo.image}`}></img>
          <div className="product-information">
            <h2>{productInfo.title}</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPage;
