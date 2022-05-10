
import React from 'react';

// use props to pass down the page array from App
function Nav(props) {
  //
  console.log(props);
  const {

  } = props


  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      {/* <a className="navbar-brand" >Navbar</a> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* Todo: use the .map method to iterate over the pages array from app.js to create ul li's */}
        <ul className="navbar-nav">
        {props.pages.map((page) => (
          <li className="nav-item"
          key={page?.name}>
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            <div>Home</div>
          </li>))}
        </ul>
      </div>
    </div>
  </nav>
  )

}

// exporting component function
export default Nav;