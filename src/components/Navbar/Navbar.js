import React from 'react';
import styles from './navbar.css'
import logo from '../../assets/png.png';
const Navbar = () => {
    return (
        <div className="navbar justify-end background-black fixed z-10">
            <div className="navbar-start">
                <div className="dropdown md:bg-black md:text-white">
                    <label tabIndex={0} className="btn btn-glass lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
                        <li className=' uppercase'><a>Item 1</a></li>
                        <li className='uppercase'><a>Item 2</a></li>
                        <li className='uppercase'><a>Item 3</a></li>
                    </ul>
                </div>
                <a className=" normal-case">
                    <div className='flex justify-center items-center  '>
                        <img className='h-40 w-40 absolute lg:left-6 left-10' src={logo} alt="" />

                    </div>
                </a>
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className=' uppercase'><a>Home</a></li>
                        <li className='uppercase'><a>About</a></li>
                        <li className='uppercase'><a>Advertisers</a></li>
                        <li className='uppercase'><a>Publishers</a></li>
                        <li className='uppercase'><a>Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-warning text-xs md:text-lg">Publisher Login</a>
            </div>
        </div>
    );
};

export default Navbar;