import React from 'react';
import image from '../../assets/aboutimg.png'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className=" md:max-w-lg rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold">About Panthera Network</h1>
                        <p className="py-6">Panthera is an online marketing company focused primarily on customer acquisition and pay-for-performance online advertising campaigns. With over 3,000 publishers, Panthera generates millions of leads and/or sales per year for its advertiser clients from all over the world, including members of the Fortune 1000™. Panthera supports campaigns across all channels through email, display, search, social media, incentive and mobile.</p>
                        <p className="py-6">Since 2006, Panthera has been dedicated to providing outstanding customer service, dependable and superior tracking and timely publisher payments. In 2010 and 2012, Panthera was ranked on the BLUE BOOK Top 20 CPA Networks. In 2009, 2012 and 2014, Panthera was ranked a Top 50 Affiliate Network by Website Magazine.</p>
                        <p>performance-based online marketing solutions that are measurable & sustainable as well as providing outstanding quality and service to its clients and partners every day.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default About;