import { useState, useEffect } from "react"

const Navbar = () => {

    return (
        <div className="navbar">
            <h1 className="navbar-title">MARCUS HILARIO</h1>
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
                        <li>Blobtopia</li>
                        <li>Online Bookstore IMS</li>
                        <li>Awkward Cow</li>
                        <li>LIBRA-RY</li>
                    </ul>
                </div>
                <div>
                    <h2 className="navbar-subtitle">HARDWARE</h2>
                    <ul className="navbar-project-links">
                        <li>Heart LED Project</li>
                        <li>SteamPunch</li>
                        <li>VEX Robotics</li>
                    </ul>
                </div>
                <div>
                    <h2 className="navbar-subtitle">CONTACT</h2>
                    <ul className="navbar-project-links">
                        <li>Email</li>
                        <li>LinkedIn</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar