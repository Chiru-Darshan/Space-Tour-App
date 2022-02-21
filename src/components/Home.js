import React from 'react'
import './Home.css';



const Home = () => {
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
                    <button id="explore">EXPLORE</button>
                </div>

            </div>
        </div>
    )
}

export default Home