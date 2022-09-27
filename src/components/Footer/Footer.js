import React from 'react';
import styles from './footer.css'
import { FaTelegramPlane } from 'react-icons/fa';
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdLocationPin } from 'react-icons/md';
import { RiMessage3Fill } from 'react-icons/ri';
import { AiFillTwitterCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <div className=' relative '>
                <div className=' absolute newsletter-position newsletter-container  md:flex md:justify-center md:items-center'>
                    <div className=' newsletter-bg rounded-3xl newsletter-sm-layout bg-yellow-400 md:flex md:justify-start md:items-center'>
                        <div className='newsletter-text-container md:flex md:flex-col md:items-start md:justify-center md:p-7'>
                            <h4 className=' font-bold capitalize  text-lg md:text-2xl'> Subscribe Newsletter</h4>
                            <p className=' text-xs  md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className=' md:flex md:justify-center md:items-start newsletter-input-sm-layout '>
                            <input placeholder='Email' className=' pr-20 pl-5 pt-4 pb-4 bg-white rounded-2xl shadow-2xl' type="text" />
                            <button type='submit' className=' mt-2 mx-5 w-28  h-14 rounded-3xl flex items-center justify-center'>
                                <FaTelegramPlane className=' text-white text-3xl font-bold' />
                            </button>

                        </div>
                    </div>
                </div>
                <div className=' '>
                    <div className=' relative footer-container footer-position bg-black grid grid-cols-1 divide-y divide-yellow-400'>
                        <div className=' md:flex md:justify-center md:items-center  footer-layout-sm'>
                            <div className=" md:flex md:items-center md:justify-center  ">
                                <div className='footer-text-container md:flex  md:flex-col md:items-start md:justify-center '>
                                    <img className=' w-56 h-22 mb-4' src='' alt="" />
                                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id erat eget nisl eleifend tristique in eu ipsum. Aliquam condimentum dictum magna in molestie</p>
                                </div>
                            </div>
                            <div className="footer-about-container  pt-4 md:flex md:flex-col md:items-center md:justify-start">
                                <h3 className=' md:text-3xl md:mt-11 md:mb-5 font-bold text-yellow-400 text-xl'>About</h3>
                                <ul>
                                    <div className='flex justify-start items-center'><span><GoPrimitiveDot className=' text-xs md:text-3xl text-yellow-400 hover:text-orange-400' /></span>
                                        <li className=' list-none font-bold text-white'>
                                            About Us</li></div>

                                    <div className='flex justify-start items-center'><span><GoPrimitiveDot className=' text-xs md:text-3xl text-yellow-400 hover:text-orange-400' /></span>
                                        <li className='list-none font-bold text-white'>Services</li>
                                    </div>
                                    <div className='flex justify-start items-center'><span><GoPrimitiveDot className=' text-xs md:text-3xl text-yellow-400 hover:text-orange-400' /></span>

                                        <li className='list-none font-bold text-white'>Blog</li>
                                    </div>

                                    <div className='flex justify-start items-center'><span><GoPrimitiveDot className='text-xs md:text-3xl text-yellow-400 hover:text-orange-400' /></span>

                                        <li className='list-none font-bold text-white'>Contact</li>
                                    </div>

                                </ul>
                            </div>
                            <div className="footer-support-container md:flex md:flex-col md:pt-4 md:items-center md:justify-start  ">
                                <h3 className=' md:text-3xl mt-11 mb-5 font-bold text-yellow-400 text-xl'>Service</h3>
                                <ul>
                                    <div className='flex justify-start items-center'><span><GoPrimitiveDot className=' text-xs md:text-3xl text-yellow-400 hover:text-orange-400' /></span>
                                        <li className=' list-none font-bold text-white'>
                                            About Us</li></div>

                                    <div className='flex justify-start items-center'><span><GoPrimitiveDot className=' text-xs md:text-3xl text-yellow-400 hover:text-orange-400' /></span>
                                        <li className='list-none font-bold text-white'>Services</li>
                                    </div>
                                    <div className='flex justify-start items-center'><span><GoPrimitiveDot className=' text-xs md:text-3xl text-yellow-400 hover:text-orange-400' /></span>

                                        <li className='list-none font-bold text-white'>Blog</li>
                                    </div>

                                    <div className='flex justify-start items-center'><span><GoPrimitiveDot className=' text-xs md:text-3xl text-yellow-400 hover:text-orange-400' /></span>

                                        <li className='list-none font-bold text-white'>Contact</li>
                                    </div>

                                </ul>
                            </div>
                            <div className="footer-getintouch-container md:pt-4 p-2 ">
                                <h3 className='text-3xl mt-11 mb-5 font-bold text-yellow-400'>Get in touch</h3>
                                <p className='text-white md:text-base text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <div>
                                    <div>
                                        <div className='md:flex md:justify-start md:items-start md:mt-4 flex mt-5'>
                                            <div className=' text-yellow-400 flex justify-start items-center'><MdLocationPin /> <span className='md:text-base text-xs'>99 Roving St., Big CIty</span></div>
                                            <div className=' text-yellow-400 flex justify-start items-center ml-3'> <RiMessage3Fill /> <span className='md:text-base text-xs'>hello@awesomesite.com</span> </div>
                                        </div>

                                        <div className=' text-yellow-400 md:flex md:justify-start md:items-center flex mt-2'> <BsFillTelephoneFill /> <span className='md:text-base text-xs'>+123-234-1234</span> </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className=' absolute bottom-0 p-3 footer-bottom-container bg-stone-900'>
                            <div className=' ml-3 md:flex md:justify-between md:items-center'>
                                <div className='flex justify-start items-center'>
                                    <h5 className=' font-bold md:text-2xl text-base capitalize text-white'>Follow us :</h5>
                                    <div className=' flex justify-center items-center text-white text-xl'>
                                        <div className='p-2 ml-10 rounded-full bg-black'>
                                            <BsFacebook className=' rounded-full ' />
                                        </div>
                                        <div className='p-2 m-2 rounded-full bg-black'>
                                            <AiFillTwitterCircle />
                                        </div>
                                        <div className='p-2 m-2 rounded-full bg-black'>

                                            <AiFillYoutube />
                                        </div>
                                        <div className='p-2 m-2 rounded-full bg-black'>
                                            <AiFillInstagram />
                                        </div>
                                    </div>
                                </div>
                                <div className=' text-white'>
                                    <p>Copyright 2022 © Hypebeat | Powered By Rometheme Studio.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;