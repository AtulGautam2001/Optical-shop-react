import React from 'react'

export default function Banner() {
    return (
        //Banner-(cards)
        <div className="container-fluid shadow p-3 mb-5 bg-body rounded p-4">
            <div className="row row-cols-1 row-cols-md-2 g-2">
                <div className="col p-4">
                    <div className="card">
                        <a href="/"><img src="https://www.mojowear.in/wp-content/uploads/2022/05/men-eyeglasses.webp" className="card-img-top" alt="..."/></a>
                    </div>
                </div>
                <div className="col p-4">
                    <div className="card">
                        <a href="/"><img src="https://www.mojowear.in/wp-content/uploads/2022/05/women-eyeglasses.webp" className="card-img-top" alt="..."/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}