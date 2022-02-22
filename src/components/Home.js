import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './Home.css';



const Home = () => {
    let navigate = useNavigate()
    const changePicture = (x) => {
        if (x.matches && window.location.pathname === '/home') { // If media query matches


            let app = document.getElementsByClassName("App")[0];
            let url = process.env.PUBLIC_URL + '/images/home/background-home-tablet.jpg'
            app.style.backgroundImage = "url(" + url + ")"
        }

    }
    const changePictureToPortrait = (x) => {
        if (x.matches && window.location.pathname === '/home') {

            let app = document.getElementsByClassName("App")[0];
            let url = process.env.PUBLIC_URL + '/images/home/background-home-desktop.jpg'
            app.style.backgroundImage = "url(" + url + ")"

        }
    }



    useEffect(() => {

        let x = window.matchMedia("(max-width: 992px)");
        x.addEventListener("change", changePicture)

        let y = window.matchMedia("(min-width: 992px)");
        y.addEventListener("change", changePictureToPortrait)
        let app = document.getElementsByClassName("App")[0];
        let url = process.env.PUBLIC_URL + '/images/home/background-home-desktop.jpg'
        app.style.backgroundImage = "url(" + url + ")"


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    return (
        <div className='w-100 home-section container'>
            <div className='row w-100'>
                <div className='col-lg-6 d-flex flex-column home-section-1'>
                    <label id="label-h5"> SO, YOU WANT TO TRAVEL TO </label>
                    <label id="label-h1"> SPACE</label>
                    <p id="home-sub-heading">
                        Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax becuse we'll give you a truly out of the this world experience!
                    </p>
                </div>
                <div className="col-lg-6 home-section-2 mt-5">
                    <Link to="/destinations" id="explore" onClick={(event) => {
                        event.preventDefault()
                        const links = document.getElementsByClassName('Navbar__Link')
                        for (let link of links) {
                            console.log(link.innerText)
                            if (link.innerText.toLowerCase().includes("destination")) {

                                link.classList.add('active')
                            }
                            else {
                                link.classList.remove('active')
                            }
                        }
                        navigate('/destinations')

                    }}> EXPLORE</Link>
                </div>

            </div>
        </div>
    )
}

export default Home