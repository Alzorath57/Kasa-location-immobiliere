import logements from "../data/logements.json";
import Card from "../components/Card/Card";
import "./Home.scss";
import Banner from "../components/Banner/Banner";
import bannerHome from "../assets/banner-home.jpg";

function Home() {
  return (
    <>
      <Banner
        cover={bannerHome}
        description="Paysage de mer et de falaises nuageux"
        title="Chez vous, partout et ailleurs"
      />
      <section className="cards-grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
            description={logement.description}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
