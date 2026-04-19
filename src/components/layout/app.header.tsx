import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function AppHeader() {
    return (
        <Navbar
            data-bs-theme="dark"
            expand="lg"
            className="bg-body-tertiary"
            style={{ zIndex: 1, fontWeight: "600", backgroundColor: "#1c1c22", borderBottom: "1px solid #2d2d35" }}
        >
            <Container>
                <Link className="navbar-brand" to="/">
                    <span className='brand-green'>
                        Portfolio
                    </span>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#3d3d45" }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/" style={{ color: "#fff" }}>Home</NavLink>
                        <NavLink className="nav-link" to="/services" style={{ color: "#fff" }}>Services</NavLink>
                        <NavLink className="nav-link" to="/resume" style={{ color: "#fff" }}>Resume</NavLink>
                        <NavLink className="nav-link" to="/work" style={{ color: "#fff" }}>Work</NavLink>
                        <NavLink className="nav-link" to="/contact" style={{ color: "#fff" }}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader;