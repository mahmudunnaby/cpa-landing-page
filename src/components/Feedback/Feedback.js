import React from 'react';
import image1 from '../../assets/author1.png'
import image2 from '../../assets/author2.png'
import image3 from '../../assets/author3.png'
import image4 from '../../assets/author4.png'
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

            <div className=' bg-white flex justify-center items-center flex-col mt-20 lg:mt-5 h-96 md:w-[80%] w-full'>
                <h1 className='mb-5 md:mt-5  text-3xl text-center'>What People Say about Panthera?</h1>
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
                                <img className='rounded-full h-[100px] w-[100px] md:w-[500] ring-4 ring-white drop-shadow-lg' src={image1} alt="" />
                                <FaQuoteLeft className='text-white bg-warning rounded-full  h-8 w-8 p-2 text-lg absolute bottom-9' />
                            </div>
                            <div>
                                <p className=' m-10 md:m-0 text-sm md:w-96'>Panthera Network continues to outperform many other networks in the space. We are very pleased with the level of quality and service that we've received from Panthera Network over the past year and they continue to raise the bar month over month. Matt and his team are some of the most knowledgeable and experienced partners that we've worked with.</p>
                                <p className='mt-10'><span className='text-warning font-bold'>BB/</span>Managing Partner</p>

                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>
                            <div className=' flex flex-col items-center lg:flex-row m-5'>
                                <div className='relative mb-5 md:mr-5'>
                                    <img className='rounded-full h-[100px] w-[100px] md:w-[500] ring-4 ring-white drop-shadow-lg' src={image2} alt="" />
                                    <FaQuoteLeft className='text-white bg-warning rounded-full  h-8 w-8 p-2 text-lg absolute bottom-9' />
                                </div>
                                <div>
                                    <p className=' m-10 md:m-0 text-sm md:w-96'>In the past year, I have utilized Panthera's service for many research projects. They were able to launch and close each project in a very timely manner. Panthera is a great partner of ours and we look forward to continuing the relationship with them in the coming years. I recommend any research company who is looking for outside sample partners to utilize the services of Panthera.</p>
                                    <p className='mt-10'><span className='text-warning font-bold'>GK @ GSS /</span> Manager</p>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className=' flex flex-col items-center lg:flex-row m-5'>
                                <div className='relative mb-5 md:mr-5'>
                                    <img className='rounded-full h-[100px] w-[100px] md:w-[500] ring-4 ring-white drop-shadow-lg' src={image3} alt="" />
                                    <FaQuoteLeft className='text-white bg-warning rounded-full  h-8 w-8 p-2 text-lg absolute bottom-9' />
                                </div>
                                <div>
                                    <p className=' m-10 md:m-0 text-sm md:w-96'>Panthera provides a good list of surveys, get-paid-to-take surveys, gaming offers, and more. The campaigns are mostly exclusive or rare, have high payouts, and tend to convert extremely well. Panthera's consistent net 15 payments and excellent customer service round them out as one of the best affiliate networks I have ever worked with, and I have worked with many in my years of affiliate marketing.</p>
                                    <p className='mt-10'><span className='text-warning font-bold'>CT /</span> Sales Manager</p>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className=' flex flex-col items-center lg:flex-row m-5'>
                            <div className='relative mb-5 md:mr-5'>
                                <img className='rounded-full h-[100px] w-[100px] md:w-[500] ring-4 ring-white drop-shadow-lg' src={image4} alt="" />
                                <FaQuoteLeft className='text-white bg-warning rounded-full  h-8 w-8 p-2 text-lg absolute bottom-9' />
                            </div>
                            <div>
                                <p className=' m-10 md:m-0 text-sm md:w-96'>I've been dealing with Panthera for over a year now and have nothing but good things to say. They offer top notch support and I've never had any problems with payments. They have a good selection of exclusive offers as well as a wide variety of other offers at very competitive rates. I would recommend them to anyone looking for a great network, whether new to the game or experienced vets.</p>
                                <p className='mt-10'><span className='text-warning font-bold'> BP / </span>Marketing Director</p>
                            </div>
                        </div></SwiperSlide>



                    </Swiper>





                </div>

            </div >
        </div>
    );
};

export default Feedback;