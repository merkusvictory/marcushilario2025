import about_1 from "../assets/images/about_1.png"
import about_2 from "../assets/images/about_2.png"
import about_3 from "../assets/images/about_3.png"

const About = () => {
    return (
        <div className="project-page about">
            <h1>ABOUT</h1>
            <p>I’m a New York based (and occasionally Philippines based) software developer currently pursuing my bachelor’s degree in Computer Science.</p>
            <img draggable="false" src={about_1} style={{height: "auto", maxWidth: "600px", width: "100%"}} alt="about_1"/>
            <p>Over the past three years I’ve been navigating the intersection of full-stack systems, robotics, and graphic design. I’ve helped build social media platforms, programmed world competition robots, and ran robotics state-leve competitions and university-level hackathons.</p>
            <img draggable="false" src={about_2} alt="about_2"/>
            <p>In my free time, I like to explore hidden study spaces around the city and build silly Discord bots.</p>
            <img draggable="false" src={about_3} style={{height: "auto", maxWidth: "600px", width: "100%"}} alt="about_3"/>
            <p>I’m always trying new things, so by the time you’re reading this there’s probably more to talk about, but thanks for stopping by!</p>
        </div>
    )
}

export default About