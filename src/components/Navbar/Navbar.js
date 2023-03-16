import React from 'react';
import styles from './navbar.css'
import logo from '../../assets/png.png';
import { CgLogIn } from 'react-icons/cg';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar justify-end background-black fixed z-10">
            <div className="navbar-start">
                <div className="dropdown md:bg-black md:text-white">
                    <label tabIndex={0} className="btn btn-glass lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
                        <li ><Link to='/home' className=' uppercase'>HOME</Link></li>
                        <li><Link to='/advertisers' className=' uppercase'>Advertisers</Link></li>
                        <li><Link to='/advertisers' className=' uppercase'>Publishers</Link></li>
                    </ul>
                </div>
                <a className=" normal-case">
                    <div className='flex justify-center items-center  '>
                        <img className=' h-40 w-40 lg:h-80 lg:w-80 absolute lg:left-6 left-10 ' src={logo} alt="" />

                    </div>
                </a>
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li ><Link to='/home' className=' uppercase'>HOME</Link></li>
                        <li><Link to='/advertisers' className=' uppercase'>Advertisers</Link></li>
                        <li><Link to='/advertisers' className=' uppercase'>Publishers</Link></li>
                    </ul>
                </div>

                <a href="https://network.savespoints.com/register?for=2" target="_blank" className="btn btn-warning text-xs md:text-lg">Sign up</a>
                <a href="https://network.savespoints.com/" target="_blank" className="btn btn-success text-xs md:text-lg ml-2">Login</a>
                {/* <CgLogIn className='lg:w-20 lg:h-20 w-10 h-10 lg:p-4 p-2 text-warning' /> */}

            </div>
        </div>
    );
};

export default Navbar;