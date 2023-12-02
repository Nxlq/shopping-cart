import TopItemsDisplay from "../componenets/TopItemsDisplay";
import FeaturedCategories from "../componenets/FeaturedCategories";
import "/src/App.css";

function HomePage({ allProducts, categories }) {
  return (
    <>
      <div className="home-page">
        <section>
          <TopItemsDisplay allProducts={allProducts} />
        </section>
        <section>
          <FeaturedCategories categories={categories} />
        </section>
      </div>
    </>
  );
}

export default HomePage;
