import "/src/styles/OrderTypeSelection.css";

function OrderTypeCard({ imgPath, orderType }) {
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
    <button className="order-type-card">
      <img className="order-type-icon" src={imgPath} alt="" />
      <span className="order-type-text">{orderType}</span>
      <span>
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
  return (
    <div className="order-types__container">
      <div className="order-types">
        <OrderTypeCard
          imgPath={"/store-svgrepo-com.svg"}
          orderType={"Pickup"}
        />
        <OrderTypeCard
          imgPath={"/store-svgrepo-com.svg"}
          orderType={"Delivery"}
        />
        <OrderTypeCard
          imgPath={"/store-svgrepo-com.svg"}
          orderType={"Shipping"}
        />
      </div>
    </div>
  );
}

export default OrderTypeSelection;
