import React from 'react'
import { useState, useEffect } from 'react'
import './Crew.css'

const Crew = () => {


    const [crewData, setCrewData] = useState([])
    const changePicture = (x) => {
        if (x.matches && window.location.pathname === '/crew') { // If media query matches


            let app = document.getElementsByClassName("App")[0];
            let url = process.env.PUBLIC_URL + '/images/crew/background-crew-tablet.jpg'
            app.style.backgroundImage = "url(" + url + ")"
        }

    }
    const changePictureToPortrait = (x) => {
        if (x.matches && window.location.pathname === '/crew') {

            let app = document.getElementsByClassName("App")[0];
            let url = process.env.PUBLIC_URL + '/images/crew/background-crew-desktop.jpg'
            app.style.backgroundImage = "url(" + url + ")"

        }
    }



    useEffect(() => {
        const data = require('../data.json')
        setCrewData(data.crew)


        let x = window.matchMedia("(max-width: 992px)");
        x.addEventListener("change", changePicture)

        let y = window.matchMedia("(min-width: 992px)");
        y.addEventListener("change", changePictureToPortrait)
        let app = document.getElementsByClassName("App")[0];
        let url = process.env.PUBLIC_URL + '/images/crew/background-crew-desktop.jpg'
        app.style.backgroundImage = "url(" + url + ")"


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div id="crew" className='w-100'>



            <div id="crew-slider" className="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
                <div className="carousel-indicators" style={{ position: "absolute", left: "0" }}>
                    {crewData.map((data, key) =>

                        <button type="button" data-bs-target="#crew-slider" data-bs-slide-to={key} className={(key === 0) ? "active pg" : "pg"} aria-current="true" aria-label={"Slide " + key} style={{ color: "white", backgroundColor: "white", height: "10px", width: "10px", borderRadius: "50% ", marginRight: "12px" }} key={key}></button>
                    )}

                </div>

                <div className="crew-header">
                    <label className="crew-header-h1" > <span style={{ color: "#D0D6F9", letterSpacing: '4.73' }}>   03  </span> &nbsp; &nbsp;<span>MEET YOUR CREW</span> </label>
                </div>


                <div className="carousel-inner">
                    {crewData.map((data, key) =>
                        <div className={(key === 0) ? "carousel-item active" : "carousel-item"} key={key}>
                            <div className="crew-content w-100 row">
                                <div className='col-lg-6 crew-section-1'>
                                    <div className="w-100 crew-section-1-contents">


                                        <div className="crew-desig">
                                            {data.role.toUpperCase()}
                                        </div>
                                        <div className="crew-name">
                                            {data.name.toUpperCase()}
                                        </div>
                                        <div className="crew-description">
                                            {data.bio}
                                        </div>
                                    </div>


                                </div>
                                <div className='col-lg-6 crew-section-2'>
                                    <img src={process.env.PUBLIC_URL + data.images.png} alt="No Img Available" className='fluid crew-picture'></img>

                                </div>


                            </div>
                        </div>

                    )}


                </div>

            </div>













        </div>
    )
}

export default Crew