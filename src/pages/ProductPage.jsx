import { useParams } from "react-router-dom";

function ProductPage({ getProductInfo }) {
  const { itemId } = useParams();

  const productInfo = getProductInfo(itemId);

  return (
    <>
      <h1>PRODUCT PAGE WOOHOO</h1>
      <h2>{productInfo.title}</h2>
      <img src={productInfo.image}></img>
    </>
  );
}

export default ProductPage;
