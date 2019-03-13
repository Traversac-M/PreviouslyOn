import React from "react";
import imgNotFound from "../Images/imgNotFound.png";

export default function Header(props) {
  const showRandomSerie = props.randomSerie.map(function(serie) {
    const showImage = props.images ? (
      <img className="imgWidth" src={props.images} alt="" />
    ) : (
      <img className="imgWidth" src={imgNotFound} alt="" />
    );

    const showTitle = props.title ? <p>{props.title}</p> : <p>N/A</p>;

    const showEpisode = props.episodes ? (
      <span>Latest episode aired : {props.episodes}</span>
    ) : (
      <span>Latest episode aired : N/A</span>
    );

    const showSeason = props.seasons ? (
      <span>Season : {props.seasons}</span>
    ) : (
      <span>Season : N/A</span>
    );

    return (
      <div className="headerText" key={props.id}>
        {showImage}
        <div className="blText">
          {showTitle}
          <p>
            {showEpisode} | {showSeason}
          </p>
        </div>
      </div>
    );
  });
  return <div>{showRandomSerie}</div>;
}
