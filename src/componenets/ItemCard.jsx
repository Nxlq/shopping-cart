import "/src/styles/ItemCard.css";

function ItemCard({ itemInfo }) {
  return (
    <div className="item-card">
      <img className="" src={itemInfo.image} alt="" />
      <h4 className="item-price">${itemInfo.price}</h4>
      <h4 className="item-title">{itemInfo.title}</h4>
      <button>Add to cart</button>
    </div>
  );
}

export default ItemCard;
