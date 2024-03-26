import HeaderComponent from "../../layouts/HeaderComponent";
import FooterComponent from "../../layouts/FooterComponent";

function HomeComponent() {
    return (
        <div>
            <HeaderComponent />
            <div className="container pt-5 mb-5">
                <div className="row">
                    <h1>News</h1>
                    <div className="col-md-12">
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://picsum.photos/200" style={{ height: 450 }} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://picsum.photos/200" style={{ height: 450 }} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://picsum.photos/200" style={{ height: 450 }} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-3 mb-3">
                        <h1>Latest News</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://picsum.photos/seed/picsum/200/300"
                                style={{ height: 250 }}
                                className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://picsum.photos/seed/picsum/200/300"
                                style={{ height: 250 }}
                                className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://picsum.photos/seed/picsum/200/300"
                                style={{ height: 250 }}
                                className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://picsum.photos/seed/picsum/200/300"
                                style={{ height: 250 }}
                                className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://picsum.photos/seed/picsum/200/300"
                                style={{ height: 250 }}
                                className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://picsum.photos/seed/picsum/200/300"
                                style={{ height: 250 }}
                                className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-2"><FooterComponent /></div>

        </div>
    )
}

export default HomeComponent;