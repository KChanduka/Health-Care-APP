import React from "react";
import FhomeLogo from "./FhomeLogo"; 
import fb from "../assets/image 4.png";
import insta from "../assets/image 5.png";
import whatsapp from "../assets/image 6.png";
import twit from "../assets/image 7.png";



function Footer() {
  return (
    <div className=" bg-emerald-950 mt-8 w-full h-[280px] overflow-visible px-10 absolute right-0 left-0">
      <div className="flex justify-between pt-10">
        {/* logo&quick links */}
        <div className="">
          <div className="  h-1/2 p-3">
            <FhomeLogo/>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-white text-2xl">Terms of Use</h1>
            <h1 className="text-white text-2xl">Privacy and Policy</h1>
            <h1 className="text-white text-2xl">Careers</h1>
          </div>


        </div>

        {/* Market */}
        <div className="flex flex-col gap-8 relative mt-10">
          <h1 className=" text-3xl relative text-white font-semibold">Are You a Doctor?</h1>
          <h1 className=" text-3xl relative text-white">Wanna join My Health</h1>
          <div className="flex">
            <div>
              {/* <MarketCard /> */}
              {/* <MarketCard /> */}
            </div>
            <div>
              {/* <MarketCard /> */}
              {/* <MarketCard /> */}
            </div>
          </div>
        </div>

        {/* Contact US */}
        <div className="flex flex-col gap-8 mt-10">
          <h1 className=" text-3xl relative text-white font-semibold">Contact Us</h1>

          <div className="flex ">
              <img className="w-11 h-11 mx-4" src={fb} alt="fb" />
              <img className="w-11 h-11 mx-4" src={insta} alt="insta" />
              <img className="w-11 h-11 mx-4" src={whatsapp} alt="whatsapp" />
              <img className="w-11 h-11 mx-4" src={twit} alt="twit" />
            </div>

        </div>

      </div>
    </div>
  );
}

export default Footer;
