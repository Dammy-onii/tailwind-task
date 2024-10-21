import React from "react";

import capa from "../images/capa.png";
import experts from "../images/icon/experts.png";
import stra from "../images/icon/stra.png";
import results from "../images/icon/results.png";
import high from "../images/icon/high.png";

function Capabilities() {
  const capaDetails = [
    {
      percentage: "80%",
      area: "Softwer Development",
    },
    {
      percentage: "90%",
      area: "Graphic Design",
    },
    {
      percentage: "85%",
      area: "Game Design",
    },
    {
      percentage: "100%",
      area: "Web Development",
    },
  ];
  return (
    <div className=" w-full h-full lg:h-screen flex flex-col justify-center items-center py-5 ">
      <div className="w-4/5  h-4/5 flex flex-col justify-center items-center md:flex-row pr-2 ">
        <div className=" w-full flex flex-col pl-px-2 ">
          <h3 className=" text-lg text-[#FF5300] ">Our Capabilities</h3>
          <h1 className=" text-[#373737] text-2xl md:text-4xl font-semibold py-5 ">
            Forward Thinking Team Of Designers & Developers
          </h1>
          <h2 className=" text-[#7B7B7B] text-lg font-light ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut
            nisi, amet rhoncus volutpat neque. Ipsum in aliquam eget vitae purus
            felis eget massa felis. Eu mattis in malesuada facilisi proin vel.
          </h2>
          <div className=" flex flex-row flex-wrap py-5 items-center justify-between ">
            {capaDetails.map((capa, index) => (
              <div
                className=" w-32 h-32 flex flex-col justify-start items-center shadow-xl rounded-md text-center "
                key={index}
              >
                <h1 className=" text-[#FF5300] text-xl font-bold pt-6 ">
                  {capa.percentage}
                </h1>
                <h2 className=" text-[#373737] text-sm font-light py-2 ">
                  {capa.area}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full px-2 object-cover my-2 ">
          <img className=" w-full h-full " src={capa} alt="" />
        </div>
      </div>

      <div className=" w-4/5  h-1/4 flex flex-col justify-start items-center md:flex-row pr-2 bg-[#FF5300] rounded-lg ">
        <div className=" w-full grid grid-cols-2 gap-8 lg:grid-cols-4 items-start px-20 py-5 justify-between ">
          <div className="  flex flex-col justify-center items-center md:border-r-2 ">
            <img className=" w-8 h-8 object-cover " src={experts} alt="" />
            <h1 className=" text-[#fff] text-xl font-semibold ">120</h1>
            <h2 className=" text-[#fff] text-md font-light text-center ">
              Top Experts
            </h2>
          </div>
          <div className="  flex flex-col justify-center items-center md:border-r-2 ">
            <img className=" w-8 h-8 object-cover " src={stra} alt="" />
            <h1 className=" text-[#fff] text-2xl font-semibold ">500</h1>
            <h2 className=" text-[#fff] text-md font-light text-center ">
              Strategies
            </h2>
          </div>
          <div className="  flex flex-col justify-center items-center md:border-r-2 ">
            <img className=" w-8 h-8 object-cover " src={results} alt="" />
            <h1 className=" text-[#fff] text-2xl font-semibold ">347</h1>
            <h2 className=" text-[#fff] text-md font-light text-center ">
              Great Results
            </h2>
          </div>
          <div className="  flex flex-col justify-center items-center ">
            <img className=" w-8 h-8 object-cover " src={high} alt="" />
            <h1 className=" text-[#fff] text-2xl font-semibold ">120</h1>
            <h2 className=" text-[#fff] text-md font-light text-center ">
              High Rankings
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
