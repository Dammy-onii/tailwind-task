import React from "react";

import hero from "../images/heroImg.png";

function Hero() {
  return (
    <div className=" w-full h-full xl:h-screen flex justify-center items-center bg-[#FFF7F4]  pt-14 ">
      <div className=" w-4/5  h-4/5 flex flex-col justify-center items-center md:flex-row ">
        <div className=" w-full flex flex-col pt-10">
          <h1 className=" text-3xl font-bold text-[#373737] lg-text-5xl ">
            Choose What Matters To Your Business & Your Customers.
          </h1>
          <h2 className=" text-base font-light text-[#7B7B7B] py-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            digni ssim euismod purus donec mus vulputate habitant iaculis. Com
            odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.
          </h2>
          <button className=" w-full md:w-2/4 xl:w-1/4 px-5 py-3 bg-[#FF5300] rounded ">
            Get Start Now
          </button>
        </div>
        <div className=" w-full px-2 object-cover ">
          <img className=" w-full h-full " src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
