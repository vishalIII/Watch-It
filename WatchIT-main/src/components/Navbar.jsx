import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Search from './Search';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className='p-4 fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
                <div className='container mx-auto flex justify-between items-center'>
                    <Link className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600' to="/">
                        WatchIT
                    </Link>
                    <div className='md:hidden flex items-center'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-blue-600 focus:outline-none mr-4'
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                    <ul className={`md:flex md:items-center md:gap-3 ${isOpen ? 'block' : 'hidden'} absolute md:static bg-white w-full md:w-auto left-0 md:left-auto top-16 md:top-auto`}>
                        <li className='md:mr-5'>
                            <Link className='block px-4 py-2 text-blue-600 font-medium focus:font-bold text-lg' to="/now-playing" onClick={() => setIsOpen(false)}>
                                Now Playing
                            </Link>
                        </li>
                        <li className='md:mr-5'>
                            <Link className='block px-4 py-2 text-blue-600 font-medium focus:font-bold text-lg' to="/popular" onClick={() => setIsOpen(false)}>
                                Popular
                            </Link>
                        </li>
                        <li className='md:mr-5'>
                            <Link className='block px-4 py-2 text-blue-600 font-medium focus:font-bold text-lg' to="/top-rated" onClick={() => setIsOpen(false)}>
                                Top Rated
                            </Link>
                        </li>
                        <li className='md:mr-5'>
                            <Link className='block px-4 py-2 text-blue-600 font-medium focus:font-bold text-lg' to="/upcoming" onClick={() => setIsOpen(false)}>
                                Upcoming
                            </Link>
                        </li>
                        <li className='block md:hidden w-full px-4 py-2'>
                            <Search />
                        </li>
                    </ul>
                    <div className='hidden md:block'>
                        <Search />
                    </div>
                </div>
            </nav>
            <hr />
            <Outlet />
        </>
    );
};

export default Navbar;
