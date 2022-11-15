import React from 'react';
import { AiFillSkype } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';

const Contact = () => {
    return (
        <div className="hero flex justify-center items-center min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="w-full ">
                    <h1 className="text-5xl font-bold pb-5">Hello there</h1>
                    <div className='w-[98%] flex justify-center items-center '>
                        <div className="stats shadow flex lg:flex-row flex-col justify-center items-center">

                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <AiFillSkype className='w-40 h-40' />
                                </div>
                                <div className="stat-title">Total Likes</div>
                                <div className="stat-value text-primary">25.6K</div>
                                <div className="stat-desc">21% more than last month</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <GrMail className='w-40 h-40' />
                                </div>
                                <div className="stat-title">Page Views</div>
                                <div className="stat-value text-secondary">2.6M</div>
                                <div className="stat-desc">21% more than last month</div>
                            </div>



                        </div>
                    </div>

                    <p className="py-6 px-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;