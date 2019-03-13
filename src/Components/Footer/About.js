import React from "react";

import FooterLogo from "../Images/PreviouslyOn.png";

export default function About() {
  return (
    <div className="col-md-5 col-sm-6">
      <h3>About PreviouslyOn</h3>
      <div className="footer-logo">
        <img className="footerLogo" src={FooterLogo} alt="" />
      </div>
      <p>
        For 10 years of existence, PreviouslyOn has become your best ally for TV shows: manage your
        calendar, share your latest episodes watched and discover new shows – within a one million
        member community.
      </p>
    </div>
  );
}
