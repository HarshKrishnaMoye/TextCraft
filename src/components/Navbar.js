import React from "react";
import PropTypes from "prop-types";
import "../Css/Navbar.css";
import { Link } from "react-router-dom"

export default function Navbar(props) {

  const capitalize=(message)=>{
    let letters = message.toLowerCase();
    return letters.toUpperCase().charAt(0) + letters.slice(1);
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} 
    >
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {props.home} <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.about}
            </Link>
          </li>
        </ul>

        <div className="form-inline my-2 my-lg-0">
          <div className="form-check form-switch mx-3">
          <label
              className="form-check-label mx-5"
              htmlFor="flexSwitchCheckDefault1"
            >
              {capitalize(props.mode)} Mode :
            </label>
            <input
              className="form-check-input check1"
              onClick={props.togglemode3}
              type="radio"
              role="switch"
              id="flexSwitchCheckDefault1"
              name="mode"
            />
          </div>
          <div className="form-check  mx-5 form-switch">
            <input
              className="form-check-input check1"
              onClick={props.togglemode2}
              type="radio"
              role="switch"
              id="flexSwitchCheckDefault2"
              name="mode"
            />
          </div>

          <div
            className={`form-check form-switch mx-2 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input check1"
              onClick={props.togglemode}
              type="radio"
              role="switch"
              id="flexSwitchCheckDefault3"
              name="mode"
            />
          </div>
          <input
            className="form-control mr-sm-2 mx-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

// Props ---> https://legacy.reactjs.org/docs/components-and-props.html
// Props ---> https://www.codewithharry.com/tutorial/react-props/

// propTypes // isRequired
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
  about: PropTypes.string,
};

// defaultProps

Navbar.defaultProps = {
  title: "Set Title",
  about: "Set About",
  home: "Set Home",
};
