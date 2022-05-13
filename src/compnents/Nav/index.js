
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

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Ulises Rosas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
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