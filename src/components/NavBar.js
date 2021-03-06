import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        BLOG
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              HOME <span className="sr-only">(current)</span>
            </Link>
          </li>
          {/*<li className="nav-item">
            <Link className="nav-link" to="/post">
              Post
            </Link>
  </li>*/}
          <li className="nav-item">
            <Link className="nav-link" to="/AddPost">
              ADD POST
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-me">
              ABOUT ME
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
