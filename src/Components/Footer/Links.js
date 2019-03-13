import React from "react";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="col-md-4 col-sm-6">
      <h3>Quick Links</h3>
      <ul className="footer-links">
        <li>
          <Link to="/shows">Shows</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/">FAQ</Link>
        </li>
        <li>
          <Link to="/">Terms of Use</Link>
        </li>
      </ul>
    </div>
  );
}
