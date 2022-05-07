import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

// we are letting page know what page we are in from state
function Page ({currentPage}) {
    // detects what page is being passed 
    const renderPage = () => {
        switch(currentPage.name) {
            case 'about':
                return <About/>;
            case 'portfolio':
                return <Portfolio/>;
            case 'contact':
                return <Contact/>;
        }
    }

    return (
        <div>
            {/* renders the component passed from the switch statement */}
            {renderPage()}
        </div>
    )
}

export default Page;