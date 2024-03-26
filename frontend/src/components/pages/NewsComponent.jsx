import HeaderComponent from "../../layouts/HeaderComponent";
import FooterComponent from "../../layouts/FooterComponent";

function NewsComponent(){
    return(
        <div>
            <HeaderComponent />
            <div className="container pt-5 mb-5">
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

export default NewsComponent;