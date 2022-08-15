import React from 'react';

export default function Eyeglasses() {
    return (
        <>
        <div class="container-fluid text-bg-primary py-4 px-5">
            <h3>Eye Glasses</h3>
        </div>
        
        {/*cards*/}
        <div className="row row-cols-1 row-cols-md-5 g-3 py-3">
        <div className="col">
            <div className="card ">
                <div className="card card text-center border border-primary" >
                    <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/06/20220619_165556-01-300x300.jpeg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        
                        <p className="card-text" style={{fontSize:"90%"}}><b>Aquarius</b></p>
                        <p className="d-inline text-decoration-line-through"><i className="fa fa-rupee"></i>1999.00</p>
                        <p className="d-inline" style={{color:"rgb(77, 211, 77)", fontSize: "150%"}}> <i className="fa fa-rupee"></i>349.00</p><br /><br />
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card card text-center border border-primary" >
                    <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/06/20220619_165728-01-300x300.jpeg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        
                        <p className="card-text" style={{fontSize:"90%"}}><b>Aquarius</b></p>
                        <p className="d-inline text-decoration-line-through"><i className="fa fa-rupee"></i>999.00</p>
                        <p className="d-inline" style={{color:"rgb(77, 211, 77)", fontSize: "150%"}}> <i className="fa fa-rupee"></i>349.00</p><br /><br />
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <div className="card card text-center border border-primary" >
                    <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/07/20220702_142231-01-300x300.jpeg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        
                        <p className="card-text" style={{fontSize:"90%"}}><b>Aquarius</b></p>
                        <p className="d-inline text-decoration-line-through"><i className="fa fa-rupee"></i>1299.00</p>
                        <p className="d-inline" style={{color:"rgb(77, 211, 77)", fontSize: "150%"}}> <i className="fa fa-rupee"></i>599.00</p><br /><br />
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <div className="card card text-center border border-primary" >
                    <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/06/20220612_174132-01-300x300.jpeg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        
                        <p className="card-text" style={{fontSize:"90%"}}><b>Aquarius</b></p>
                        <p className="d-inline text-decoration-line-through"><i className="fa fa-rupee"></i>1699.00</p>
                        <p className="d-inline" style={{color:"rgb(77, 211, 77)", fontSize: "150%"}}> <i className="fa fa-rupee"></i>349.00</p><br /><br />
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <div className="card card text-center border border-primary" >
                    <a href="#"><img src="https://www.mojowear.in/wp-content/uploads/2022/06/20220612_160119-01-01-300x300.jpeg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        
                        <p className="card-text" style={{fontSize:"90%"}}><b>Aquarius</b></p>
                        <p className="d-inline text-decoration-line-through"><i className="fa fa-rupee"></i>1299.00</p>
                        <p className="d-inline" style={{color:"rgb(77, 211, 77)", fontSize: "150%"}}> <i className="fa fa-rupee"></i>599.00</p><br /><br />
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>

    )
}