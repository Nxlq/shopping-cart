import TopItemsDisplay from "../componenets/TopItemsDisplay";
import FeaturedCategories from "../componenets/FeaturedCategories";
import "/src/App.css";

function HomePage({ allProducts, categories, topProducts }) {
  return (
    <>
      <div className="home-page">
        <section>
          <TopItemsDisplay
            allProducts={allProducts}
            topProducts={topProducts}
          />
        </section>
        <section>
          <FeaturedCategories categories={categories} />
        </section>
      </div>
    </>
  );
}

export default HomePage;
