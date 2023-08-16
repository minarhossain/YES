
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>CRUD Project</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="me-2 text-decoration-none text-light" to='/'> List</Link>
                    <Link className="me-2 text-decoration-none text-light" to='/create'>Create</Link>
                    <Link className="me-2 text-decoration-none text-light" to='/update'>Update</Link>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;