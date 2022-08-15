import React from "react";

export default function Footer() {
    return (
        //footer
        <footer className="text-center text-lg-start bg-dark text-white">
            {/*Section: Social media*/}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            
                {/*Left*/}
                <div className="text-center container">
                    <div className="me-5 d-none d-lg-block mx-5 py-4">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/*Left*/}

                    {/*Right*/}
                    <div>
                        <a href="" className="me-4 text-reset" style={{textDecoration: "none"}}>
                            <i className="fa fa-facebook" style={{fontSize:"24px"}}></i>
                        </a>
                        <a href="" className="me-4 text-reset" style={{textDecoration: "none"}}>
                            <i className="fa fa-twitter" style={{fontSize:"24px"}}></i>
                        </a>
                        <a href="" className="me-4 text-reset" style={{textDecoration: "none"}}>
                            <i className="fa fa-instagram" style={{fontSize:"24px"}}></i>
                        </a>
                        <a href="" className="me-4 text-reset" style={{textDecoration: "none"}}>
                            <i className="fa fa-linkedin" style={{fontSize:"24px"}}></i>
                        </a>

                    </div>
                </div>
                {/*Right*/}
            </section>
            {/*Section: Social media*/}

            {/*Section links*/}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/*Grid row*/}
                    <div className="row mt-3">
                        {/*Grid column*/}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/*Content*/}
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fa fa-star" aria-hidden="true"></i> About Company
                            </h6>
                            <p>
                                A one-stop online solution for purchasing eyewear and its accessories, Mojowear delivers them right at your doorstep with convenient methods of payment. Sunglasses as well as eyeglasses are available for men and women in a diverse array of styles and trendy colours. If you want to try out contact lenses, pick the ones of your choice from the extensive variety of coloured contact lenses from our online store.
                            </p>
                        </div>
                        {/*Grid column*/}

                        {/*Grid column*/}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/*Links*/}
                            <h6 className="text-uppercase fw-bold mb-4">
                                For customer
                            </h6>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>Download</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>Account details</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>Lost password</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>Address</a>
                            </p>
                        </div>
                        {/*Grid column*/}

                        {/*Grid column*/}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/*Links*/}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Quick links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>Home</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>Blog</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>About Us</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>Contact Us</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>Privacy Policy</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>Terms & Conditions</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>Refund & Cancellation Policy</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration: "none"}}>Delivery & Shipping Policy</a>
                            </p>
                        </div>
                        {/*Grid column*/}

                        {/*Grid column*/}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/*Links*/}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact Info
                            </h6>
                            <p>Address:40/5 mb road Khanpur New Delhi</p>
                        <p>Mobile:+1234567890</p>
                    <p>Email:support@mojowear.in</p>
                    <p>Website:Mojowear</p>
                </div>
                {/*Grid column*/}
            </div>
            {/*Grid row*/}
        </div>
      </section >
        {/*Section links*/ }

    {/*Copyright*/ }
    <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2022 Copyright:
        <a className="text-reset fw-bold" style={{textDecoration: "none"}} href="#">Mojowear.com</a>
    </div>
    {/*Copyright*/ }
    </footer >
    //footer
    )
}