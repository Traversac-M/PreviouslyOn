import React from "react";

import About from "./About";
import Links from "./Links";
import Social from "./Social";
import Copyrights from "./Copyrights";

export default function Footer() {
  return (
    <div className="footer-wrap pt-5">
      <div className="container">
        <div className="row">
          <About />
          <Links />
          <Social />
        </div>
        <Copyrights />
      </div>
    </div>
  );
}
