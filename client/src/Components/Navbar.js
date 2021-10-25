import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Social Media
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="input__div form-group">
            <i class="search__icon fal fa-search"></i>
            <input
              className="input__search form-control"
              type="search"
              name="search"
              id="#search"
            />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link text-white active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Photo
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Videos
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  NewsFeed
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  SignIn
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  SignUp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
