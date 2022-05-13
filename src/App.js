// to keep track of what part of the site we are on. State notices changes
import React, { useState } from 'react';
import './App.css';
// import components
import Header from './compnents/Header'
import Nav from './compnents/Nav'
import Page from './compnents/Page'
import Footer from './compnents/Footer'
// import './bootstrap/dist/bootstrap.min.css';


function App() {
  // pages array
  const [pages] = useState([
    {
      name: 'about'
    },
    {
      name:'contact'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'resume'
    }
  ]);
  // declared state variables that a variable an the other is the method to change variable val. the default is whatever
  // first page needs to be. in this case the first array object
  const [currentPage, setCurrentPage ] = useState(pages[0].name);
console.log(currentPage)
  return (
    <div className="App">
      {/* placing component by calling the component function name as a tag */}
      <Header>
        <Nav
        // these props are being passed to the Nav component
        // maps through our components
        pages = {pages}
        // gets the current page from array
        currentPage = {currentPage}
        // changes the currentPage value 
        setCurrentPage = {setCurrentPage}>
        </Nav>
      </Header>
      {/* TODO consider putting page in to a <main> tag  */}
      <Page
      // passing the current page to 'page'
      currentPage = {currentPage}></Page>
      <Footer></Footer>

    </div>
  );
}

export default App;
