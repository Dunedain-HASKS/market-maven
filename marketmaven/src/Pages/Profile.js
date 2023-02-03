export default function Profile() {
    return (
        <div className="container py-5">
            <div className="row d-flex">
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                        <img className="img-fluid rounded-circle" src="https://i.pinimg.com/originals/d5/c6/3e/d5c63e1afc63ac6b4b8931a967efe6be.jpg" alt="avatar" style={{width: "250px", height: "250px"}} />
                        <p className="text-muted mt-3">Full Stack Cook</p>
                        <p className="text-muted mb-4">308 Negra Arroyo Lane, Albuquerque, New Mexico.</p>
                        <div className="d-flex justify-content-center mb-2">
                            <button className="btn btn-dark">Log Out</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="card-text">Full Name</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="card-text text-muted">Walter H. White</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-3">
                                <p className="card-text">Email</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="card-text text-muted">jesse_is@bitch.com</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-3">
                                <p className="card-text">Phone</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="card-text text-muted">(069) 696-9696</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-3">
                                <p className="card-text">Mobile</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="card-text text-muted">(069) 696-9696</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-4 mb-md-0">
                            <div className="card-body">
                                <div className="card-text mb-4">
                                <p class="card-text mb-4">
                                    <span class="text-primary fst-italic me-1">Stocks</span>Portfolio
                                </p>
                                <p class="card-text mb-2">Reliance</p>
                                <div class="progress rounded">
                                    <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                </div>
                                <p class="card-text mb-2 mt-3">ONGC</p>
                                <div class="progress rounded">
                                    <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                </div>
                                <p class="card-text mb-2 mt-3">SBIN </p>
                                <div class="progress rounded">
                                    <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                </div>
                                <p class="card-text mb-2 mt-3">HDFC </p>
                                <div class="progress rounded">
                                    <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                </div>
                                <p class="card-text mb-2 mt-3">Nifty Bees </p>
                                <div class="progress rounded">
                                    <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                </div>
                                <div className="d-flex justify-content-center mb-1" style={{marginTop: "30px"}}>
                                    <button className="btn btn-dark">Add Stock</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-4 mb-md-0">
                            <div className="card-body">
                                <div className="card-text mb-4">
                                <p class="card-text mb-4">
                                    <span class="text-primary fst-italic me-1">Stocks</span>Portfolio
                                </p>
                                <p class="card-text mb-2">Reliance</p>
                                <div class="progress rounded">
                                    <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                </div>
                                <p class="card-text mb-2 mt-3">ONGC</p>
                                <div class="progress rounded">
                                    <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                </div>
                                <p class="card-text mb-2 mt-3">SBIN </p>
                                <div class="progress rounded">
                                    <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                </div>
                                <p class="card-text mb-2 mt-3">HDFC </p>
                                <div class="progress rounded">
                                    <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                </div>
                                <p class="card-text mb-2 mt-3">Nifty Bees </p>
                                <div class="progress rounded">
                                    <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                </div>
                                <div className="d-flex justify-content-center mb-1" style={{marginTop: "30px"}}>
                                    <button className="btn btn-dark">Add Stock</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}