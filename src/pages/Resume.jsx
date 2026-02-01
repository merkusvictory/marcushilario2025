import resumePDF from "../assets/projects/resume_2-1-26.pdf"

const Resume = () => {
    return (
        <div className="project-page resume">
            <h1>RESUME</h1>
            <p>Last updated February 1, 2026</p>
            <iframe
                src={resumePDF}
                width="100%"
                height="800px"
                title="Resume"
                style={{ border: "none" }}
            />
        </div>
    )
}

export default Resume