import React from 'react'
import img_banner from './img/img_banner.png'
import './banner.css'
const Banner = () => {

    return(
        <section className="container mx-auto flex mt-4 items-center">
            <div className="banner-left w-6/12">
                <div className='text-[#A0A3BD] text-2xl leading-7'>
                    <p>Nearest Cinema, Newest Movie,</p>
                </div>
                <div className='text-[#5F2EEA] text-6xl font-bold leading-9 mt-8'> 
                    <p>Find out now!</p>
                </div>
                
            </div>
            <div className="banner-right flex w-6/12 justify-center ">
                <div>
                    <img  className='banner-img' src={img_banner} alt="image Banner" />
                </div>
            </div>
        </section>
    )
}

export default Banner