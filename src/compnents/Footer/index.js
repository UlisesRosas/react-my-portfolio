import React from 'react'
// import images or path will not be recognized
import imgGithub from '../../assets/images/GitHub-Mark-32px.png'
import imgLinkedIn from '../../assets/images/Li-In-Bug-32px.png'
import imgStack from '../../assets/images/logo-stackoverflow-32px.png'

function Footer() {
    return (
        // <footer className="bg-dark text-white position-absolute bottom-0 w-100">This is the footer</footer>
        <footer style={{backgroundColor: '#adadeb'}} className="row bd-footer pt-5" >
        <div className="pt-5">
          <div className="row">
            <div className="col col-lg- position-relative start-50 translate-middle">
              <h5>Links</h5>
              {/* logo and github link */}
              <a href="https://github.com/UlisesRosas" className="m-2">
                  <img src={imgGithub} alt="github"></img>
              </a>
              <a href="https://www.linkedin.com/feed/" className="m-2">
                  <img src={imgLinkedIn} alt="github"></img>
              </a>
              <a href="https://stackoverflow.com/users/17476564/ulisesrosas" className="m-2">
                  <img src={imgStack} alt="github"></img>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;