import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard';

const Home = () => {

    const skills = [
        { name: "Python", img: "src/assets/images/python.svg", color: "#e1ecda" },
        { name: "Java", img: "src/assets/images/java.svg", color: "#e8dcd3" },
        { name: "JavaScript", img: "src/assets/images/javascript.svg", color: "#fff4b3" },
        { name: "C/C++", img: "src/assets/images/cpp.svg", color: "#cfe0f3" },
        { name: "SQL", img: "src/assets/images/sql.svg", color: "#d2e4f5" },
        { name: "React", img: "src/assets/images/react.svg", color: "#c9f1f6" },
        { name: "Vite", img: "src/assets/images/vite.svg", color: "#e6d6fa" },
        { name: "Node", img: "src/assets/images/node.svg", color: "#d4ead7" },
        { name: "Arduino", img: "src/assets/images/arduino.svg", color: "#c4ebeb" },
        { name: "PostgreSQL", img: "src/assets/images/postgresql.svg", color: "#d1dceb" },
        { name: "Firebase", img: "src/assets/images/firebase.svg", color: "#ffeeb8" },
        { name: "Supabase", img: "src/assets/images/supabase.svg", color: "#c6ebdc" },
        { name: "Git", img: "src/assets/images/git.svg", color: "#f8d1c6" },
    ];

    const contacts = [
        { name: "Email", img: "src/assets/images/gmail.svg", link: "mailto:mvhilario23@gmail.com", color: "#fde2d8" },
        { name: "LinkedIn", img: "src/assets/images/linkedin.svg", link: "https://www.linkedin.com/in/marcus-hilario/", color: "#d1e3f4" },
        { name: "Github", img: "src/assets/images/github.svg", link: "https://www.github.com/merkusvictory", color: "#e2e2e2" }
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
                    link="/blobtopia"
                />
                <ProjectCard
                    title="SteamPunch"
                    description="motion-controlled platformer fighting game"
                    image="src/assets/projects/steampunch-thumbnail.png"
                    color="#B08968"
                    link="/steampunch"
                />
                <ProjectCard
                    title="LIBRA-RY"
                    description="file management for law firms"
                    image="src/assets/projects/library-thumbnail.png"
                    color="#75befeff"
                    link="/library"
                />
                <ProjectCard
                    title="Online Bookstore IMS"
                    description="inventory management system for books"
                    image="src/assets/projects/bookstoreims-thumbnail.png"
                    color="#c1b379ff"
                    link="/bookstore"
                />
                <ProjectCard
                    title="Heart LEDR"
                    description="glowing no matter the distance"
                    image="src/assets/projects/heartledr-thumbnail.jpg"
                    color="#ff5d54ff"
                    link="/heartledr"
                />
                <ProjectCard
                    title="VEX Robotics"
                    description="competition robots for world domination"
                    image="src/assets/projects/vexrobotics-thumbnail.jpg"
                    color="#acaca3ff"
                    link="/vex"
                />
                <ProjectCard
                    title="Awkward Cow"
                    description="socially ineptly taking the milk back"
                    image="src/assets/projects/awkwardcow-thumbnail.png"
                    color="#ffc5d3"
                    link="/awkwardcow"
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