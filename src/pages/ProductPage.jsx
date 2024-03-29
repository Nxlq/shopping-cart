import { useParams } from "react-router-dom";
import "/src/styles/ProductPage.css";
import Rating from "../components/Rating";
import OrderTypeSelection from "../components/OrderTypeSelection";
import QuantityDropdownBtn from "../components/QuantityDropdownBtn";
import AddToCardBtn from "../components/AddToCartBtn";
import { useState, useEffect } from "react";
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
        <h2 className="product-price">${productInfo.price.toFixed(2)}</h2>
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <h1>Loading..</h1>;
  if (!productInfo) return <ErrorPage />;
  return (
    <>
      {productInfo && (
        <div className="product-page">
          <h2 className="product-header mobile">{productInfo.title}</h2>
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
