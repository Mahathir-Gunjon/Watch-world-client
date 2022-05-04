import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from './Navlink';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="light" variant="dark" className='py-0 px-3 fixed-top'>
                <Container>
                    <Navbar.Brand>
                        <img src="https://i.ibb.co/wr7bmcH/Watch-world.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle className='text-danger' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink className='text-decoration-none px-3 fs-6 fw-normal' to="/">Home</CustomLink>
                            <CustomLink className='text-decoration-none px-3 fs-6 fw-normal' to='/about'>About</CustomLink>
                            <CustomLink className='text-decoration-none px-3 fs-6 fw-normal' to='/blogs'>Blogs</CustomLink>
                            <CustomLink className='text-decoration-none px-3 fs-6 fw-normal' to='/checkout'>Checkout</CustomLink>
                            {/* {
                                user ? <button className='btn btn-sm btn-danger' onClick={handleLogout}>Logout</button> : <CustomLink className='text-white btn btn-sm btn-danger' to='/login'>Login</CustomLink>
                            } */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;