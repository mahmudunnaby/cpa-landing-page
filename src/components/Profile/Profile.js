import React from 'react';
import { GiSpeaker } from 'react-icons/gi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoMdGitCompare } from 'react-icons/io';
import { TbArrowAutofitUp } from 'react-icons/tb';



const Profile = () => {
    return (
        <div className="lg:h-[285px] h-[600px] w-11/12 mx-auto mt-40 lg:mt-10 lg:w-full  bg-[url('/public/5.jpg')] bg-cover">
            <div className=' flex justify-evenly h-full p-5 lg:items-center items-start  flex-col  lg:flex-row'>
                <div className='flex justify-center items-center'>
                    <div className='px-5'>
                        <p className='text-white border-b-2 text-3xl' >500+</p>
                        <h3 className=' text-2xl text-white'>Advertisers</h3>
                    </div>

                    <GiSpeaker className=' text-warning lg:text-[100px] text-[70px]' />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='px-5'>
                        <p className='text-white border-b-2 text-3xl' >15+</p>
                        <h3 className=' text-2xl text-white'>Years Running</h3>
                    </div>

                    <FaRegCalendarAlt className=' text-warning lg:text-[100px] text-[70px]' />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='px-5'>
                        <p className='text-white border-b-2 text-3xl' >370+</p>
                        <h3 className=' text-2xl text-white'>Live Campaigns</h3>
                    </div>

                    <IoMdGitCompare className=' text-warning lg:text-[100px] text-[70px]' />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='px-5'>
                        <p className='text-white border-b-2 text-3xl' >3500+</p>
                        <h3 className=' text-2xl text-white'>Publishers</h3>
                    </div>

                    <TbArrowAutofitUp className=' text-warning lg:text-[100px] text-[70px]' />
                </div>




            </div>
        </div>
    );
};

export default Profile;