import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";

function NavBar() {
    const [activeLink, setActiveLink] = useState ('home');
    const [scrolled, setScrolled] = useState(false);

    // function to determine if the user has scrolled.
    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled (true);
            } else {
                setScrolled (false);
                }
            }

        window.addEventListener("scroll", onScroll);

        // remove component from DOM
        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Nav
        className = {scrolled ? "scrolled" : ""}
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
    
        <Nav.Item>
            <Nav.Link href= "/about" eventKey="About Me" className= {activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink ('about')}>About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href= "/portfolio" eventKey="portfolio" className= {activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink ('portfolio')}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href= "/contact" eventKey="contact" className= {activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink ('portfolio')}> Contact </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href= "/resume" eventKey="resume" className= {activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink ('resume')}>Resume</Nav.Link>
        </Nav.Item>

    </Nav>
    );
}

export default NavBar;
