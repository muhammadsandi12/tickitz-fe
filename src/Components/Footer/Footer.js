import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <>
      <footer className="container mx-auto">
        <div className="flex flex-col lg:flex-row md:flex-row mb-4   ">
          <div className="sm:w-full  md:w-4/12 md:mr-2 lg:w-5/12">
            <div className="mb-2">
              <img src="/tickitz1.png" width={170} height={43} alt="logo tickitz" />
            </div>
            <div>
              <p className="text-[#6E7191] md:text-sm md:tracking-normal lg:text-base font-normal tracking-wider	">
                Stop waiting in line. Buy tickets
              </p>
              <p className="text-[#6E7191] md:text-sm  md:tracking-normal lg:text-base font-normal tracking-wider	">
                conveniently, watch movies quietly
              </p>


            </div>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row  sm:mt-4 md:flex md:w-8/12 lg:flex lg:w-7/12    text-base font-bold leading-9 ">
            <div className="sm:w-full  md:w-3/12  ">
              <div className="font-bold text-black text-base h-[43px]  md:mb-4 lg:mb-4 mt-2">
                <h4>Explore</h4>
              </div>
              <div className=" flex flex-row md:flex-col lg:felx-col">
                <div className="text-[#4E4B66] text-sm font-normal mb-2">
                  <Link className="mr-4" to="/">
                    Home
                  </Link>
                </div>
                <div className="text-[#4E4B66] text-sm font-normal">
                  <Link className="sm:mr-4" to="/">
                    List Movie
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:w-8/12 md:w-5/12 ">
              <div className="font-bold text-black text-base h-[43px]  md:mb-4 lg:mb-4 mt-2">
                <h4>Our Sponsor</h4>
              </div>
              <div className="flex flex-row items-center sm:w-full sm:justify-between md:flex-col md:items-start lg:flex-col">
                <div className=" mb-4 mr-4">
                  <Link to="#">
                    <img className="w-[80px] h-[29px]  md:w-[120px] md:h-[44px]" src="/logo-ebu.png" alt="logo ebu" />
                  </Link>
                </div>
                <div className=" mb-4  mr-4">
                  <Link to="#">
                    <img className=" w-[105px] h-[16px] md:w-[173px] md:h-[26px]" src="/cinema-logo.png" alt="cinema logo" />
                  </Link>
                </div>
                <div className="mb-4  mr-4">
                  <Link to="#">
                    <img className="w-[76px] h-[23px] md:w-[79px] md:h-[24px]" src="/hiflix-logo.png" alt="hiflix logo" />
                  </Link>
                </div>

              </div>

            </div>
            <div className="w-6/12 md:w-4/12 ">
              <div className="font-bold text-black text-base h-[43px]  md:mb-4 lg:mb-4 mt-2">
                <h4>Follow Us</h4>
              </div>
              <div className="flex justify-between md:flex-col lg:flex-col  mr-4">
                <div className=" flex mb-3">
                  <Link to="#">
                    <div className="w-[24px] h-[24px]  mr-2 flex justify-center items-center" >
                      <img className=" " src="/facebook-icon.png" alt="facebook icon" />
                    </div>
                  </Link>
                  <div className=" hidden md:block lg:block text-[#6E7191] md:text-xs lg:text-sm font-semibold ">
                    Tickitz Cinema id
                  </div>
                </div>
                <div className=" flex mb-3">
                  <Link to="#">
                    <div className="w-[24px] h-[24px]   mr-2 flex justify-center items-center">
                      <img className="" src="/instagram-icon.png" alt="instagram icon" />
                    </div>
                  </Link>
                  <div className="hidden md:block lg:block text-[#6E7191] md:text-xs lg:text-sm font-semibold ">
                    tickitz.id
                  </div>
                </div>
                <div className="flex mb-3">
                  <Link to="#">
                    <div className="w-[24px] h-[24px] flex justify-center items-center  mr-2">
                      <img className="" src="/twitter-icon.png" alt="twitter icon" />
                    </div>
                  </Link>
                  <div className="hidden md:block lg:block text-[#6E7191] md:text-xs lg:text-sm font-semibold  ">
                    tickitz.id
                  </div>
                </div>
                <div className="flex mb-3">
                  <Link to="#">
                    <div className="w-[24px] h-[24px]  flex justify-center items-center mr-2">
                      <img src="/youtube-icon.png" alt="youtube icon" />
                    </div>
                  </Link>
                  <div className=" hidden md:block lg:block text-[#6E7191] md:text-xs lg:text-sm font-semibold  mb-4">
                    tickitz.id
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-[#4E4B66] text-sm font-normal">
          <p>&copy; 2020 Tickitz. All Rights Reserved.</p>
        </div>
      </footer>

    </>
  );
};

export default Footer;
