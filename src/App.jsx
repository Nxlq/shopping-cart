import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";

import "./App.css";
import NavBar from "./componenets/NavBar";
import MinorNav from "./componenets/MinorNavBar";
import useVitalData from "./componenets/useVitalData";

function App() {
  const { allProducts, categories, isLoading, error } = useVitalData();

  if (error)
    return (
      <h1>
        Oops! Something went wrong.. try refreshing the page and hopefully that
        fixes the issue
      </h1>
    );

  // a categorized list of all products
  const productLog = {};

  // populate the productLog if allProducts have been fetched
  if (allProducts && categories) {
    for (const category of categories) {
      productLog[category] = getProductsInCategory(category);
    }
  }

  function getProductsInCategory(categoryName) {
    return allProducts.filter((product) => product.category === categoryName);
  }

  console.log({ productLog });

  return (
    <>
      <MinorNav />
      <NavBar />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <HomePage allProducts={allProducts} categories={categories} />
      )}
    </>
  );
}

export default App;
