import React from "react";
import { Link } from "react-router-dom";

export default function SignUpModal() {
  return (
    <div>
      <Link to="/" className="nav-link" data-toggle="modal" data-target="#signUnModal">
        Sign Up
      </Link>

      <div
        className="modal fade"
        id="signUnModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="signUnModal"
        aria-hidden="true"
        data-backdrop="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signUnModal">
                Sign Up
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body text-center">
              <a className="col-6 btn btn-info" href="https://www.betaseries.com/inscription/">
                Sign up for free on Betaserie
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
