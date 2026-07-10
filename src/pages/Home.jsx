import logements from "../data/logements.json";
import Card from "../components/Card/Card";

function Home() {
  return (
    <>
      <h1>Home</h1>
      {logements.map((logement) => (
        <Card
          key={logement.id}
          title={logement.title}
          cover={logement.cover}
          description={logement.description}
        />
      ))}
    </>
  );
}

export default Home;
