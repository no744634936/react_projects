import React from 'react'
import "./Navbar.scss"
import logo from "../../logo.png"
export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="city tours logo"/>
                <ul className="navlinks">
                    <li><a href="/" className="navlink">home</a></li>
                    <li><a href="/" className="navlink">about</a></li>
                    <li><a href="/" className="navlink">tour</a></li>
                </ul>
            </nav>
        </div>
    )
}
