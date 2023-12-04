import TopItemsDisplay from "../componenets/TopItemsDisplay";
import FeaturedCategories from "../componenets/FeaturedCategories";
import "/src/App.css";
import CircleAdBanner from "../componenets/CircleAdBanner";

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
        <section>
          <CircleAdBanner />
        </section>
      </div>
    </>
  );
}

export default HomePage;
