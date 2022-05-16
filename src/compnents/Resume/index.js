import React from 'react';
// for test purposes
import { LoremIpsum } from 'react-lorem-ipsum';

function Resume() {
    return (
        <section style={{ backgroundColor: '#adadeb' }} className="row mr-0">

            <div className="row">
                <h1 className="text-center mt-3">Resume</h1>
                {/* resume downloadable ancor */}
                <a classname="col" href="../../assets/docs/resume.pdf" download>
                    <button type="button" class="btn btn-outline-secondary">Download</button>
                </a>
            </div>
             {/* resume lis items */}
            <ul className="row text-wrapper ps-5 pe-5 mt-5">
                <h3 className="text-start fw-normal">Front-end Proficiencies</h3>
                <li className="text-start fst-italic ms-5">HTML</li>
                <li className="text-start fst-italic ms-5">CSS</li>
                <li className="text-start fst-italic ms-5">JavaScript</li>
                <li className="text-start fst-italic ms-5">JQuery</li>
                <li className="text-start fst-italic ms-5">responsive design</li>
                <li className="text-start fst-italic ms-5">React</li>
                <li className="text-start fst-italic ms-5">Bootstrap</li>
            </ul>
            {/* resume lis items */}
            <ul className="row text-wrapper ps-5 pe-5 mt-5">
                <h3 className="text-start fw-normal">Beck Proficiencies</h3>
                <li className="text-start fst-italic ms-5">API's</li>
                <li className="text-start fst-italic ms-5">Node</li>
                <li className="text-start fst-italic ms-5">Express</li>
                <li className="text-start fst-italic ms-5">MySQL, Sequelize</li>
                <li className="text-start fst-italic ms-5">MongoDB, Mongoose</li>
                <li className="text-start fst-italic ms-5">REST</li>
                <li className="text-start fst-italic ms-5">GraphQL</li>
            </ul>
        </section>
    );
}

export default Resume;