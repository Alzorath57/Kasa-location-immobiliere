import logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import Error from "./Error";
import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import Accordion from "../components/Accordion/Accordion";
import "./Logement.scss";
import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const star = [1, 2, 3, 4, 5];
  if (!logement) {
    return <Error />;
  }
  const hasMultiplePictures = logement.pictures.length > 1;
  return (
    <>
      <div className="carousel">
        <img
          src={logement.pictures[currentPictureIndex]}
          alt={logement.title}
        />
        {hasMultiplePictures && (
          <>
            <button
              className="arrow-left"
              onClick={() =>
                setCurrentPictureIndex(
                  (currentPictureIndex - 1 + logement.pictures.length) %
                    logement.pictures.length,
                )
              }
            >
              <img src={arrowLeft} alt="Photo précédente" />
            </button>
            <button
              className="arrow-right"
              onClick={() =>
                setCurrentPictureIndex(
                  (currentPictureIndex + 1) % logement.pictures.length,
                )
              }
            >
              <img src={arrowRight} alt="Photo suivante" />
            </button>
            <p className="compteur">
              {currentPictureIndex + 1}/{logement.pictures.length}
            </p>
          </>
        )}
      </div>
      <div className="logement-info">
        <div className="logement-titre">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul>
            {logement.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="host-rating">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">
            {star.map((s) =>
              s <= logement.rating ? (
                <div className="star-active" key={s}>
                  <span>
                    <img src={starActive} alt="Etoile active" />
                  </span>
                </div>
              ) : (
                <div className="star-inactive" key={s}>
                  <span>
                    <img src={starInactive} alt="Etoile inactive" />
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="accordions">
        <Accordion
          title="Description"
          content={<p>{logement.description}</p>}
        ></Accordion>
        <Accordion
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))}
            </ul>
          }
        ></Accordion>
      </div>
    </>
  );
}

export default Logement;
