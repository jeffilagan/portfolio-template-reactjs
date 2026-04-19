import { Row, Col } from 'react-bootstrap';
import './services.scss';

const ServicesPage = () => {
    const services = [
        {
            title: "Service 1",
            description: "Description of your service 1. Customize this to match your expertise.",
            icon: "☸️"
        },
        {
            title: "Service 2",
            description: "Description of your service 2. Customize this to match your expertise.",
            icon: "⚙️"
        },
        {
            title: "Service 3",
            description: "Description of your service 3. Customize this to match your expertise.",
            icon: "☁️"
        },
        {
            title: "Service 4",
            description: "Description of your service 4. Customize this to match your expertise.",
            icon: "🔗"
        },
        {
            title: "Service 5",
            description: "Description of your service 5. Customize this to match your expertise.",
            icon: "🔒"
        },
        {
            title: "Service 6",
            description: "Description of your service 6. Customize this to match your expertise.",
            icon: "🛠️"
        }
    ];

    return (
        <section className='services-section py-5' style={{ minHeight: "90vh" }}>
            <div className="container">
                <h2 className="text-white mb-2 text-center">Services</h2>
                <p className="text-white-50 text-center mb-5">What I can do for you</p>
                
                <Row>
                    {services.map((service, index) => (
                        <Col md={6} lg={4} className="mb-4" key={index}>
                            <div className="service-card p-4 h-100 rounded" style={{ backgroundColor: "#232329" }}>
                                <div className="service-icon mb-3" style={{ fontSize: "3rem" }}>
                                    {service.icon}
                                </div>
                                <h4 className="text-white mb-3">{service.title}</h4>
                                <p style={{ color: "rgba(255,255,255,0.7)" }}>{service.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    )
}

export default ServicesPage