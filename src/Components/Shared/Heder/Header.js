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
                    <Navbar.Toggle className='text-info' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <CustomLink className='text-decoration-none px-3 fs-5 fw-bold' to="/">Home</CustomLink>
                            <CustomLink className='text-decoration-none px-3 fs-5 fw-bold' to="/inventory">Inventory</CustomLink>
                            <CustomLink className='text-decoration-none px-3 fs-5 fw-bold' to='/manage'>Manage</CustomLink>
                            <CustomLink className='text-decoration-none px-3 fs-5 fw-bold' to='/addItem'>Add Item</CustomLink>
                            <CustomLink className='text-decoration-none px-3 fs-5 fw-bold' to='/myItem'>My Item</CustomLink>
                            <CustomLink className='text-decoration-none px-3 fs-5 fw-bold' to='/blogs'>Blogs</CustomLink>
                        </Nav>
                        {/* {
                                user ? <button className='btn btn-sm btn-danger' onClick={handleLogout}>Logout</button> : <CustomLink className='text-white btn btn-sm btn-danger' to='/login'>Login</CustomLink>
                            } */}
                        <CustomLink className='text-decoration-none px-3 fs-5 fw-bold' to='/login'>Login</CustomLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;