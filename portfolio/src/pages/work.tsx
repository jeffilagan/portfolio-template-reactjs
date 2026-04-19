import { Row, Col } from 'react-bootstrap';
import './work.scss';

const WorkPage = () => {
    const projects = [
        {
            title: "Project Name 1",
            description: "Brief description of your project and the technologies used.",
            technologies: ["Tech 1", "Tech 2", "Tech 3"],
            link: "https://github.com/yourusername/project1"
        },
        {
            title: "Project Name 2",
            description: "Brief description of your project and the technologies used.",
            technologies: ["Tech 1", "Tech 2", "Tech 3"],
            link: "https://github.com/yourusername/project2"
        },
        {
            title: "Project Name 3",
            description: "Brief description of your project and the technologies used.",
            technologies: ["Tech 1", "Tech 2", "Tech 3"],
            link: "#"
        }
    ];

    return (
        <section className='work-section py-5' style={{ minHeight: "90vh" }}>
            <div className="container">
                <h2 className="text-white mb-2 text-center">Work</h2>
                <p className="text-white-50 text-center mb-5">Projects I've worked on</p>
                
                <Row>
                    {projects.map((project, index) => (
                        <Col md={6} lg={6} className="mb-4" key={index}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                <div className="project-card p-4 h-100 rounded" 
                                     style={{ 
                                        backgroundColor: "#232329",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease"
                                    }}>
                                    <h4 className="text-white mb-3">{project.title}</h4>
                                    <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "15px" }}>{project.description}</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 rounded" style={{ backgroundColor: "#1c1c22", color: "#00ff99", fontSize: "0.875rem" }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </Col>
                    ))}
                </Row>
            </div>

            <style>{`
                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0, 255, 153, 0.15);
                }
            `}</style>
        </section>
    )
}

export default WorkPage