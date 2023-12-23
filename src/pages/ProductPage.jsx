import { useParams } from "react-router-dom";
import "/src/styles/ProductPage.css";
import Rating from "../componenets/Rating";
import OrderTypeSelection from "../componenets/OrderTypeSelection";
import QuantityDropdownBtn from "../componenets/QuantityDropdownBtn";
import AddToCardBtn from "../componenets/AddToCartBtn";
import { useState } from "react";
import ErrorPage from "./ErrorPage";

function ProductInformation({
  productInfo,
  productRating,
  amountOfRatings,
  addToCart,
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="product-information">
        <h2 className="product-header">{productInfo.title}</h2>
        <Rating
          productRating={productRating}
          amountOfRatings={amountOfRatings}
        />
        <h2 className="product-price">${productInfo.price}</h2>
        <span className="price-disclaimer">When purchased online</span>
        <OrderTypeSelection />
        <div className="flex__container">
          <QuantityDropdownBtn quantity={quantity} setQuantity={setQuantity} />
          <AddToCardBtn
            widthPercentage={65}
            addToCart={addToCart}
            productInfo={productInfo}
            quantity={quantity}
          />
        </div>
      </div>
    </>
  );
}

function ProductPage({ getProductInfo, addToCart, isLoading }) {
  const { itemId } = useParams();

  const productInfo = getProductInfo(itemId);

  console.log({ productInfo });

  if (isLoading) return <h1>Loading..</h1>;
  if (!productInfo) return <ErrorPage />;
  return (
    <>
      {productInfo && (
        <div className="product-page">
          <img className="product-image" src={`${productInfo.image}`}></img>
          <ProductInformation
            productInfo={productInfo}
            productRating={productInfo.rating.rate}
            amountOfRatings={productInfo.rating.count}
            addToCart={addToCart}
          />
        </div>
      )}
    </>
  );
}

export default ProductPage;
