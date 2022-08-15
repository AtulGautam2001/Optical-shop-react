import React from 'react'
//import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
        {/*carousel*/}
        <div id="carouselExampleIndicators" className="carousel slide shadow p-3 mb-5 bg-body rounded" data-bs-ride="true">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://www.mojowear.in/wp-content/uploads/2022/05/1-1.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://www.mojowear.in/wp-content/uploads/2022/05/3-1.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://www.mojowear.in/wp-content/uploads/2022/05/2-1.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://www.mojowear.in/wp-content/uploads/2022/05/4-1.png" className="d-block w-100" alt="..."/>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        {/*Banner-(cards)*/}
        <div className="container-fluid shadow p-3 mb-5 bg-body rounded p-4">
            <div className="row row-cols-1 row-cols-md-2 g-2">
                <div className="col p-4">
                    <div className="card">
                        <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/05/men-eyeglasses.webp" className="card-img-top" alt="..."/></a>
                    </div>
                </div>
                <div className="col p-4">
                    <div className="card">
                        <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/05/women-eyeglasses.webp" className="card-img-top" alt="..."/></a>
                    </div>
                </div>
            </div>
        </div>

        {/*(text & cards-1)*/}
        <div className="container-fluid shadow p-3 mb-5 bg-body rounded">
            {/*<!--text-->*/}
            <div >
                <h3 className="text-center" style={{padding: "15px"}}>Featured <span style={{color:"rgb(39, 102, 228)"}}>Products</span></h3>
            </div>
            {/*cards*/}
            <div className="row row-cols-1 row-cols-md-5 g-3">
                <div className="col">
                    <div className="card h-100">
                        <div className="card card text-center border border-primary" >
                            <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/05/20220508_145503-01-1-300x300.jpeg" className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <p className="card-title" style={{fontSize:"80%"}}>Eye glasses, Men, Women</p>
                                <p className="card-text" style={{fontSize:"90%"}}><b>MJ Duo Color Full Frame Round Eyeglasses For Men/Women</b></p>
                                <p className="d-inline text-decoration-line-through"><i className="fa fa-rupee"></i>999.00</p>
                                <p className="d-inline" style={{color:"rgb(77, 211, 77)", fontSize: "150%"}}><i className="fa fa-rupee"></i>499.00</p><br /><br />
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card card text-center border border-primary" >
                            <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/05/20220515_163420-01-1-300x300.jpeg" className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <p className="card-title" style={{fontSize:"80%"}}>Eye glasses, Men, Women</p>
                                <p className="card-text" style={{fontSize:"90%"}}><b>MJ Duo Color Full Frame Round Eyeglasses For Men/Women</b></p>
                                <p className="d-inline text-decoration-line-through"><i className="fa fa-rupee"></i>999.00</p>
                                <p className="d-inline" style={{color:"rgb(77, 211, 77)", fontSize: "150%"}}><i className="fa fa-rupee"></i>499.00</p><br /><br />
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card card text-center border border-primary" >
                            <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/05/20220515_154349-01-1-300x300.jpeg" className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <p className="card-title" style={{fontSize:"80%"}}>Computer glasses, Men, Women</p>
                                <p className="card-text" style={{fontSize:"90%"}}><b>MJ Duo Color Full Frame Round Eyeglasses For Men/Women</b></p>
                                <p className="d-inline" style={{color:"rgb(77, 211, 77)", fontSize: "150%"}}><i className="fa fa-rupee"></i>1,099.00</p><br /><br />
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*text & cards-2(group)*/}
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

        {/*Image*/}
        <div>
            <div className="container-fluid">
                <img className="container-fluid" src="https://www.mojowear.in/wp-content/uploads/2022/05/Screenshot-2022-05-20-100845.png"/>
            </div>

        
            <div className="container-fluid">
                <h3 className="text-center" >Guide</h3>
            </div>

         
            <div className="shadow p-3 mb-5 bg-body rounded">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.mojowear.in/wp-content/uploads/2022/05/How_to_Choose_Eyeglasses_header.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">How To Choose The Right Frame Shape</h5>
                                    </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.mojowear.in/wp-content/uploads/2022/05/Screenshot-2022-05-21-093419.png" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Ways To Read Your Eye Prescription Correctly</h5>
                                    </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.mojowear.in/wp-content/uploads/2022/05/Screenshot-2022-05-21-094110.png" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Your Guide To Perfect Frame Size</h5>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}