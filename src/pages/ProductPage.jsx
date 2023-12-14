import { useParams } from "react-router-dom";
import "/src/styles/ProductPage.css";
import Rating from "../componenets/Rating";
import OrderTypeSelection from "../componenets/OrderTypeSelection";

function ProductInformation({ productInfo, productRating, amountOfRatings }) {
  return (
    <div className="product-information">
      <h2 className="product-header">{productInfo.title}</h2>
      <Rating productRating={productRating} amountOfRatings={amountOfRatings} />
      <h2 className="product-price">${productInfo.price}</h2>
      <span className="price-disclaimer">When purchased online</span>
      <OrderTypeSelection />
    </div>
  );
}

function ProductPage({ getProductInfo }) {
  const { itemId } = useParams();

  const productInfo = getProductInfo(itemId);

  console.log({ productInfo });

  if (!productInfo) return <h1>Loading...</h1>;
  return (
    <>
      {productInfo && (
        <div className="product-page">
          <img className="product-image" src={`${productInfo.image}`}></img>
          <ProductInformation
            productInfo={productInfo}
            productRating={productInfo.rating.rate}
            amountOfRatings={productInfo.rating.count}
          />
        </div>
      )}
    </>
  );
}

export default ProductPage;
