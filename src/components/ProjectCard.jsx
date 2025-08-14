import { useState } from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ title, description, link, image, color }) => {

    const [isHovered, setIsHovered] = useState(false);

    const baseStyle = {
        backgroundColor: "var(--background-color)"
    };

    const hoverStyle = {
        backgroundColor: color,
    };

    return (
        <NavLink to={link}>
            <div className="project-card"
                style={isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img draggable="false" src={image} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </NavLink>
    )
}

export default ProjectCard;