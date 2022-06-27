
import "./Header.scss"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <div className="hdr">
                <Navbar.Brand href="">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#Information">About us</Nav.Link>
                    <Nav.Link href="#Rules">Rules &amp; Format</Nav.Link>
                    <Nav.Link href="#Register">Register</Nav.Link>
                    <Nav.Link href="#Follow">Follow Us</Nav.Link>

                </Nav>
            </div>
        </Navbar>

    )
}

export default Header