import React from 'react';

function Portfolio() {
    return (
        <section style={{ backgroundColor: '#adadeb' }} className="row mr-0">
            <div className="col-12">
                <h1 className="text-center mt-3">Portfolio</h1>
            </div>
            <div className="row ms-1">
                {/* portfolio item */}
                <div class="col-sm-6 mt-4">
                    <div className="card bg-dark text-light" style={{ width: '18rem;' }}>
                        <div className="card-body">
                            <img src="../../assets/images/6feetAwayWideSized.jpg" className="card-img-top" alt="project"/>
                            <h5 className="card-title">6FeetAwayGaming</h5>
                            <a href="https://github.com/UlisesRosas/6-FeetAway-Gaming" className="btn btn-secondary">Go To</a>
                        </div>
                    </div>
                </div>
                {/* portfolio item */}
                <div class="col-sm-6 mt-4">
                    <div className="card bg-dark text-light" style={{ width: '18rem;' }}>
                        <div className="card-body">
                            <img src="../../assets/images/only-friends.jpg" className="card-img-top" alt="project"/>
                            <h5 className="card-title">Only_Friends</h5>
                            <a href="https://github.com/UlisesRosas/Only_Friends" className="btn btn-secondary">Go To</a>
                        </div>
                    </div>
                </div>
                {/* portfolio item */}
                <div class="col-sm-6 mt-4">
                    <div className="card bg-dark text-light" style={{ width: '18rem;' }}>
                        <div className="card-body">
                            <img src="../../assets/images/item2-image.jpg" className="card-img-top" alt="project"/>
                            <h5 className="card-title">Filler Project</h5>
                            <a href="#" className="btn btn-secondary">Go To</a>
                        </div>
                    </div>
                </div>
                {/* portfolio item */}
                <div class="col-sm-6 mt-4">
                    <div className="card bg-dark text-light" style={{ width: '18rem;' }}>
                        <div className="card-body">
                            <img src="../../assets/images/item4-image.jpg" className="card-img-top" alt="project"/>
                            <h5 className="card-title">Filler Project</h5>
                            <a href="#" className="btn btn-secondary">Go To</a>
                        </div>
                    </div>
                </div>
                {/* portfolio item */}
                <div class="col-sm-6 mt-4">
                    <div className="card bg-dark text-light" style={{ width: '18rem;' }}>
                        <div className="card-body">
                            <img src="../../assets/images/item5-image.jpg" className="card-img-top" alt="project"/>
                            <h5 className="card-title">Filler Project</h5>
                            <a href="#" className="btn btn-secondary">Go To</a>
                        </div>
                    </div>
                </div>
                {/* portfolio item */}
                <div class="col-sm-6 mt-4">
                    <div className="card bg-dark text-light" style={{ width: '18rem;' }}>
                        <div className="card-body">
                            <img src="../../assets/images/item2-image.jpg" className="card-img-top" alt="project"/>
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