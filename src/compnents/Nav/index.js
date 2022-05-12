
import React from 'react';
// import bootstrap for react 'check bootstrap react docs'

// use props to pass down the page array from App
function Nav(props) {
  //to see what gets passed down in the props
  console.log(props);
  

  const {
    pages = [],
    currentPage,
    setCurrentPage,

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
          {/* passed in index to be able to create a li for every item in the pages array */}
        {props.pages.map((page) => (
          <li className="nav-item"
          key={page.name}>
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            <span onClick={()=> setCurrentPage(page.name)}>{page.name}</span>
          </li>))}
        </ul>
      </div>
    </div>
  </nav>
  )

}

// exporting component function
export default Nav;