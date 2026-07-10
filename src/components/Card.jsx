function Card(props) {
  return (
    <>
      <p>{props.title}</p>
      <img src={props.cover} alt={props.description} />
    </>
  );
}

export default Card;
