import React from 'react';

export default function Cards() {
    return (
        //(text & cards)
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
    )
}
