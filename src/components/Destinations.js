import React from 'react'
import { useState, useEffect } from 'react'
import './Destinations.css'



const Destinations = () => {

  const [destData, setDestData] = useState([])
  const [destName, setDestName] = useState("")
  const [description, setDescription] = useState("")
  const [distance, setDistance] = useState(0)
  const [travel, setTravel] = useState(0)
  const [imgPath, setImage] = useState("")


  const changePicture = (x) => {
    if (x.matches && window.location.pathname === '/destination') { // If media query matches


      let app = document.getElementsByClassName("App")[0];
      let url = process.env.PUBLIC_URL + '/images/destination/background-destination-tablet.jpg'
      app.style.backgroundImage = "url(" + url + ")"
    }

  }
  const changePictureToPortrait = (x) => {
    if (x.matches && window.location.pathname === '/destination') {

      let app = document.getElementsByClassName("App")[0];
      let url = process.env.PUBLIC_URL + '/images/destination/background-destination-desktop.jpg'
      app.style.backgroundImage = "url(" + url + ")"


    }
  }





  useEffect(() => {
    const data = require('../data.json')

    setDestData(data.destinations)
    setDestName(data.destinations[0].name.toUpperCase())
    setDescription(data.destinations[0].description)
    setDistance(data.destinations[0].distance)
    setTravel(data.destinations[0].travel)
    setImage(data.destinations[0].images.png)




    let x = window.matchMedia("(max-width: 992px)");
    x.addEventListener("change", changePicture)

    let y = window.matchMedia("(min-width: 992px)");
    y.addEventListener("change", changePictureToPortrait)
    let app = document.getElementsByClassName("App")[0];
    let url = process.env.PUBLIC_URL + '/images/destination/background-destination-desktop.jpg'
    app.style.backgroundImage = "url(" + url + ")"

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeActiveState = (event, name) => {
    const links = document.getElementsByClassName('dest-links')
    for (let link of links) {
      link.classList.remove('dest-active')
    }
    event.target.classList.add("dest-active")

    //changing content
    const currentData = destData.find((data) => data.name === name)
    setDestName(currentData.name.toUpperCase())
    setDescription(currentData.description)
    setDistance(currentData.distance)
    setTravel(currentData.travel)
    setImage(currentData.images.png)
  }

  return (
    <div className='w-100 destinations-section container'>
      <div className='row w-100'>
        <div className="col-lg-6 destinations-section1 d-flex flex-column pt-5">
          <label id="dest-header-h1" > <span style={{ color: "#D0D6F9", letterSpacing: '4.73' }}>   01  </span> &nbsp; &nbsp;<span>PICK YOUR DESTINATION</span> </label>

          <img src={process.env.PUBLIC_URL + imgPath} alt="No Img Available" width="400px" height="400px" className='fluid mt-5' id="dest-img"></img>
        </div>
        <div className="col-lg-6 destinations-section2 h-100 mt-5">
          <div id="destination-contents" className='w-100 h-100 pt-5 d-flex flex-column'>
            <div id="destination-menu">
              <ul id="destinations-nav">

                {destData.map((data, key) =>

                  <li className={(key === 0) ? "dest-links dest-active" : "dest-links"} onClick={(e) => changeActiveState(e, data.name)} key={key}>{data.name.toUpperCase()}</li>
                )}
              </ul>

            </div>

            <label id="dest-name"> {destName}</label>
            <p id="dest-para">
              {description}
            </p>
            <hr style={{ width: "80%" }} />

            <div id="travel-details" className="row w-100">
              <div className="col-6">
                <label className="travel-header"> AVG. DISTANCE</label>
              </div>
              <div className="col-6">
                <label className="travel-header"> EST. TRAVEL TIME</label>
              </div>
              <div className="col-6">
                <label className="travel-distance"> {distance}</label>
              </div>
              <div className="col-6">
                <label className="travel-distance"> {travel}</label>
              </div>

            </div>







          </div>

        </div>
      </div>
    </div >
  )
}

export default Destinations