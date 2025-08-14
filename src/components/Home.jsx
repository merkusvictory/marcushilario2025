import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard';

import gmail from '../assets/images/gmail.svg';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';

import python from '../assets/images/python.svg';
import java from '../assets/images/java.svg';
import javascript from '../assets/images/javascript.svg';
import cpp from '../assets/images/cpp.svg';
import sql from '../assets/images/sql.svg';
import reactLogo from '../assets/images/react.svg';
import vite from '../assets/images/vite.svg';
import node from '../assets/images/node.svg';
import arduino from '../assets/images/arduino.svg';
import postgresql from '../assets/images/postgresql.svg';
import firebase from '../assets/images/firebase.svg';
import supabase from '../assets/images/supabase.svg';
import git from '../assets/images/git.svg';

import blobtopiaThumbnail from '../assets/projects/blobtopia-thumbnail.png';
import steampunchThumbnail from '../assets/projects/steampunch-thumbnail.png';
import libraryThumbnail from '../assets/projects/library-thumbnail.png';
import bookstoreimsThumbnail from '../assets/projects/bookstoreims-thumbnail.png';
import heartledrThumbnail from '../assets/projects/heartledr-thumbnail.jpg';
import vexroboticsThumbnail from '../assets/projects/vexrobotics-thumbnail.jpg';
import awkwardcowThumbnail from '../assets/projects/awkwardcow-thumbnail.png';

const Home = () => {

    const skills = [
        { name: "Python", img: python, color: "#f0e6ff" },
        { name: "Java", img: java, color: "#fff3e0" },
        { name: "JavaScript", img: javascript, color: "#fff9e6" },
        { name: "C/C++", img: cpp, color: "#e6f0ff" },
        { name: "SQL", img: sql, color: "#e6ffe6" },
        { name: "React", img: reactLogo, color: "#e6f9ff" },
        { name: "Vite", img: vite, color: "#f7e6ff" },
        { name: "Node", img: node, color: "#e6ffe6" },
        { name: "Arduino", img: arduino, color: "#e6f7ff" },
        { name: "PostgreSQL", img: postgresql, color: "#e6ecff" },
        { name: "Firebase", img: firebase, color: "#fff5e6" },
        { name: "Supabase", img: supabase, color: "#e6fff2" },
        { name: "Git", img: git, color: "#fff0e6" },
    ];

    const contacts = [
        { name: "Email", img: gmail, link: "mailto:mvhilario23@gmail.com", color: "#fce8e6" }, // soft pastel red/pink
        { name: "LinkedIn", img: linkedin, link: "https://www.linkedin.com/in/marcus-hilario/", color: "#e6f3f9" }, // soft pastel blue
        { name: "Github", img: github, link: "https://www.github.com/merkusvictory", color: "#eaeaea" } // soft pastel gray
    ];

    return (
        <div className="home">
            <div className="home-divider">
                <p>README</p>
                <div className="divider"></div>
            </div>
            <div className="home-readme">
                <p>
                    I'm a developer finding ways to connect people through
                    tech. I've previously designed file management systems
                    at Libra Law and managed 50+ volunteers for a university robotics club.
                </p>
            </div>
            <div className="home-divider">
                <p>PROJECTS</p>
                <div className="divider"></div>
            </div>
            <div className="project-cards">
                <ProjectCard
                    title="blobtopia"
                    description="social media for blob-posting"
                    image="src/assets/projects/blobtopia-thumbnail.png"
                    color="#77dd77"
                    link={blobtopiaThumbnail}
                />
                <ProjectCard
                    title="SteamPunch"
                    description="motion-controlled platformer fighting game"
                    image="src/assets/projects/steampunch-thumbnail.png"
                    color="#B08968"
                    link={steampunchThumbnail}
                />
                <ProjectCard
                    title="LIBRA-RY"
                    description="file management for law firms"
                    image="src/assets/projects/library-thumbnail.png"
                    color="#75befeff"
                    link={libraryThumbnail}
                />
                <ProjectCard
                    title="Online Bookstore IMS"
                    description="inventory management system for books"
                    image="src/assets/projects/bookstoreims-thumbnail.png"
                    color="#c1b379ff"
                    link={bookstoreimsThumbnail}
                />
                <ProjectCard
                    title="Heart LEDR"
                    description="glowing no matter the distance"
                    image="src/assets/projects/heartledr-thumbnail.jpg"
                    color="#ff5d54ff"
                    link={heartledrThumbnail}
                />
                <ProjectCard
                    title="VEX Robotics"
                    description="competition robots for world domination"
                    image="src/assets/projects/vexrobotics-thumbnail.jpg"
                    color="#acaca3ff"
                    link={vexroboticsThumbnail}
                />
                <ProjectCard
                    title="Awkward Cow"
                    description="socially ineptly taking the milk back"
                    image="src/assets/projects/awkwardcow-thumbnail.png"
                    color="#ffc5d3"
                    link={awkwardcowThumbnail}
                />
            </div>
            <div className="home-divider">
                <p>TECHNOLOGIES</p>
                <div className="divider"></div>
            </div>
            <div className="technologies">
                {skills.map(skill =>
                    <div
                        key={skill.name}
                        style={{ '--hover-color': skill.color }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = skill.color}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <img className="technologies-img" draggable="false" src={skill.img} alt={skill.name} />
                    </div>
                )}
            </div>
            <div className="home-divider">
                <p>CONTACT</p>
                <div className="divider"></div>
            </div>
            <div className="contacts">
                {contacts.map(contact =>
                    <a href={contact.link} target="_blank">
                        <div
                            key={contact.name}
                            style={{ '--hover-color': contact.color }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = contact.color}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            <img className="contacts-img" draggable="false" src={contact.img} alt={contact.name} />
                        </div>
                    </a>
                )}
            </div>
        </div>
    )
}

export default Home;