import React from 'react'
import img_banner from './img/img_banner.png'
import './banner.css'
const Banner = () => {

    return(
        <section className="container mx-auto flex flex-col md:flex-row  items-center">
            <div className="w-full mt-8 md:w-6/12">
                <div className='text-[#A0A3BD] text-lg md:text-xl lg:text-2xl leading-7'>
                    <p>Nearest Cinema, Newest Movie.</p>
                </div>
                <div className='text-[#5F2EEA] text-5xl mt-8 md:text-4xl lg:text-6xl font-bold leading-9 md:mt-4'> 
                    <p>Find out now!</p>
                </div>
                
            </div>
            <div className="banner-right  flex sm:w-full  sm:mt-20 md:w-6/12 md:justify-center  ">
                <div className='sm:w-full '>
                    <img className='sm:w-full' src={img_banner} alt="image Banner" />
                </div>
            </div>
        </section>
    )
}

export default Banner