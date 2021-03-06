import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from './Navlink';

const Header = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    const handleLogout = () => {
        signOut(auth)
    }

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
                            <CustomLink className='text-decoration-none px-3 fs-5 fw-bold' to='/blogs'>Blogs</CustomLink>
                            {
                                user && <>
                                    <CustomLink className='text-decoration-none px-3 fs-5 fw-bold' to='/manage'>Manage</CustomLink>
                                    <CustomLink className='text-decoration-none px-3 fs-5 fw-bold' to='/addItem'>Add Item</CustomLink>
                                    <CustomLink className='text-decoration-none px-3 fs-5 fw-bold' to='/myItem'>My Item</CustomLink>
                                </>
                            }
                        </Nav>


                        {
                            user ? <button className='btn btn-sm btn-info fw-bold' onClick={handleLogout}>Logout</button> : <CustomLink className='text-white btn btn-sm btn-info' to='/login'>Login</CustomLink>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;