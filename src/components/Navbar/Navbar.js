import React from 'react';
import styles from './navbar.css'

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
                <a className="btn btn-ghost normal-case">
                    <div className='flex justify-center items-center  '>
                        <svg class="svg-icon mr-2 " viewBox="0 0 20 20">
                            <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
                        </svg>
                        <div className=''>
                            <h1 className=' text-start text-xs'>MEZBA</h1>
                            <h1 className='text-start text-warning border-t-2 border-white text-xs'>NETWORK</h1>
                        </div>
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