import logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import Error from "./Error";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <Error />;
  }
  const star = [1, 2, 3, 4, 5];
  return (
    <>
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <ul>
        {logement.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="host">
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt={logement.host.name} />
      </div>
      {star.map((s) =>
        s <= logement.rating ? <span key={s}>★</span> : <span key={s}>☆</span>,
      )}
    </>
  );
}

export default Logement;
