import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Books-Inventory</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#banner">Banner</Nav.Link>
                            <Nav.Link href="home#items">Items</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="blogs" >Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about" >About</Nav.Link>
                            {user ?
                                <button onClick={handleSignOut}>sign out</button>
                                :

                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;