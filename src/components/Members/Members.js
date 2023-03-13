import React from 'react';
import image1 from '../../assets/affplus.png';
import image2 from '../../assets/affpay.png';
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
                            slidesPerView: 1,

                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }}
                >

                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center'>
                        <img className='lg:h-40 lg:w-80 lg:p-10' src={image1} alt="" />
                        <a class="bg-blue-500 px-3 py-2 m-2 rounded-xl text-white" target="_blank" href="https://www.affplus.com">Explore</a>
                        </div>
                        
                     </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center'>
                        <img className='lg:h-40 lg:w-80 lg:p-10' src={image2} alt="" />
                        <a class="bg-blue-500 px-3 py-2 m-2 rounded-xl text-white" target="_blank" href="https://www.affplus.com">Explore</a>
                        </div>
                        
                    </SwiperSlide>
                    {/* <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={image3} alt="" /></SwiperSlide> */}



                </Swiper>





            </div>
        </div>
    );
};

export default Members;