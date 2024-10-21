import React from "react";

import about from "../images/aboutUs.png";

function AboutUs() {
  return (
    <div className=" w-full h-full lg:h-screen flex justify-center items-center bg-[#FFF7F4] py-5 ">
      <div className="w-4/5  h-4/5 flex flex-col justify-center items-center md:flex-row ">
        <div className=" w-full flex flex-col pl-px-2 ">
          <h3 className=" text-lg text-[#FF5300] ">About Us</h3>
          <h1 className=" text-[#373737] text-4xl font-semibold py-5 ">
            Grow Your Business With Our Agency
          </h1>
          <h2 className=" text-[#7B7B7B] text-xl font-light ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus
            mattis eget sem habitant id ultrices augue. Sit rhoncus .
          </h2>
        </div>
        <div className=" w-full px-2 object-cover ">
          <img className=" w-full h-full " src={about} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
