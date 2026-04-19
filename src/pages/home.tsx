import { useState, useEffect } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin, FaEnvelope, FaAws, FaDocker, FaToolbox, FaPython } from "react-icons/fa";
import { SiKubernetes, SiReact, SiTerraform, SiIstio } from "react-icons/si";

const skills = [
    { icon: <SiKubernetes style={{ fontSize: "32px" }} />, name: "Skill 1" },
    { icon: <FaAws style={{ fontSize: "32px" }} />, name: "Skill 2" },
    { icon: <SiTerraform style={{ fontSize: "32px" }} />, name: "Skill 3" },
    { icon: <FaDocker style={{ fontSize: "32px" }} />, name: "Skill 4" },
    { icon: <SiIstio style={{ fontSize: "32px" }} />, name: "Skill 5" },
    { icon: <FaPython style={{ fontSize: "32px" }} />, name: "Skill 6" },
    { icon: <SiReact style={{ fontSize: "32px" }} />, name: "Skill 7" },
    { icon: <FaToolbox style={{ fontSize: "32px" }} />, name: "Skill 8" },
];

const icons = [
    { icon: <FaAws size={60} />, label: "Tech 1" },
    { icon: <SiKubernetes size={60} />, label: "Tech 2" },
    { icon: <SiReact size={60} />, label: "Tech 3" },
];

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % icons.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className='home-section' style={{ 
            position: "relative", 
            padding: "80px 0",
            minHeight: "90vh",
            display: "flex",
            alignItems: "center"
        }}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={7} className="text-center text-lg-start">
                        <h1 style={{ 
                            fontSize: "clamp(2rem, 4vw, 3rem)", 
                            fontWeight: "800",
                            lineHeight: "1.1",
                            marginBottom: "15px"
                        }}>
                            <span style={{ color: "rgba(255,255,255,0.6)" }}>Hi, I'm </span>
                            <br />
                            <span style={{ color: "#00ff99" }}>Your Name</span>
                        </h1>
                        <h2 style={{ 
                            fontSize: "clamp(1rem, 1.5vw, 1.2rem)", 
                            color: "#fff",
                            fontWeight: "500",
                            marginBottom: "12px"
                        }}>
                            Your Title
                        </h2>
                        <p style={{ 
                            color: "rgba(255,255,255,0.6)", 
                            fontSize: "0.95rem",
                            maxWidth: "500px",
                            marginBottom: "25px",
                            lineHeight: "1.7"
                        }}>
                            Your professional summary goes here. Describe your experience, skills, and what you do.
                        </p>
                        
                        <div className='d-flex gap-4 justify-content-center justify-content-lg-start mb-4'>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                               style={{ color: "#fff", fontSize: "1.5rem", transition: "color 0.3s" }}
                               className="social-icon">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
                               style={{ color: "#fff", fontSize: "1.5rem", transition: "color 0.3s" }}
                               className="social-icon">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:your@email.com" 
                               style={{ color: "#fff", fontSize: "1.5rem", transition: "color 0.3s" }}
                               className="social-icon">
                                <FaEnvelope />
                            </a>
                        </div>
                    </Col>
                    
                    <Col lg={5} className='d-none d-lg-block text-center'>
                        <Tilt>
                            <div style={{
                                position: "relative",
                                display: "inline-block"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "280px",
                                    height: "280px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #00ff99 0%, #00e187 100%)",
                                    opacity: "0.15",
                                    filter: "blur(40px)"
                                }}></div>
                                <div style={{
                                    width: "280px",
                                    height: "280px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #232329 0%, #1c1c22 100%)",
                                    border: "2px solid #00ff99",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    transition: "all 0.5s ease"
                                }}>
                                    <div key={currentIndex} className="icon-fade" style={{ color: "#00ff99" }}>
                                        {icons[currentIndex].icon}
                                    </div>
                                    <span style={{ color: "#00ff99", marginTop: "12px", fontSize: "1rem", fontWeight: "600" }}>
                                        {icons[currentIndex].label}
                                    </span>
                                </div>
                            </div>
                        </Tilt>
                    </Col>
                </Row>

                <Row className="mt-4 pt-4">
                    <Col className="text-center">
                        <div style={{ 
                            display: "flex", 
                            justifyContent: "center", 
                            gap: "30px",
                            flexWrap: "wrap"
                        }}>
                            <div>
                                <h3 style={{ color: "#00ff99", fontSize: "2rem", fontWeight: "700" }}>X+</h3>
                                <p style={{ color: "rgba(255,255,255,0.6)", margin: 0, fontSize: "0.85rem" }}>Years Experience</p>
                            </div>
                            <div>
                                <h3 style={{ color: "#00ff99", fontSize: "2rem", fontWeight: "700" }}>Cert</h3>
                                <p style={{ color: "rgba(255,255,255,0.6)", margin: 0, fontSize: "0.85rem" }}>Certified</p>
                            </div>
                            <div>
                                <h3 style={{ color: "#00ff99", fontSize: "2rem", fontWeight: "700" }}>X+</h3>
                                <p style={{ color: "rgba(255,255,255,0.6)", margin: 0, fontSize: "0.85rem" }}>Certifications</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xs={12} className="text-center">
                        <h3 style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", marginBottom: "20px" }}>
                            Skills
                        </h3>
                    </Col>
                    <Col xs={12}>
                        <div className="skills-marquee" style={{ overflow: "hidden" }}>
                            <div style={{ 
                                display: "flex", 
                                gap: "20px",
                                animation: "scroll 20s linear infinite"
                            }}>
                                {[...skills, ...skills].map((skill, index) => (
                                    <div key={index} style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        backgroundColor: "#232329",
                                        padding: "14px 24px",
                                        borderRadius: "10px",
                                        minWidth: "160px",
                                        color: "#00ff99"
                                    }}>
                                        <div style={{ width: "32px", textAlign: "center" }}>{skill.icon}</div>
                                        <span style={{ color: "#fff", fontSize: "0.95rem", fontWeight: "500" }}>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5 pt-3">
                    <Col xs={12} className="text-center">
                        <h3 style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", marginBottom: "20px" }}>
                            Days I <span style={{ color: "#00ff99" }}>Code</span>
                        </h3>
                        <div className="d-flex justify-content-center">
                            <a 
                                href="https://github.com/yourusername" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                    color: "#00ff99", 
                                    textDecoration: "none",
                                    padding: "20px 40px",
                                    border: "2px solid #00ff99",
                                    borderRadius: "10px",
                                    display: "inline-block"
                                }}
                            >
                                View GitHub Profile →
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <style>{`
                .social-icon:hover {
                    color: #00ff99 !important;
                    transform: translateY(-3px);
                    display: inline-block;
                }
                .icon-fade {
                    animation: fadeIn 0.5s ease-in-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    )
}

export default HomePage