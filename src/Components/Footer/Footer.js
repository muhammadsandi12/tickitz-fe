import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto">
        <div className="items-center flex mb-4 ">
          <div className="w-5/12">
            <img src="tickitz1.png" width={170} height={43} />
          </div>
          <div className="w-7/12 flex items-center text-base font-bold leading-9 ">
            <div className="w-4/12">
              <h4>Explore</h4>

            </div>
            <div className="w-4/12">
              <h4>Our Sponsor</h4>

            </div>
            <div className="w-4/12">
              <h4>Follow Us</h4>

            </div>
          </div>
        </div>
        <div className=" flex mb-8 ">
          <div className="w-5/12">
            <p className="text-[#6E7191] text-base font-normal tracking-wider	">
              Stop waiting in line. Buy tickets <br />
              conveniently, watch movies quietly
            </p>
          </div>
          <div className="w-7/12 flex items-start text-base font-bold leading-9">
            <div className="w-4/12">
              <div className="text-[#4E4B66] text-sm font-normal mb-2">
                <Link style={{ textDecoration: "none" }} to="/">
                  Home
                </Link>
              </div>
              <div className="text-[#4E4B66] text-sm font-normal">
                <Link style={{ textDecoration: "none" }} to="/">
                  List Movie
                </Link>
              </div>

            </div>
            <div className="w-4/12">
              <div className=" mb-4">
                <Link to="#">
                  <img src="logo-ebu.png" />
                </Link>
              </div>
              <div className=" mb-4">
                <Link to="#">
                  <img src="cinema-logo.png" />
                </Link>
              </div>
              <div className="mb-4">
                <Link to="#">
                  <img src="hiflix-logo.png" />
                </Link>
              </div>

            </div>
            <div className="w-4/12 flex ">
              <div className=" flex-col items-center mr-4">
                <div className="mb-4">
                  <Link to="#">
                    <img src="facebook-icon.png" />
                  </Link>
                </div>
                <div className=" mb-4">
                  <Link to="#">
                    <img src="instagram-icon.png" />
                  </Link>
                </div>
                <div  className="facebook mb-4">
                  <Link to="#">
                    <img className="" src="twitter-icon.png" />
                  </Link>
                </div>
                <div className="facebook mb-4">
                  <Link to="#">
                    <img src="youtube-icon.png" />
                  </Link>
                </div>
              </div>
              <div className="flex-col items-center ">
                <div className="text-[#6E7191] text-sm font-semibold  mb-5">
                  Tickitz Cinema id
                </div>
                <div className="text-[#6E7191] text-sm font-semibold  mb-5">
                  tickitz.id
                </div>
                <div className="text-[#6E7191] text-sm font-semibold  mb-4">
                  tickitz.id
                </div>
                <div className="text-[#6E7191] text-sm font-semibold  mb-4">
                  tickitz.id
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
