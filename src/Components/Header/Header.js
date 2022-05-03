import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid'
import CustomLink from './NavLinks';

const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div>
            <nav className='bg-cyan-50'>
                <div className="flex justify-between container w-5/6 mx-auto">
                    <div>
                        <Link to='/'>
                            <img className='w-5/6' src="https://i.ibb.co/wr7bmcH/Watch-world.png" alt="Watch-world" border="0" />
                        </Link>
                    </div>
                    <div className={`md:flex align-middle w-10/12 bg-cyan-50 gap-4 text-base mt-4 font-medium justify-end absolute md:static ${menu ? 'top-12 p-4' : 'top-[-120px]'}`}>
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/reviews">Inventory</CustomLink>
                        <CustomLink to="/blogs">Blogs</CustomLink>
                        <CustomLink to="/login">Login</CustomLink>
                    </div>
                    <div onClick={() => setMenu(!menu)} className="w-8 h-7 mt-4 md:hidden text-cyan-500">
                        {menu ? <XIcon /> : <MenuAlt2Icon></MenuAlt2Icon>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;