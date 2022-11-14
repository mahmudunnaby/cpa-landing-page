import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import styles from './hero.css'
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/4.jpg'
import image4 from '../../assets/img5.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'


import Slideimage from './Slideimage';

const images = [
    {
        "ID": 0,
        "img": image4,
        "title": "Publisher Network",
        "discription": "A Leading Global Performance Based",

    },
    {
        "ID": 1,
        "img": image5,
        "title": "Panthera Network",
        "discription": "Advertisers & Publishers For 15+ Years",
    },
    {
        "ID": 2,
        "img": image6,
        "title": "Experts In Both Web And Mobile",
        "discription": "Customer And User Acquisitions",
    }]

const Hero = () => {
    return (
        <div className=' z-0'>

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                effect="fade"
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {images.map((el, i) => <SwiperSlide><Slideimage key={i} el={el} /></SwiperSlide>)}
                {/* {images.map(el => <SwiperSlide><img src={el} alt="" /></SwiperSlide>)} */}
                {/* <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image3} alt="" /></SwiperSlide> */}

            </Swiper>
        </div>
    );
};

export default Hero;