import React, { useState } from "react";

import image1 from "../images/gallery/Image1.png";
import image2 from "../images/gallery/Image2.png";
import image3 from "../images/gallery/Image3.png";
import image4 from "../images/gallery/Image4.png";
import image5 from "../images/gallery/Image5.png";
import image6 from "../images/gallery/Image6.png";
import image7 from "../images/gallery/Image7.png";
import image8 from "../images/gallery/Image8.png";
import image9 from "../images/gallery/Image9.png";

function Gallery() {
  const [filter, setFilter] = useState("all");

  const images = [
    {
      id: 1,
      category: "uXDesign",
      image: image1,
    },
    {
      id: 2,
      category: "webDesign",
      image: image2,
    },
    {
      id: 3,
      category: "appDesign",
      image: image3,
    },
    {
      id: 4,
      category: "gameDesign",
      image: image4,
    },
    {
      id: 5,
      category: "graphicDesign",
      image: image5,
    },
    {
      id: 6,
      category: "gameDesign",
      image: image6,
    },
    {
      id: 7,
      category: "appDesign",
      image: image7,
    },
    {
      id: 8,
      category: "graphicDesign",
      image: image8,
    },
    {
      id: 9,
      category: "uxDesign",
      image: image9,
    },
  ];

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((image) => image.category === filter);
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center py-5 ">
      <h2 className=" text-lg text-[#FF5300] ">Our Case Study</h2>
      <h1 className=" text-[#373737] text-2xl md:text-4xl font-semibold py-5 ">
        Our Recent Project
      </h1>

      <div className=" w-3/4 flex flex-row flex-wrap items-center justify-between text-[#7B7B7B] text-l py-5 ">
        <h1
          className={` px-10 py-3 cursor-pointer rounded hover:bg-[#FF5300] focus:bg-[#FF5300] ${
            filter === "all" ? "bg-[#FF5300] text-[#fff]" : ""
          } `}
          onClick={() => setFilter("all")}
        >
          All
        </h1>
        <h1
          className={` px-10 py-3 cursor-pointer rounded hover:bg-[#FF5300] focus:bg-[#FF5300] ${
            filter === "uXDesign" ? "bg-[#FF5300] text-[#fff]" : ""
          } `}
          onClick={() => setFilter("uXDesign")}
        >
          UX Design
        </h1>
        <h1
          className={` px-10 py-3 cursor-pointer rounded hover:bg-[#FF5300] focus:bg-[#FF5300] ${
            filter === "webDesign" ? "bg-[#FF5300] text-[#fff]" : ""
          } `}
          onClick={() => setFilter("webDesign")}
        >
          Web Design
        </h1>
        <h1
          className={` px-10 py-3 cursor-pointer rounded hover:bg-[#FF5300] focus:bg-[#FF5300] ${
            filter === "appDesign" ? "bg-[#FF5300] text-[#fff]" : ""
          } `}
          onClick={() => setFilter("appDesign")}
        >
          App Development
        </h1>
        <h1
          className={` px-10 py-3 cursor-pointer rounded hover:bg-[#FF5300] focus:bg-[#FF5300] ${
            filter === "gameDesign" ? "bg-[#FF5300] text-[#fff]" : ""
          } `}
          onClick={() => setFilter("gameDesign")}
        >
          Game Design
        </h1>
        <h1
          className={` px-10 py-3 cur sor-pointer rounded hover:bg-[#FF5300] focus:bg-[#FF5300] ${
            filter === "graphicDesign" ? "bg-[#FF5300] text-[#fff]" : ""
          } `}
          onClick={() => setFilter("graphicDesign")}
        >
          Graphic Design
        </h1>
      </div>
      <div className=" w-3/4 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-all ">
        {filteredImages.map((image) => (
          <img src={image.image} key={image.id} alt={image.category} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
