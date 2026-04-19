import { useState } from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import './resume.scss';

const ResumePage = () => {
    const [activeTab, setActiveTab] = useState('about');

    const certifications = [
        { name: "Your Certification 1", issuer: "Issuer Name", year: "Year", link: "#" },
        { name: "Your Certification 2", issuer: "Issuer Name", year: "Year", link: "#" },
        { name: "Your Certification 3", issuer: "Issuer Name", year: "Year", link: "#" },
    ];

    const experience = [
        {
            company: "Company Name",
            position: "Your Job Title",
            duration: "Year - Year",
            location: "Location",
            description: "Brief description of your role and responsibilities."
        },
        {
            company: "Previous Company",
            position: "Previous Job Title",
            duration: "Year - Year",
            location: "Location",
            description: "Brief description of your previous role."
        },
    ];

    const education = [
        {
            institution: "University/School Name",
            degree: "Your Degree",
            duration: "Year - Year"
        },
    ];

    return (
        <section className='resume-section py-5' style={{ minHeight: "90vh" }}>
            <div className="container">
                <h2 className="text-white mb-5 text-center">Resume</h2>
                
                <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k || 'about')}>
                    <Row>
                        <Col md={3} className="mb-4">
                            <Nav variant="pills" className="flex-column gap-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="about" className={activeTab === 'about' ? 'active' : ''}>
                                        About
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="experience" className={activeTab === 'experience' ? 'active' : ''}>
                                        Experience
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="certifications" className={activeTab === 'certifications' ? 'active' : ''}>
                                        Certifications
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="education" className={activeTab === 'education' ? 'active' : ''}>
                                        Education
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="about">
                                    <div className="p-4 rounded" style={{ backgroundColor: "#232329" }}>
                                        <h3 className="text-accent mb-4">About Me</h3>
                                        <p style={{ color: "rgba(255,255,255,0.7)" }}>
                                            Write your professional summary here. Describe your experience, skills, and what you specialize in.
                                        </p>
                                        <div className="mt-4">
                                            <h5 className="text-white mb-3">Contact Information</h5>
                                            <ul className="list-unstyled" style={{ color: "rgba(255,255,255,0.7)" }}>
                                                <li className="mb-2">Email: your@email.com</li>
                                                <li className="mb-2">LinkedIn: linkedin.com/in/yourusername</li>
                                                <li className="mb-2">Location: Your City, Country</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="experience">
                                    <div className="p-4 rounded" style={{ backgroundColor: "#232329" }}>
                                        <h3 className="text-accent mb-4">Experience</h3>
                                        <div className="experience-list">
                                            {experience.map((exp, index) => (
                                                <div key={index} className="mb-4 p-3 rounded" style={{ backgroundColor: "#1c1c22" }}>
                                                    <h5 className="text-white">{exp.position}</h5>
                                                    <p className="text-accent mb-1">{exp.company}</p>
                                                    <p className="text-white-50 mb-2">{exp.duration} | {exp.location}</p>
                                                    <p style={{ color: "rgba(255,255,255,0.7)" }}>{exp.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="certifications">
                                    <div className="p-4 rounded" style={{ backgroundColor: "#232329" }}>
                                        <h3 className="text-accent mb-4">Certifications</h3>
                                        <div className="certifications-list">
                                            {certifications.map((cert, index) => (
                                                <div key={index} className="mb-3 p-3 rounded" style={{ backgroundColor: "#1c1c22" }}>
                                                    {cert.link ? (
                                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                            <h6 className="text-white mb-1" style={{ cursor: "pointer" }}>{cert.name} ↗</h6>
                                                        </a>
                                                    ) : (
                                                        <h6 className="text-white mb-1">{cert.name}</h6>
                                                    )}
                                                    <p className="text-accent mb-1">{cert.issuer}</p>
                                                    <p className="text-white-50 mb-0">{cert.year}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="education">
                                    <div className="p-4 rounded" style={{ backgroundColor: "#232329" }}>
                                        <h3 className="text-accent mb-4">Education</h3>
                                        {education.map((edu, index) => (
                                            <div key={index} className="mb-3 p-3 rounded" style={{ backgroundColor: "#1c1c22" }}>
                                                <h5 className="text-white">{edu.degree}</h5>
                                                <p className="text-accent">{edu.institution}</p>
                                                <p className="text-white-50">{edu.duration}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </section>
    )
}

export default ResumePage