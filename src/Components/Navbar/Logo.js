import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="navbar-brand">
      <span className="logoSpan1">Previously</span>
      <span className="logoSpan2">On</span>
    </Link>
  );
}
