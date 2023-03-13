import React from 'react';
import image from '../../assets/aboutimg.png'
import img1 from '../../assets/Green_Geometric_Industrial_Logo-removebg-preview.png';
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} className=" md:max-w-lg rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6">Savespoints is an online marketing company focused on pay-for-performance online advertising campaigns. With over 25,000 publishers, Savespoints  generates millions of leads per year for its advertisers  from all over the world. Savespoints  supports campaigns across all channels through email, display, search, social media, incentive and mobile.Savespoints is
                            performance-based online marketing solutions that are measurable & sustainable as well as providing outstanding quality and service to its clients and partners every day.
                        </p>

                        {/* <button className="btn btn-primary">Sign UP</button> */}
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default About;