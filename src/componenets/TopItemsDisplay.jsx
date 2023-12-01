import ItemCard from "./ItemCard";
import "/src/styles/TopItemsDisplay.css";

function TopItemsDisplay({ topItems }) {
  return (
    <>
      <div className="top-items-display">
        <h1>Best-selling Top Items</h1>
        <div className="top-items">
          {topItems.map((item, i) => (
            <ItemCard key={i} itemInfo={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TopItemsDisplay;
