import React from 'react';
import image1 from '../../assets/client1.png';
import image2 from '../../assets/client2.png';
import image3 from '../../assets/client3.png';
import image4 from '../../assets/client4.png';
import image5 from '../../assets/client5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Members = () => {
    return (
        <div className='mt-16 p-5 w-5/6 mx-auto'>
            <h5 className=' text-2xl my-5'>Proud members of</h5>
            <div className='  border-y-4 '>


                <Swiper
                    // rewind={true}
                    navigation={false}
                    slidesPerView={2}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper sm:w-[300] md:w-[768] lg:w-[1024]"
                    breakpoints={{
                        300: {
                            slidesPerView: 2,

                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20
                        }
                    }}
                >

                    <SwiperSlide><img src={image1} alt="" /> </SwiperSlide>
                    <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={image3} alt="" /></SwiperSlide>



                </Swiper>





            </div>
        </div>
    );
};

export default Members;