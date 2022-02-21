import React from "react";

import './SliderTester.css'
const SlideTester = () => {


    return (
        <div className="slider-hero">

            <div id="carouselExampleDark" class="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">

                        <img src={process.env.PUBLIC_URL + "/images/technology/image-space-capsule-portrait.jpg"} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={process.env.PUBLIC_URL + "/images/technology/image-space-capsule-portrait.jpg"} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={process.env.PUBLIC_URL + "/images/technology/image-space-capsule-portrait.jpg"} class="d-block w-100" alt="..." />

                    </div>
                </div>

            </div>
        </div>

    );
};

export default SlideTester;