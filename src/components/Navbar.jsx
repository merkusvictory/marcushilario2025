import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <div className="navbar">
            <NavLink to="/">
                <h1 className="navbar-title">MARCUS HILARIO</h1>
            </NavLink>
            <ul className="navbar-page-links">
                <li>ABOUT</li>
                <li>RESUME</li>
                <li>BLOG</li>
            </ul>
            <div className="divider" />
            <div className="navbar-projects">
                <div>
                    <h2 className="navbar-subtitle">SOFTWARE</h2>
                    <ul className="navbar-project-links">
                        <li>
                            <NavLink to="/blobtopia">Blobtopia</NavLink>
                        </li>
                        <li>
                            <NavLink to="/bookstore">Online Bookstore IMS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/awkwardcow">Awkward Cow</NavLink>
                        </li>
                        <li>
                            <NavLink to="/library">LIBRA-RY</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="navbar-subtitle">HARDWARE</h2>
                    <ul className="navbar-project-links">
                        <li>
                            <NavLink to="/heartledr">Heart LEDR</NavLink>
                        </li>
                        <li>
                            <NavLink to="/steampunch">SteamPunch</NavLink>
                        </li>
                        <li>
                            <NavLink to="/vex">VEX Robotics</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="navbar-subtitle">CONTACT</h2>
                    <ul className="navbar-project-links">
                        <li>
                            <a href="mailto:mvhilario23@gmail.com" target="_blank" rel="noopener noreferrer">
                                Email
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/marcus-hilario/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://www.github.com/merkusvictory" target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar