import ItemCard from "./ItemCard";
import "/src/styles/TopItemsDisplay.css";
import LoadingBar from "./LoadingBar";

function TopItemsDisplay({ topProducts }) {
  if (!topProducts) return;

  return (
    <>
      <div className="top-items-display">
        <h1>Best-selling Top Items</h1>
        <div className="top-items">
          {topProducts.map((item) => (
            <ItemCard key={item.id} itemInfo={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TopItemsDisplay;
