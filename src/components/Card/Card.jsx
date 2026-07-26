import "./Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <Link to={`/logement/${props.id}`}>
        <img src={props.cover} alt={props.description} />
        <div className="overlay"></div>
        <p>{props.title}</p>
      </Link>
    </div>
  );
}

export default Card;
