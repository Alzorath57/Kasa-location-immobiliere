import logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import Error from "./Error";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <Error />;
  }
  return <h1>{logement.title}</h1>;
}

export default Logement;
