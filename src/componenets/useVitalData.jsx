import { useEffect, useState } from "react";

const ALL_PRODUCTS_URL = "https://fakestoreapi.com/products";
const CATEGORIES_URL = "https://fakestoreapi.com/products/categories";

function useVitalData() {
  const [allProducts, setAllProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      Promise.all([fetch(ALL_PRODUCTS_URL), fetch(CATEGORIES_URL)])
        .then((res) => {
          if (res.status >= 400)
            throw new Error(
              `something went wrong... error code: ${res.status}`
            );
          return res.map((r) => r.json());
        })
        .then((json) => Promise.all(json))
        .then((data) => {
          const [allProducts, categories] = data;
          setAllProducts(allProducts);
          setCategories(categories);
          return data;
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        })
        .finally(() => setIsLoading(false));
    }, 1000);
  }, []);

  return { allProducts, categories, isLoading, error };
}

export default useVitalData;

// useEffect(() => {
// setTimeout(() => {
//     fetch("https://fakestoreapi.com/products?limit=6")
//       .then((res) => {
//         if (res.status >= 400) throw new Error("server error try again");
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setAllProducts(data);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError(err);
//       })
//       .finally(() => setIsLoading(false));
//   }, 1000);
// }, []);
