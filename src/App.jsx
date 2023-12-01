import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";

import "./App.css";
import NavBar from "./componenets/NavBar";
import MinorNav from "./componenets/MinorNavBar";
import LoadingBar from "./componenets/LoadingBar";

function App() {
  const [allProducts, setAllProducts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products?limit=6")
        .then((res) => {
          if (res.status >= 400) throw new Error("server error try again");
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setAllProducts(data);
        })
        .catch((err) => {
          console.error(err);
          setError(err);
        })
        .finally(() => setIsLoading(false));
    }, 1000);
  }, []);

  return (
    <>
      <MinorNav />
      <NavBar />
      {isLoading ? <LoadingBar /> : <HomePage topItems={allProducts} />}
    </>
  );
}

export default App;
