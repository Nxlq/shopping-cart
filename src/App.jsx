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
import { getRandomIntInclusive } from "./helperFunctions";
import CartPage from "./pages/CartPage";

function App() {
  const { allProducts, categories, isLoading, error } = useVitalData();
  const [cartItems, setCartItems] = useState([]);
  const [topProducts, setTopProducts] = useState(null);

  const itemCount =
    cartItems.length == 0
      ? 0
      : cartItems.reduce((sum, cur) => cur.quantity + sum, 0);

  // const topProducts = allProducts && getTopProducts(6);

  useEffect(() => {
    if (!allProducts) return;

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

    setTopProducts(getTopProducts(6));
  }, [allProducts]);

  console.log({ cartItems });

  function addToCart(itemObj, itemQuantity = 1) {
    const itemIndexInCart = cartItems.findIndex(
      (item) => item.id === itemObj.id
    );

    // if the item was not already in the cart, then push the new itemobj to the cart
    if (itemIndexInCart === -1) {
      const newItemObj = {
        ...itemObj,
        quantity: itemQuantity,
      };

      const newCart = [...cartItems];
      newCart.push(newItemObj);
      setCartItems(newCart);
      return;
    }

    // if the item is already in the cart then replace the itemObj with a new one
    const newItemObj = {
      ...itemObj,
      quantity: itemQuantity + cartItems[itemIndexInCart].quantity,
    };

    const newCart = cartItems.toSpliced(itemIndexInCart, 1, newItemObj);

    setCartItems(newCart);
  }

  function removeFromCart(itemId) {
    const newCart = cartItems.filter((itemObj) => itemObj.id !== itemId);
    setCartItems(newCart);
  }

  function changeItemQuantityInCart(newQuantity, itemId = null) {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex <= -1) return;

    const newCart = [...cartItems];
    newCart[itemIndex].quantity = newQuantity;

    setCartItems(newCart);
  }

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

  function getProductsInCategory(categoryName) {
    if (!allProducts) return;
    return allProducts.filter((product) => product.category === categoryName);
  }

  function getProductInfo(productId) {
    if (!allProducts) return;
    const productInfo = allProducts.find((product) => product.id == productId);
    return productInfo;
  }

  console.log({ productLog });

  const router = createBrowserRouter([
    {
      errorElement: <h1>OOOPS ERROR UHOH! @o@</h1>,
      path: "/",
      element: (
        <>
          <MinorNav />
          <NavBar categories={categories} itemCount={itemCount} />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: "/",
          element: (
            <HomePage
              allProducts={allProducts}
              categories={categories}
              isLoading={isLoading}
              addToCart={addToCart}
              topProducts={topProducts}
            />
          ),
        },
        {
          path: "category/:categoryName",
          element: (
            <CategoryPage productLog={productLog} addToCart={addToCart} />
          ),
        },
        {
          path: "product/:itemId/:itemName",
          element: (
            <ProductPage
              getProductInfo={getProductInfo}
              addToCart={addToCart}
            />
          ),
        },
        {
          path: "cart",
          element: (
            <CartPage
              cartItems={cartItems}
              itemCount={itemCount}
              removeFromCart={removeFromCart}
              changeItemQuantityInCart={changeItemQuantityInCart}
            />
          ),
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
