import React from 'react'
import './Technology.css'
const Technology = () => {
    return (
        <div id="technology" class="w-100">
            <div id="technology-main" class="w-100" >
                <div className="content-section1 w-50">
                    <div className="tech-header">
                        <label className="tech-header-h1" > <span style={{ color: "#D0D6F9", letterSpacing: '4.73' }}>   04  </span> &nbsp; &nbsp;<span>SPACE LAUNCH 101</span> </label>
                    </div>
                    <div className="tech-content w-100">
                        <div className="tech-content1">
                            <ul className="tech-nav-links">
                                <li className="tech-nav-link"> 1 </li>
                                <li className="tech-nav-link"> 2 </li>
                                <li className="tech-nav-link"> 3 </li>
                            </ul>
                        </div>
                        <div className="tech-content2">
                            THE TERMINOLOGY...
                            <div className="tech-name">
                                LAUNCH VEHICLE

                            </div>
                            <div className="tech-desc">
                                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-section2 w-50">

                    <img src={process.env.PUBLIC_URL + "/images/technology/image-space-capsule-portrait.jpg"} class="d-block" alt="..." id="tech-img" height="500px" width="425px" />


                </div>
            </div>
        </div>
    )
}

export default Technology