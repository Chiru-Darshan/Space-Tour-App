import React from 'react'
import { useEffect, useState } from 'react'
import './Technology.css'
const Technology = () => {
    const [techData, setTechData] = useState([])
    const [techName, setTechName] = useState("")

    const [techDesc, setTechDesc] = useState("")
    const [techImagePortrait, setTechImagePortrait] = useState('')
    const [techImageLandscape, setTechImageLandscape] = useState('')



    const refreshData = (e, data) => {

        const links = document.getElementsByClassName('tech-nav-link')
        for (let link of links) {
            link.classList.remove('techActive')
        }
        e.target.classList.add("techActive")


        setTechName(data.name)
        setTechDesc(data.description)
        setTechImagePortrait(data.images.portrait)
        setTechImageLandscape(data.images.landscape)
    }

    const loadData = () => {
        const data = require('../data.json')
        setTechData(data.technology);
        setTechName(data.technology[0].name)
        setTechDesc(data.technology[0].description)
        setTechImagePortrait(data.technology[0].images.portrait)
        setTechImageLandscape(data.technology[0].images.landscape)

    }



    const changePicture = (x) => {
        if (x.matches && window.location.pathname === '/technology') { // If media query matches

            let tech_img = document.getElementById("tech-img")
            tech_img.src = process.env.PUBLIC_URL + techImageLandscape
            console.log(`landscape image : ${process.env.PUBLIC_URL + techImageLandscape} and data : ${techData}`)


            let app = document.getElementsByClassName("App")[0];
            let url = process.env.PUBLIC_URL + '/images/technology/background-technology-tablet.jpg'
            app.style.backgroundImage = "url(" + url + ")"
        }

    }
    const changePictureToPortrait = (x) => {
        if (x.matches && window.location.pathname === '/technology') {
            let tech_img = document.getElementById("tech-img")
            tech_img.src = process.env.PUBLIC_URL + techImagePortrait;
            console.log(`portrait image : ${process.env.PUBLIC_URL + techImagePortrait}`)
            let app = document.getElementsByClassName("App")[0];
            let url = process.env.PUBLIC_URL + '/images/technology/background-technology-desktop.jpg'
            app.style.backgroundImage = "url(" + url + ")"

        }
    }
    useEffect(() => {
        loadData();


        let x = window.matchMedia("(max-width: 992px)");
        x.addEventListener("change", changePicture)

        let y = window.matchMedia("(min-width: 992px)");
        y.addEventListener("change", changePictureToPortrait)
        let app = document.getElementsByClassName("App")[0];
        let url = process.env.PUBLIC_URL + '/images/technology/background-technology-desktop.jpg'
        app.style.backgroundImage = "url(" + url + ")"

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id="technology" className="w-100">
            <div className="tech-header">
                <label className="tech-header-h1" > <span style={{ color: "#D0D6F9", letterSpacing: '4.73' }}>   04  </span> &nbsp; &nbsp;<span>SPACE LAUNCH 101</span> </label>
            </div>

            <div className="main-section">
                <div className="technology-content1">
                    <div className="content-section1">

                        <div className="tech-content w-100">
                            <div className="tech-content1">
                                <ul className="tech-nav-links">
                                    {techData.map((data, key) =>
                                        <li className={(key === 0) ? "tech-nav-link techActive" : "tech-nav-link"} key={key} onClick={(e) => refreshData(e, data)}> {key + 1} </li>

                                    )}

                                </ul>
                            </div>
                            <div className="tech-content2">
                                THE TERMINOLOGY...
                                <div className="tech-name">
                                    {techName.toUpperCase()}

                                </div>
                                <div className="tech-desc">
                                    {techDesc}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technology-content2">
                    <img src={process.env.PUBLIC_URL + techImagePortrait} className="d-block" alt="..." id="tech-img" height="400px" width="385px" />
                </div>
            </div>
        </div>
    )
}

export default Technology