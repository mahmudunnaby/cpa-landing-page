import React from 'react';
import styles from './slideimage.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Slideimage = ({ el }) => {
    const { img, ID, title, discription } = el
    return (
        <div className='relative'>
            <div className=' absolute img-size flex justify-center flex-col items-center text-center space-y-2'>
                <p className='  text-white text-sm md:text-3xl'>{discription}</p>
                <h1 className=' text-warning font-bold text-3xl md:text-5xl'>{title}</h1>
                <button className="btn btn-outline btn-warning">LEARN MORE <MdOutlineKeyboardArrowRight className=' h-8 w-8' /></button>
            </div>
            <img className='img-size' src={img} alt="" />

        </div>
    );
};

export default Slideimage;