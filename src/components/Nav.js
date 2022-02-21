import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import $ from 'jquery'

import './Nav.css'


const Nav = () => {

    const linkStyles = {
        textDecoration: "none",
    }

    useEffect(() => {
        document.querySelector('.Navbar__Link-toggle')
            .addEventListener('click', classToggle);



        console.log('added event listener')
    }, [])

    const classToggle = () => {
        const navs = document.querySelectorAll('.Navbar__Items')

        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
        console.log("triggered")

    }

    const changeActiveState = (event) => {
        const links = document.getElementsByClassName('Navbar__Link')
        for (let link of links) {
            link.classList.remove('active')
        }
        event.target.classList.add("active")
    }
    return (
        <>

            <div className="Navbar w-100">
                <div className="Navbar__Link Navbar__Link-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
                </div>
                <div className="line">

                </div>
                <div className="Navbar__Link Navbar__Link-toggle">
                    <i className="fa fa-bars"></i>
                </div>

                <nav className="Navbar__Items Navbar__Items--right">


                    <Link to="/" style={linkStyles} className="Navbar__Link" onClick={changeActiveState}> <strong>00</strong> &nbsp; &nbsp; HOME</Link>
                    <Link to="/destinations" style={linkStyles} className="Navbar__Link" onClick={changeActiveState}> <strong>01</strong>  &nbsp; &nbsp; DESTINATION</Link>
                    <Link to="/crew" style={linkStyles} className="Navbar__Link" onClick={changeActiveState}> <strong>03</strong>  &nbsp; &nbsp; CREW</Link>
                    <Link to="/technology" style={linkStyles} className="Navbar__Link" onClick={changeActiveState}> <strong>04</strong> &nbsp; &nbsp;TECHNOLOGY</Link>


                </nav>
            </div>
        </>
    )
}

export default Nav