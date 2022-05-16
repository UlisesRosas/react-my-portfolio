import React from 'react';

function Header(props){
    // this returns JSX that will get injected in to the 'root' class in the index.html file
    return (
      <header>
          {/* passing state through props */}
          {props.children}
      </header>  
    );
}

// exports the component
export default Header;