import "./Banner.scss";

function Banner(props) {
  return (
    <div className="banner">
      <img src={props.cover} alt={props.description} />
      <div className="overlay"></div>
      {props.title && <p>{props.title}</p>}
    </div>
  );
}

export default Banner;
