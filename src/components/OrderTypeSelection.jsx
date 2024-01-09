import { useEffect, useState } from "react";
import "/src/styles/OrderTypeSelection.css";
import { useRef } from "react";

function OrderPickupMessage() {
  return (
    <>
      <span className="fulfillment-store">
        <span className="pick-up-location">
          Pick up at <span>Brooklyn Bensonhurst</span>
        </span>
        <span className="pick-up-other">Check other stores</span>
      </span>
      <span className="cta-pickup">
        <span className="fulfillment-info-green">Ready tomorrow</span> for
        pickup inside the store
      </span>
      <span className="quantity-left">
        Only {`${(Math.random() * 10 + 1).toFixed()} `}
        left
      </span>
    </>
  );
}

function OrderDeliveryMessage() {
  return (
    <>
      <span className="fulfillment-store">
        <div className="delivery-info">
          <span className="delivery-dark">Same Day Delivery</span>
          <span className="delivery-location">
            to <span className="delivery-dark">11204 </span> from
            <span className="delivery-dark"> Brooklyn Bensonhurst </span>
            <span className="delivery-other">Change</span>
          </span>
        </div>
      </span>
      <span>
        <span className="fulfillment-info-green">
          Get it as soon as tomorrow
        </span>{" "}
        with Shipt
      </span>
      <span className="quantity-left">
        Only {`${(Math.random() * 10 + 1).toFixed()} `}
        left
      </span>
      <span className="delivery-membership">
        Free with membership or $9.99/delivery <span>Learn more</span>
      </span>
    </>
  );
}

function OrderShippingMessage() {
  return (
    <>
      <span className="fulfillment-store">
        <span className="pick-up-location">Ship to 11204</span>
        <span className="pick-up-other">Edit location</span>
      </span>

      <span className="fulfillment-info-green">Get it by next Wednesday</span>
      <span className="shipping-info">
        Free shipping - <span>Exclusions Apply</span>
      </span>
    </>
  );
}

function OrderTypeCard({
  imgPath,
  orderType,
  isActive,
  cardId,
  setActiveCard,
}) {
  // only going through all this date stuff to create a more realistic fulfillment dates
  // not going to bother refactoring it into its own function for this project as its not important
  const curDate = new Date();
  const hourMilitary = curDate.getHours();
  const deliveryTime =
    hourMilitary < 12 ? `${hourMilitary + 2}am` : `${hourMilitary - 12 + 2}pm`;
  const shippingTime = new Date();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const fulfillmentTimes = {
    pickup: 2,
    delivery: deliveryTime,
    shippingTime: `${dayNames[shippingTime.getDay()]}, ${
      months[shippingTime.getMonth()]
    } ${shippingTime.getDate()}`,
  };

  const buttonWrapper = useRef(null);

  // listens for clicks to toggle dashed border
  useEffect(() => {
    if (!isActive) return;
    function removeDashedBorder(e) {
      if (!buttonWrapper.current.contains(e.target)) {
        buttonWrapper.current.classList.remove("dashed");
      } else if (buttonWrapper.current.contains(e.target)) {
        buttonWrapper.current.classList.add("dashed");
      }
    }

    window.addEventListener("mousedown", removeDashedBorder);
    return () => window.removeEventListener("mousedown", removeDashedBorder);
  }, [isActive]);

  return (
    <div
      ref={buttonWrapper}
      className={`button__wrapper ${isActive ? "dashed" : ""}`}
    >
      <button
        onClick={() => setActiveCard(cardId)}
        className={`order-type-card ${isActive ? "active" : ""}`}
      >
        <img className="order-type-icon" src={imgPath} alt="" />
        <span className="order-type-text">{orderType}</span>
        <span className="order-time">
          {orderType === "Pickup"
            ? `Ready within ${fulfillmentTimes.pickup} hours`
            : orderType === "Delivery"
            ? `As soon as ${fulfillmentTimes.delivery} today`
            : `Get it by ${fulfillmentTimes.shippingTime}`}
        </span>
      </button>
    </div>
  );
}

function OrderTypeSelection() {
  const [selectedCardId, setSelectedCardId] = useState(0);

  function setActiveCard(cardId) {
    setSelectedCardId(cardId);
  }

  return (
    <>
      <div className="order-types__container">
        <div className="order-types">
          <OrderTypeCard
            imgPath={"/store-svgrepo-com.svg"}
            orderType={"Pickup"}
            cardId={0}
            isActive={0 === selectedCardId}
            setActiveCard={setActiveCard}
          />
          <OrderTypeCard
            imgPath={"/delivery-svgrepo-com.svg"}
            orderType={"Delivery"}
            cardId={1}
            isActive={1 === selectedCardId}
            setActiveCard={setActiveCard}
          />
          <OrderTypeCard
            imgPath={"/shipping-left-svgrepo-com.svg"}
            orderType={"Shipping"}
            cardId={2}
            isActive={2 === selectedCardId}
            setActiveCard={setActiveCard}
          />
        </div>
      </div>
      {selectedCardId === 0 && <OrderPickupMessage />}
      {selectedCardId === 1 && <OrderDeliveryMessage />}
      {selectedCardId === 2 && <OrderShippingMessage />}
    </>
  );
}

export default OrderTypeSelection;
