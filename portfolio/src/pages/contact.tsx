import { Row, Col, Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './contact.scss';

const ContactPage = () => {
    return (
        <section className='contact-section py-5' style={{ minHeight: "90vh" }}>
            <div className="container">
                <h2 className="text-white mb-2 text-center">Contact</h2>
                <p className="text-white-50 text-center mb-5">Get in touch</p>
                
                <Row>
                    <Col md={6} className="mb-4">
                        <div className="contact-info p-4 rounded" style={{ backgroundColor: "#232329" }}>
                            <h4 className="text-white mb-4">Let's Connect</h4>
                            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "30px" }}>
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                            
                            <div className="contact-items">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="contact-icon me-3">
                                        <FaEnvelope size={24} color="#00ff99" />
                                    </div>
                                    <div>
                                        <p className="text-white-50 mb-0">Email</p>
                                        <a href="mailto:jeffilagan10@gmail.com" className="text-white text-decoration-none">
                                            jeffilagan10@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="d-flex align-items-center mb-4">
                                    <div className="contact-icon me-3">
                                        <FaLinkedin size={24} color="#00ff99" />
                                    </div>
                                    <div>
                                        <p className="text-white-50 mb-0">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/jeffrey-ilagan" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                                            linkedin.com/in/jeffrey-ilagan
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="d-flex align-items-center mb-4">
                                    <div className="contact-icon me-3">
                                        <FaMapMarkerAlt size={24} color="#00ff99" />
                                    </div>
                                    <div>
                                        <p className="text-white-50 mb-0">Location</p>
                                        <p className="text-white mb-0">Makati, National Capital Region, Philippines</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="social-links mt-4">
                                <a href="https://github.com/jeffilagan" target="_blank" rel="noopener noreferrer" className="text-white me-4 fs-4">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/jeffrey-ilagan" target="_blank" rel="noopener noreferrer" className="text-white me-4 fs-4">
                                    <FaLinkedin />
                                </a>
                                <a href="mailto:jeffilagan10@gmail.com" className="text-white fs-4">
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </Col>
                    
                    <Col md={6} className="mb-4">
                        <div className="contact-form p-4 rounded" style={{ backgroundColor: "#232329" }}>
                            <h4 className="text-white mb-4">Send a Message</h4>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white">Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your name" style={{ backgroundColor: "#1c1c22", border: "1px solid #3d3d45", color: "#fff" }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white">Email</Form.Label>
                                    <Form.Control type="email" placeholder="your.email@example.com" style={{ backgroundColor: "#1c1c22", border: "1px solid #3d3d45", color: "#fff" }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white">Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Your message..." style={{ backgroundColor: "#1c1c22", border: "1px solid #3d3d45", color: "#fff" }} />
                                </Form.Group>
                                <Button type="submit" style={{ backgroundColor: "#00ff99", border: "none", color: "#1c1c22", fontWeight: "600", padding: "10px 30px" }}>
                                    Send Message
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default ContactPage