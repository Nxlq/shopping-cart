import ItemCard from "./ItemCard";
import "/src/styles/TopItemsDisplay.css";
import { getRandomIntInclusive } from "../helperFunctions";
import { useEffect, useState } from "react";

function TopItemsDisplay({ topProducts, addToCart }) {
  if (!topProducts) return;

  return (
    <>
      <div className="top-items-display">
        <h1>Best-selling Top Items</h1>
        <div className="top-items">
          {topProducts.map((item) => (
            <ItemCard key={item.id} itemInfo={item} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TopItemsDisplay;
