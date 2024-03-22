import React from 'react'
import PropTypes from 'prop-types'

// const bgColor = ()=>{
//   console.log("clicked");
//     document.body.style.backgroundColor="black";
//     document.body.style.color="white";
// }


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">{props.title}</a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.home} <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.about}</a>
      </li>
    </ul>
    <div className="form-inline my-2 my-lg-0">
      {/* <button className="btn btn-outline-light mr-sm-2" onClick={bgColor} >Darkmode</button> */}
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
  </div>
</nav>
  )
}

// Props ---> https://legacy.reactjs.org/docs/components-and-props.html
// Props ---> https://www.codewithharry.com/tutorial/react-props/

// propTypes // isRequired
Navbar.propTypes = {title : PropTypes.string.isRequired, home: PropTypes.string,  about: PropTypes.string}

// defaultProps

Navbar.defaultProps ={
    title : "Set Title",
    about : "Set About",
    home : "Set Home"
}
