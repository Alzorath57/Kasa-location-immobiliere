import logements from "../data/logements.json";
import Card from "../components/Card/Card";
import "./Home.scss";

function Home() {
  return (
    <>
      <h1>Home</h1>
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
