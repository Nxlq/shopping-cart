import { useState } from "react";
import "/src/styles/OrderTypeSelection.css";

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
  return (
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
  );
}

function OrderTypeSelection() {
  const [selectedCardId, setSelectedCardId] = useState(0);

  function setActiveCard(cardId) {
    setSelectedCardId(cardId);
  }

  return (
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
  );
}

export default OrderTypeSelection;
