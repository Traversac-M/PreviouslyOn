import React from "react";
import { Link } from "react-router-dom";

export default function SignInModal(props) {
  return (
    <div>
      <Link to="/" className="nav-link" data-toggle="modal" data-target="#signInModal">
        Sign in
      </Link>

      <div
        className="modal fade"
        id="signInModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="signInModal"
        aria-hidden="true"
        data-backdrop="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signInModal">
                Login to your BetaSeries account
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                  <label>Email or Username </label>
                  <input
                    onChange={props.handleUser}
                    type="text"
                    className="form-control"
                    placeholder="Enter your email or username"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    onChange={props.handlePassword}
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
