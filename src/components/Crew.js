import React from 'react'
import { useState, useEffect } from 'react'
import './Crew.css'

const Crew = () => {


    const [crewData, setCrewData] = useState([])
    const [crewDesig, setCrewDesig] = useState('')
    const [crewName, setCrewName] = useState('')
    const [crewDescription, setCrewDescription] = useState('')
    const [crewImage, setCrewImage] = useState('')



    useEffect(() => {
        const data = require('../data.json')
        setCrewName(data.crew[1].name)
        setCrewDesig(data.crew[1].role)
        setCrewDescription(data.crew[1].bio)
        setCrewImage(data.crew[1].images.png)
        setCrewData(data.crew)

        console.log(`destinations : ${data.crew}`)
    }, [])


    return (
        <div id="crew" className='w-100'>



            <div id="crew-slider" class="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
                <div class="carousel-indicators" style={{ position: "absolute", left: "0" }}>
                    {crewData.map((data, key) =>

                        <button type="button" data-bs-target="#crew-slider" data-bs-slide-to={key} class={(key === 0) ? "active pg" : "pg"} aria-current="true" aria-label={"Slide " + key} style={{ color: "white", backgroundColor: "white", height: "10px", width: "10px", borderRadius: "50% ", marginRight: "12px" }}></button>
                    )}

                </div>

                <div className="crew-header">
                    <label className="crew-header-h1" > <span style={{ color: "#D0D6F9", letterSpacing: '4.73' }}>   03  </span> &nbsp; &nbsp;<span>MEET YOUR CREW</span> </label>
                </div>


                <div class="carousel-inner">
                    {crewData.map((data, key) =>
                        <div className={(key === 0) ? "carousel-item active" : "carousel-item"}>
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