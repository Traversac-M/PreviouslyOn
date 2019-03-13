import React from "react";

export default function Social() {
  return (
    <div className="col-md-3 col-sm-6 social-icon">
      <h3>Social</h3>
      <ul className="social-network social-circle">
        <li>
          <a href="http://facebook.com" className="mt-2 icoFacebook" title="Follow us on Facebook">
            <span className="fa fa-facebook" />
          </a>
        </li>

        <li>
          <a href="http://twitter.com" className="mt-2 icoTwitter" title="Follow us on Twitter">
            <span className="fa fa-twitter" />
          </a>
        </li>

        <li>
          <a
            href="http://instagram.com"
            className="mt-2 icoInstagram"
            title="Follow us on Instagram"
          >
            <span className="fa fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
}
