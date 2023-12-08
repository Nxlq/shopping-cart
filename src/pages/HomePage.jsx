import TopItemsDisplay from "../componenets/TopItemsDisplay";
import FeaturedCategories from "../componenets/FeaturedCategories";
import "/src/App.css";
import CircleAdBanner from "../componenets/CircleAdBanner";
import CardAdBanner from "../componenets/CardAdBanner";

function HomePage({ allProducts, categories, topProducts, isLoading }) {
  if (isLoading) return <h1>Loading...</h1>;

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
        <section>
          <CardAdBanner />
        </section>
      </div>
    </>
  );
}

export default HomePage;
