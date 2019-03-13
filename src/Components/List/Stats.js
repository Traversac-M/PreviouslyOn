import React from "react";

import imgNotFound from "../Images/imgNotFound.png";

export default function Stats(props) {
  const userImg = props.avatar ? (
    <img className="img-fluid img-circle img-thumbnail mb-3" src={props.avatar} alt="" />
  ) : (
    <img className="img-fluid img-circle img-thumbnail mb-3" src={imgNotFound} alt="" />
  );

  return (
    <div className="col-sm-3">
      <div className="text-center">{userImg}</div>
      <ul className="list-group">
        <li className="list-group-item text-muted">{props.login}'s stats</li>
        <li className="list-group-item text-right">
          <span className="pull-left">
            <strong>Xp</strong>
          </span>
          {props.xp}
        </li>

        <li className="list-group-item text-right">
          <span className="pull-left">
            <strong>Friends</strong>
          </span>
          {props.friends}
        </li>

        <li className="list-group-item text-right">
          <span className="pull-left">
            <strong>Comments</strong>
          </span>
          {props.comments}
        </li>

        <li className="list-group-item text-right">
          <span className="pull-left">
            <strong>Badges</strong>
          </span>
          {props.badges}
        </li>

        <li className="list-group-item text-right">
          <span className="pull-left">
            <strong>Shows followed</strong>
          </span>
          {props.shows}
        </li>

        <li className="list-group-item text-right">
          <span className="pull-left">
            <strong>Movies followed</strong>
          </span>
          {props.movies}
        </li>
      </ul>
    </div>
  );
}
