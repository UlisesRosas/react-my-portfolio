import React from 'react';
// images must be imported or path will not be recognized
import project1 from '../../assets/images/6feetAwayWideSized.jpg'
import project2 from '../../assets/images/only-friends.jpg'
import project3 from '../../assets/images/partyHearty.jpg'
import project4 from '../../assets/images/item4-image.jpg'
import project5 from '../../assets/images/item5-image.jpg'
import project6 from '../../assets/images/item2-image.jpg'


function Portfolio() {
    return (
        <section style={{ backgroundColor: '#adadeb' }} className="row mr-0">
            <div className="col-12">
                <h1 className="text-center mt-3">Portfolio</h1>
            </div>
            <div className="row ms-1">
                {/* portfolio item */}
                <div className="col-sm-6 mt-4">
                    <div className="card bg-dark text-light" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <img src={project1} className="card-img-top" alt="project"/>
                            <h5 className="card-title">6FeetAwayGaming</h5>
                            <a href="https://github.com/UlisesRosas/6-FeetAway-Gaming" className="btn btn-secondary">Go To</a>
                        </div>
                    </div>
                </div>
                {/* portfolio item */}
                <div className="col-sm-6 mt-4">
                    <div className="card bg-dark text-light" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <img src={project2} className="card-img-top" alt="project"/>
                            <h5 className="card-title">Only_Friends</h5>
                            <a href="https://github.com/UlisesRosas/Only_Friends" className="btn btn-secondary">Go To</a>
                        </div>
                    </div>
                </div>
                {/* portfolio item */}
                <div className="col-sm-6 mt-4">
                    <div className="card bg-dark text-light" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <img src={project3} className="card-img-top" alt="project"/>
                            <h5 className="card-title">Party Hearty</h5>
                            <a href="https://github.com/sammcowen/party_hearty" className="btn btn-secondary">Go To</a>
                        </div>
                    </div>
                </div>
                {/* portfolio item */}
                <div className="col-sm-6 mt-4">
                    <div className="card bg-dark text-light" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <img src={project4} className="card-img-top" alt="project"/>
                            <h5 className="card-title">Filler Project</h5>
                            <a href="#" className="btn btn-secondary">Go To</a>
                        </div>
                    </div>
                </div>
                {/* portfolio item */}
                <div className="col-sm-6 mt-4">
                    <div className="card bg-dark text-light" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <img src={project5} className="card-img-top" alt="project"/>
                            <h5 className="card-title">Filler Project</h5>
                            <a href="#" className="btn btn-secondary">Go To</a>
                        </div>
                    </div>
                </div>
                {/* portfolio item */}
                <div className="col-sm-6 mt-4">
                    <div className="card bg-dark text-light" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <img src={project6} className="card-img-top" alt="project"/>
                            <h5 className="card-title">Filler Project</h5>
                            <a href="#" className="btn btn-secondary">Go To</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Portfolio;