import ItemCard from "./ItemCard";
import "/src/styles/TopItemsDisplay.css";
import LoadingBar from "./LoadingBar";

function TopItemsDisplay({ allProducts }) {
  return (
    <>
      <div className="top-items-display">
        <h1>Best-selling Top Items</h1>
        <div className="top-items">
          {allProducts.map((item, i) => (
            <ItemCard key={i} itemInfo={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TopItemsDisplay;
