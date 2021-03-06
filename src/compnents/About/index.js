import React from 'react';
// image has to be imported or path will not be recognized
import meImage from '../../assets/images/berserker-image-200px.png'
import { LoremIpsum } from 'react-lorem-ipsum';

function About() {
    return (

        <section style={{ backgroundColor: '#adadeb' }} className="row mr-0">

            <div className="ms-3">
                <h1 className="text-start">About</h1>
                <img src={meImage} className="rounded float-start" alt="avatar"></img>
            </div>
            <div className="text-wrapper ps-5 pe-5 mt-5">
                <LoremIpsum p={4}  className="fst-normal" />
            </div>
        </section>
    );
}

export default About;