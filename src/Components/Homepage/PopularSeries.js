import React from "react";
import imgNotFound from "../Images/imgNotFound.png";

export default function PopularSeries(props) {
  const popularSeries = props.images ? (
    <div className="card text-white text-center">
      <div className="card-header">{props.title}</div>
      <img className="img-fluid galleryImg" src={props.images} title={props.description} alt="" />
    </div>
  ) : (
    <div className="card text-white text-center">
      <div className="card-header">{props.title}</div>
      <img className="img-fluid galleryImg" src={imgNotFound} title={props.description} alt="" />
    </div>
  );

  return (
    <div key={props.id} className="col-lg-3">
      {popularSeries}
    </div>
  );
}
