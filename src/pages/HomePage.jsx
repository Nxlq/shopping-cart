import TopItemsDisplay from "../components/TopItemsDisplay";
import FeaturedCategories from "../components/FeaturedCategories";
import "/src/App.css";
import CircleAdBanner from "../components/CircleAdBanner";
import CardAdBanner from "../components/CardAdBanner";

function HomePage({
  allProducts,
  categories,
  topProducts,
  isLoading,
  addToCart,
}) {
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="home-page">
        <section>
          <TopItemsDisplay
            allProducts={allProducts}
            topProducts={topProducts}
            addToCart={addToCart}
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
