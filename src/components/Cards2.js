import React from "react";

export default function Cards2() {
    return (
        //text & cards(group)
        <div className="container-fluid shadow p-3 mb-5 bg-body rounded">
            {/*text*/}
            <div >
                <h3 className="text-center" style={{ padding: "15px" }}>Contact <span style={{ color: "rgb(39, 102, 228)" }}>Lenses</span></h3>
            </div>
            {/*cards*/}
            <div className="row row-cols-1 row-cols-md-5 g-5">
                <div className="col">
                    <div className="card h-100">
                        <div className="card card text-center border border-primary" >
                            <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/05/plano_144736_10_03_2022-300x300.jpg" className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <p className="card-title" style={{ fontSize: "80%" }}>Contact lenses</p>
                                <p className="card-text" style={{ fontSize: "90%" }}><b>Aquacolor Dusky Brown Daily Disposable Color Contact Lens</b></p>
                                <p className="d-inline text-decoration-line-through"><i className="fa fa-rupee"></i>900.0</p>
                                <p className="d-inline" style={{ color: "rgb(77, 211, 77)", fontSize: "150%" }}><i className="fa fa-rupee"></i>549.0</p><br /><br />
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card card text-center border border-primary" >
                            <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/05/plano_144737_10_03_2022-300x300.jpg" className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <p className="card-title" style={{ fontSize: "80%" }}>Contact lenses</p>
                                <p className="card-text" style={{ fontSize: "90%" }}><b>Aquacolor Fierce Green Daily Disposable Color Contact Lens</b></p>
                                <p className="d-inline text-decoration-line-through"><i className="fa fa-rupee"></i>900.0</p>
                                <p className="d-inline" style={{ color: "rgb(77, 211, 77)", fontSize: "150%" }}><i className="fa fa-rupee"></i>549.0</p><br /><br />
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card card text-center border border-primary" >
                            <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/05/plano_144738_10_03_2022-300x300.jpg" className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <p className="card-title" style={{ fontSize: "80%" }}>Contact lenses</p>
                                <p className="card-text" style={{ fontSize: "90%" }}><b>Aquacolor Flirty Blue Daily Disposable Color Contact Lens</b></p>
                                <p className="d-inline text-decoration-line-through"><i className="fa fa-rupee"></i>900.0</p>
                                <p className="d-inline" style={{ color: "rgb(77, 211, 77)", fontSize: "150%" }}><i className="fa fa-rupee"></i>549.0</p><br /><br />
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card card text-center border border-primary" >
                            <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/05/aquacolor-daily-disposable-happy-honey-10-lens-pack_happy_honey-300x300.jpg" className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <p className="card-title" style={{ fontSize: "80%" }}>Contact lenses</p>
                                <p className="card-text" style={{ fontSize: "90%" }}><b>Aquacolor Happy Honey Daily Disposable Color Contact Lens</b></p>
                                <p className="d-inline text-decoration-line-through"><i className="fa fa-rupee"></i>900.0</p>
                                <p className="d-inline" style={{ color: "rgb(77, 211, 77)", fontSize: "150%" }}><i className="fa fa-rupee"></i>549.0</p><br /><br />
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card card text-center border border-primary" >
                            <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/05/plano-_136344_10_03_2022-1-300x300.jpg" className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <p className="card-title" style={{ fontSize: "80%" }}>Contact lenses</p>
                                <p className="card-text" style={{ fontSize: "90%" }}><b>Aquacolor Icy Blue Daily Disposable Color Contact Lens</b></p>
                                <p className="d-inline text-decoration-line-through"><i className="fa fa-rupee"></i>900.0</p>
                                <p className="d-inline" style={{ color: "rgb(77, 211, 77)", fontSize: "150%" }}><i className="fa fa-rupee"></i>549.0</p><br /><br />
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}