import TopItemsDisplay from "../componenets/TopItemsDisplay";
import FeaturedCategories from "../componenets/FeaturedCategories";
import "/src/App.css";

function HomePage({ topItems }) {
  return (
    <>
      <div className="home-page">
        <section>
          <TopItemsDisplay topItems={topItems} />
        </section>
        <section>
          <FeaturedCategories />
        </section>
      </div>
    </>
  );
}

export default HomePage;
