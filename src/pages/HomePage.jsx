import TopItemsDisplay from "../componenets/TopItemsDisplay";
import "/src/App.css";

function HomePage({ topItems }) {
  return (
    <>
      <section className="home-page">
        <TopItemsDisplay topItems={topItems} />
      </section>
    </>
  );
}

export default HomePage;
