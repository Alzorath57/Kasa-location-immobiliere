import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <img src={props.cover} alt={props.description} />
      <div className="overlay"></div>
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
