import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";

import "./App.css";
import NavBar from "./componenets/NavBar";
import MinorNav from "./componenets/MinorNavBar";

function App() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => console.log(json));
  });
  return (
    <>
      <MinorNav />
      <NavBar />
      <HomePage />
      {images && images.map((img, i) => <img src={img} key={i} />)}
    </>
  );
}

export default App;
