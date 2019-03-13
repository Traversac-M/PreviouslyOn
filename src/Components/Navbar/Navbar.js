import React, { Component } from "react";
import axios from "axios";
import md5 from "md5";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import Link1 from "./Link1";
import Link2 from "./Link2";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

export default class Navbar extends Component {
  state = {
    username: null,
    password: null,
    user: [],
    apiKey: "557c11338b26",
    token: localStorage.getItem("userToken")
  };

  handleUser = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: md5(e.target.value) });
  };

  handleLogout = e => {
    localStorage.removeItem("userToken");
    this.props.history.push("/");
  };

  handleSubmit = async e => {
    e.preventDefault();

    let user = await axios.post(
      "members/auth?key=" +
        this.state.apiKey +
        "&login=" +
        this.state.username +
        "&password=" +
        this.state.password
    );

    this.setState({ user });

    localStorage.setItem("userToken", this.state.user.data.token);
    window.location.reload();
  };

  render() {
    const isLoggedIn1 = !this.state.token ? (
      <SignInModal
        handleSubmit={this.handleSubmit}
        handleUser={this.handleUser}
        handlePassword={this.handlePassword}
      />
    ) : (
      <Link to="/profile" className="nav-link">
        My list
      </Link>
    );

    const isLoggedIn2 = !this.state.token ? (
      <SignUpModal />
    ) : (
      <Link onClick={this.handleLogout} to="/" className="nav-link">
        Logout
      </Link>
    );

    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="banner">
        <div className="container">
          <Logo />
          <BurgerMenu />

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link1 />
              </li>

              <li className="nav-item">
                <Link2 />
              </li>

              <li className="nav-item">{isLoggedIn1}</li>
              <li className="nav-item">{isLoggedIn2}</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
