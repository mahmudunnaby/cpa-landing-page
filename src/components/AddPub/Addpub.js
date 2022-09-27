import React, { useRef } from 'react';
import image from '../../assets/cir1.png'
import image1 from '../../assets/cir2.png'
import styles from './addpub.css'
import { useParallax } from 'react-scroll-parallax';

const Addpub = () => {
    const target = useRef(null)
    const addSec = useParallax({
        speed: 10,
        targetElement: target.current,
    })
    const pubSec = useParallax({
        speed: 10,
        targetElement: target.current,
    })
    return (
        <div ref={target} className="bg-img">

            <div ref={addSec.ref} className="hero  add-box  mb-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className=" lg:max-w-lg max-w-xm  rounded-lg " />
                    <div>
                        <h1 className="lg:text-5xl text-xl font-bold text-warning">About Panthera Network</h1>
                        <p className="py-6 text-white lg:text-lg text-xm">Panthera is an online marketing company focused primarily on customer acquisition and pay-for-performance online advertising campaigns. With over 3,000 publishers, Panthera generates millions of leads and/or sales per year for its advertiser clients from all over the world, including members of the Fortune 1000™. Panthera supports campaigns across all channels through email, display, search, social media, incentive and mobile.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div ref={pubSec.ref}>
                <div className="hero  pub-box ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <h1 className="text-5xl font-bold">About Panthera Network</h1>
                            <p className="py-6">Panthera is an online marketing company focused primarily on customer acquisition and pay-for-performance online advertising campaigns. With over 3,000 publishers, Panthera generates millions of leads and/or sales per year for its advertiser clients from all over the world, including members of the Fortune 1000™. Panthera supports campaigns across all channels through email, display, search, social media, incentive and mobile.</p>

                            <button className="btn btn-primary">Get Started</button>
                        </div>
                        <img src={image1} className=" md:max-w-lg rounded-lg " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addpub;