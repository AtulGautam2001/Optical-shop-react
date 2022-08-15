import React from "react";

export default function Whatsapp(){
    return(
        <div className="container">
            
            <a href="https://wa.me/xxxxxxxxxx">
                <button className="btn btn-outline-success" style={{position:"fixed", bottom:"30px",
                right: "90px"}}>click here to start chat</button>
                <img src="https://assets.webiconspng.com/uploads/2017/09/Whatsapp-PNG-Image-12114-768x777.png" style={{position:"fixed", bottom:"10px",
                right: "25px", width:"5%"}}/>
            </a>
        </div>
    )
}