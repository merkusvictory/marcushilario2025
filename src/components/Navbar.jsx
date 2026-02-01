import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

const Navbar = ({ isCollapsed, isMobile, toggleCollapse }) => {

    return (
        <div className={`navbar ${isCollapsed ? 'collapsed' : ''}`} >
            <NavLink to="/" onClick={toggleCollapse}>
                {isMobile ?
                    <button className="collapse-button navbar-title" onClick={toggleCollapse}>
                        <div></div>
                        <div></div>
                    </button>
                    :
                    <h1 className="navbar-title">MARCUS HILARIO</h1>
                }
            </NavLink>
            <ul className="navbar-page-links">
                <li>ABOUT</li>
                <li>
                    <NavLink to="/resume" onClick={toggleCollapse}>RESUME</NavLink>
                </li>
                <li>BLOG</li>
            </ul>
            <div className="divider" />
            <div className="navbar-projects">
                <div>
                    <h2 className="navbar-subtitle">SOFTWARE</h2>
                    <ul className="navbar-project-links">
                        <li>
                            <NavLink to="/blobtopia" onClick={toggleCollapse}>Blobtopia</NavLink>
                        </li>
                        <li>
                            <NavLink to="/bookstore" onClick={toggleCollapse}>Online Bookstore IMS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/awkwardcow" onClick={toggleCollapse}>Awkward Cow</NavLink>
                        </li>
                        <li>
                            <NavLink to="/library" onClick={toggleCollapse}>LIBRA-RY</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sniper" onClick={toggleCollapse}>Sniper Bot</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="navbar-subtitle">HARDWARE</h2>
                    <ul className="navbar-project-links">
                        <li>
                            <NavLink to="/marble" onClick={toggleCollapse}>Marble Staircase</NavLink>
                        </li>
                        <li>
                            <NavLink to="/heartledr" onClick={toggleCollapse}>Heart LEDR</NavLink>
                        </li>
                        <li>
                            <NavLink to="/steampunch" onClick={toggleCollapse}>SteamPunch</NavLink>
                        </li>
                        <li>
                            <NavLink to="/vex" onClick={toggleCollapse}>VEX Robotics</NavLink>
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