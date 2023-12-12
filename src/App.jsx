import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";

import "./App.css";
import NavBar from "./componenets/NavBar";
import MinorNav from "./componenets/MinorNavBar";
import useVitalData from "./componenets/useVitalData";
import Footer from "./componenets/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

function App() {
  const { allProducts, categories, isLoading, error } = useVitalData();

  console.log({ allProducts });

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

  const topProducts = allProducts && getTopProducts(6);

  function getProductsInCategory(categoryName) {
    return allProducts.filter((product) => product.category === categoryName);
  }

  function getTopProducts(amount) {
    const topProducts = [];
    const amtOfProducts = allProducts.length - 1;

    let randomIndex;

    // randomly select the amount of top products
    for (let i = 0; i < amount; i++) {
      randomIndex = getRandomIntInclusive(0, amtOfProducts);

      // prevents duplicate items
      while (topProducts.includes(allProducts[randomIndex])) {
        randomIndex = getRandomIntInclusive(0, amtOfProducts);
      }

      topProducts.push(allProducts[randomIndex]);
    }

    return topProducts;
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  console.log({ productLog });

  const router = createBrowserRouter([
    {
      errorElement: <h1>OOOPS ERROR UHOH! @o@</h1>,
      path: "/",
      element: (
        <>
          <MinorNav />
          <NavBar categories={categories} />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          index: true,
          element: (
            <HomePage
              allProducts={allProducts}
              categories={categories}
              topProducts={topProducts}
              isLoading={isLoading}
            />
          ),
        },
        {
          path: "category/:categoryName",
          element: <CategoryPage productLog={productLog} />,
        },
        {
          path: "product/:itemId/:itemName",
          element: <ProductPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
    </>
  );
}

export default App;

{
  /* <MinorNav />
<NavBar />
{isLoading ? (
  <h1>loading...</h1>
) : (
  <HomePage
    allProducts={allProducts}
    categories={categories}
    topProducts={topProducts}
  />
)}
<Footer /> */
}
