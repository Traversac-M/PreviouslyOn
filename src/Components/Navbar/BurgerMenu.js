import React from "react";

export default function BurgerMenu() {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <div className="custom-toggler">
        <span className="navbar-toggler-icon" />
      </div>
    </button>
  );
}
