import React from "react";

import ux from "../images/icon/ux.png";
import game from "../images/icon/game.png";
import graphic from "../images/icon/graphic.png";
import web from "../images/icon/web.png";
import app from "../images/icon/app.png";
import digital from "../images/icon/digital.png";

function OurServices() {
  const serviceDetails = [
    {
      img: ux,
      id: "01",
      title: "UX Design",
      sub: "Mobile App, Website",
      text: "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.",
    },
    {
      img: game,
      id: "02",
      title: "Game Design",
      sub: "Mobile App, Website",
      text: "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.",
    },
    {
      img: graphic,
      id: "03",
      title: "Graphic Design",
      sub: "Mobile App, Website",
      text: "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.",
    },
    {
      img: web,
      id: "04",
      title: "Web Design",
      sub: "Mobile App, Website",
      text: "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.",
    },
    {
      img: app,
      id: "05",
      title: "App Design",
      sub: "Mobile App, Website",
      text: "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.",
    },
    {
      img: digital,
      id: "06",
      title: "Digital Marketing",
      sub: "Mobile App, Website",
      text: "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.",
    },
  ];
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center py-10 ">
      <h2 className=" text-lg text-[#FF5300] ">Our Services</h2>
      <h1 className=" text-4xl text-[#373737] font-bold ">What We Do</h1>
      <div className=" w-4/5 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {serviceDetails.map((service, index) => (
          <div className="  px-5 py-5 flex-col items-start justify-start shadow-xl rounded-md ">
            <div className=" flex flex-row justify-between item-center py-5 ">
              <img
                className=" w-20 h-20 object-contain "
                src={service.img}
                alt=""
              />
              <h1 className=" text-7xl text-[#EFEFEF] ">{service.id}</h1>
            </div>
            <h1 className=" text-2xl py-1 ">{service.title}</h1>
            <h3 className=" text-sm font-extralight py-2 ">{service.sub}</h3>
            <h2 className=" text-base font-light ">{service.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
