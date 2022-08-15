import React from 'react'

export default function Images() {
    return (
        //Image
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
    )
}