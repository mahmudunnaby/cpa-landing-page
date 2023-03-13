import React, { useRef } from 'react';
import image from '../../assets/cir1.png'
import image1 from '../../assets/cir2.png'
import imgadd from '../../assets/Green_Geometric_Industrial_Logo__1_-removebg-preview.png';
import imgpub from '../../assets/Green_Geometric_Industrial_Logo__2_-removebg-preview.11705a773a5c787d4e31.png';
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
        <div id='#advertisers' ref={target} className="bg-img">

            <div ref={addSec.ref} className="hero  add-box  mb-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={imgadd} className=" lg:max-w-lg max-w-xm  rounded-lg " />
                    <div>
                        <h1 className="text-5xl  font-bold text-warning text-white">Advertisers
                        </h1>
                        <p className="py-6 text-white lg:text-lg text-xm ">More than 50 of the biggest ad agencies in the World are happily profiting from our traffic. If you'd like to join them, please have a quick read below and then get in contact with us.</p>
                        <button className="btn btn-primary">Sign UP</button>
                    </div>
                </div>
            </div>
            <div ref={pubSec.ref}>
                <div className="hero  pub-box ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <h1 className="text-5xl font-bold text-white"> Publishers</h1>
                            <p className="py-6 text-white">Savespoints Network knows what affiliates want, so we keep it simple: the highest CPA rates and rate-matching, guaranteed and on-time payments, ability to build-out custom campaigns, access to a wide-range of offers, dedicated individual Account Managers, and scalable solutions.</p>

                            <button className="btn btn-primary">Sign UP</button>
                        </div>
                        <img src={imgpub} className=" md:max-w-lg rounded-lg " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addpub;