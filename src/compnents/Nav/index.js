
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


  return (

    <nav className="row navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h1 className="navbar-brand ms-2">James</h1>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="navbar-collapse flex-grow-0" id="navbarNav">
          <ul className="navbar-nav justify-content-end">
            {/* passed in index to be able to create a li for every item in the pages array */}
            {props.pages.map((page) => (
              <li className="nav-item m-1 nav-link"
                key={page.name}>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <span onClick={() => setCurrentPage(page.name)}>{page.name}</span>
              </li>))}
          </ul>
        </div>
      </div>
    </nav>
  );

}

export default Nav;