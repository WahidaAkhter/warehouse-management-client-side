import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    const navigate = useNavigate();

    const navigateInventory = event => {
        navigate('/manageInventory');
    };

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Books-Inventory</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#items">Items</Nav.Link>
                            <Nav.Link href="home#graph">Graph</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="blogs" >Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about" >About</Nav.Link>
                            {user ?
                                <>
                                    <button className='bg-primary text-dark border-none' onClick={handleSignOut}>Log out</button>
                                     <Link to='/manageInventory' className='text-dark text-decoration-none'
                                        onClick={navigateInventory}>
                                        <h5>My Items</h5>
                                    </Link>

                                </>

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