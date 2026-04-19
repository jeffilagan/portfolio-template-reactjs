import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { useCurrentApp } from '../context/app.context';

type ThemeContextType = "dark" | "light";

function AppHeader() {
    const { theme, setTheme } = useCurrentApp();

    const handleMode = (mode: ThemeContextType) => {
        localStorage.setItem("theme", mode);
        document.documentElement.setAttribute('data-bs-theme', mode);
        setTheme(mode);
    }

    return (
        <Navbar
            data-bs-theme={theme}
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
                    <Nav className="ms-auto">
                        <div className='nav-link' style={{ cursor: "pointer", color: "#fff" }}>
                            {theme === "light" ?
                                <MdOutlineLightMode
                                    onClick={() => handleMode("dark")}
                                    style={{ fontSize: 20 }}
                                />
                                :
                                <MdNightlight
                                    onClick={() => handleMode("light")}
                                    style={{ fontSize: 20 }}
                                />
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader;