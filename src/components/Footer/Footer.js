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
        <div id='#contact'>
            <div className=' relative'>
                <div className=' absolute newsletter-position newsletter-container  md:flex md:justify-center md:items-center'>
                    <div className=' newsletter-bg rounded-3xl newsletter-sm-layout bg-yellow-400 md:flex md:justify-start md:items-center'>
                        <div className='newsletter-text-container md:flex md:flex-col md:items-start md:justify-center md:p-7'>
                            <h4 className=' font-bold capitalize  text-lg md:text-2xl'> Subscribe Newsletter</h4>
                            <p className=' text-xs  md:text-base'></p>
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
                                    <p className='text-white '>Savespoints is an online marketing company focused on pay-for-performance online advertising campaigns. With over 25,000 publishers, Savespoints  generates millions of leads per year for its advertisers  from all over the world.
                                    </p>
                                </div>
                            </div>
                            <div className="footer-about-container  pt-4 md:flex md:flex-col md:items-center md:justify-start">
                                <h3 className='  md:text-3xl md:mt-11 md:mb-5 font-bold text-yellow-400 text-xl text-center'>About</h3>
                                <ul className='flex justify-center items-center lg:flex-col lg:items-start '>
                                    <div className='flex justify-start items-center'><span><GoPrimitiveDot className=' text-xs md:text-3xl text-yellow-400 hover:text-orange-400' /></span>
                                        <li className=' list-none font-bold text-white'>
                                            Network  </li></div>

                                    <div className='flex justify-start items-center'><span><GoPrimitiveDot className=' text-xs md:text-3xl text-yellow-400 hover:text-orange-400' /></span>
                                        <li className='list-none font-bold text-white'>Advertisers</li>
                                    </div>
                                    <div className='flex justify-start items-center'><span><GoPrimitiveDot className=' text-xs md:text-3xl text-yellow-400 hover:text-orange-400' /></span>

                                        <li className='list-none font-bold text-white'>Publisher</li>
                                    </div>

                                    <div className='flex justify-start items-center'><span><GoPrimitiveDot className='text-xs md:text-3xl text-yellow-400 hover:text-orange-400' /></span>

                                        <li className='list-none font-bold text-white'>Contact</li>
                                    </div>

                                </ul>
                            </div>

                            <div className="footer-getintouch-container md:pt-4 p-2 ">
                                <h3 className='text-3xl mt-11 mb-5 font-bold text-yellow-400'>Contact Us</h3>
                                <p className='text-white md:text-base text-xs'>More than 70 of the biggest ad agencies in the World are happily profiting from our traffic. If you'd like to join them, please have a quick read below and then get in contact with us.</p>
                                <div>
                                    <div>
                                        <div className='md:flex md:justify-start md:items-start md:mt-4 flex mt-5'>
                                            <div className=' text-yellow-400 flex justify-start items-center'><MdLocationPin /> <span className='md:text-base text-xs'>686 Bernier Fall Beckerbury,Connecticut, USA</span></div>
                                            <div className=' text-yellow-400 flex justify-start items-center ml-3'> <RiMessage3Fill /> <span className='md:text-base text-xs'>contact@savespoints.com</span> </div>
                                        </div>

                                        <div className=' text-yellow-400 md:flex md:justify-start md:items-center flex mt-2'> <BsFillTelephoneFill /> <span className='md:text-base text-xs'>+1-202-555-0160</span> </div>
                                    </div>

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