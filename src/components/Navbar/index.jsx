import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'

function MyNavbar() {
    return (
        <Container className="nav-container">
            <Navbar fixed="top" expand="md" className='customNav'>
                <Navbar.Brand href="/">
                    <img id='logo' src="./src/assets/images/lorna-logo-dark.png" /> {' '}
                    The Nyitrai's</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-right">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default MyNavbar;