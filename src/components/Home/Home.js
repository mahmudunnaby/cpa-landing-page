import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../HeroSection/Hero';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Addpub from '../AddPub/Addpub';
import Feedback from '../Feedback/Feedback';
import Profile from '../Profile/Profile';
import Members from '../Members/Members';
import Ourfeature from '../OurFeature/Ourfeature';

const Home = () => {
    return (
        <div id='home' >
            <Navbar />
            <Hero />
            <Footer />
            <About />
            <Addpub />
            <Feedback />
            <Profile />
            <Members />
            <Ourfeature/>
        </div>
    );
};

export default Home;