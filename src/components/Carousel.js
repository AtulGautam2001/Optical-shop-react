import React from 'react'

export default function Carousel(){
    return(
        //carousel
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
    )
}