import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../actions';

function Header() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const userSignOut = () =>  {
        dispatch(signOut());
    }

    const renderNonLoggedIn = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to="/signin" className="nav-link">Sign In</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                </li>
            </Nav>);
    }

    const renderLoggedIn = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to='/signin' onClick={userSignOut} className="nav-link">Sign out</NavLink>
                </li>
            </Nav>
        )
    }

    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={ {zIndex: 1} } >
                <Container fluid>
                    <Link to="/" className="navbar-brand">Admin Dashboard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        {auth.authenticate ? renderLoggedIn() : renderNonLoggedIn()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;