import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css'

function MyNavbar() {
    return (
        <>
            <Navbar fixed="top" expand="lg" className='customNav'>
                <Container>
                    <Navbar.Brand href="/">The Nyitrai's</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-right">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNavbar;