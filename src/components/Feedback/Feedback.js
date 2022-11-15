import React from 'react';
import image1 from '../../assets/author1.png'
import image2 from '../../assets/author2.png'
import image3 from '../../assets/author3.png'
import image4 from '../../assets/author4.png'
import man1 from '../../assets/man1.JPG'
import man2 from '../../assets/man2.JPG'
import woman1 from '../../assets/woman1.JPG'
import woman2 from '../../assets/women2.JPG'
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Feedback = () => {
    return (
        <div className='flex justify-center items-center'>

            <div className=' bg-white flex justify-center items-center flex-col mt-40 lg:mt-5 h-96 md:w-[80%] w-full'>
                <h1 className='mb-5 md:mt-5  text-3xl text-center'>What People Say About Savespoints?</h1>
                <div className=' w-full '>


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
                                spaceBetween: 40
                            }
                        }}
                    >

                        <SwiperSlide> <div className=' flex flex-col items-center lg:flex-row m-5'>
                            <div className='relative mb-5 md:mr-5'>
                                <img className='rounded-full h-[100px] w-[100px] md:w-[500] ring-4 ring-white drop-shadow-lg' src={man1} alt="" />
                                <FaQuoteLeft className='text-white bg-warning rounded-full  h-8 w-8 p-2 text-lg absolute bottom-9' />
                            </div>
                            <div>
                                <p className=' m-10 md:m-0 text-sm md:w-96'>Savespoints provides a good list of bizzop , sweepstakes,Email submit Offers, surveys, get-paid-to-take surveys, gaming offers, and more. The campaigns are mostly exclusive or rare, have high payouts, and tend to convert extremely well. Savespoints’ payments and excellent customer service round them out as one of the best affiliate networks I have ever worked with, and I have worked with many in my years of affiliate marketing.</p>
                                <p className='mt-10'><span className='text-warning font-bold'>Savespoints</span></p>

                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>
                            <div className=' flex flex-col items-center lg:flex-row m-5'>
                                <div className='relative mb-5 md:mr-5'>
                                    <img className='rounded-full h-[100px] w-[100px] md:w-[500] ring-4 ring-white drop-shadow-lg' src={man2} alt="" />
                                    <FaQuoteLeft className='text-white bg-warning rounded-full  h-8 w-8 p-2 text-lg absolute bottom-9' />
                                </div>
                                <div>
                                    <p className=' m-10 md:m-0 text-sm md:w-96'>I have been working in Savespoints for over a year now and I have some good things to say that  they offer top rated support and I've never had any problems with payments. They have a good selection of exclusive offers as well as a wide variety of other offers at very competitive rates. I will recommend Savespoints for their great service.</p>
                                    <p className='mt-10'><span className='text-warning font-bold'>Savespoints </span> Publishers</p>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className=' flex flex-col items-center lg:flex-row m-5'>
                                <div className='relative mb-5 md:mr-5'>
                                    <img className='rounded-full h-[100px] w-[100px] md:w-[500] ring-4 ring-white drop-shadow-lg' src={woman1} alt="" />
                                    <FaQuoteLeft className='text-white bg-warning rounded-full  h-8 w-8 p-2 text-lg absolute bottom-9' />
                                </div>
                                <div>
                                    <p className=' m-10 md:m-0 text-sm md:w-96'>Savespoints continues to outperform many other networks in the space. We are very very  pleased with the level of quality and service that we've received from Savespoints Network over the past few  years and they continue to rise. Their support teams are  the most knowledgeable and experienced partners that we've worked with.</p>
                                    <p className='mt-10'><span className='text-warning font-bold'>Savespoints  /</span> Publishers</p>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className=' flex flex-col items-center lg:flex-row m-5'>
                            <div className='relative mb-5 md:mr-5'>
                                <img className='rounded-full h-[100px] w-[100px] md:w-[500] ring-4 ring-white drop-shadow-lg' src={woman2} alt="" />
                                <FaQuoteLeft className='text-white bg-warning rounded-full  h-8 w-8 p-2 text-lg absolute bottom-9' />
                            </div>
                            <div>
                                <p className=' m-10 md:m-0 text-sm md:w-96'>In the past year, I have utilized Savespoint's service for many of my lead based companies. They were able to launch and close each campaign in a very timely manner. Savespoints is a great partner of ours and we look forward to continuing the relationship with them in the coming years. I recommend all to use Savespoints platform to collect high quality leads for your product or company </p>
                                <p className='mt-10'><span className='text-warning font-bold'> Savespoints  / </span>Advertisers</p>
                            </div>
                        </div></SwiperSlide>



                    </Swiper>





                </div>

            </div >
        </div>
    );
};

export default Feedback;