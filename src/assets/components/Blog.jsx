import React from "react";

import image1 from "../images/gallery/Image1.png";
import image2 from "../images/gallery/Image2.png";
import image3 from "../images/gallery/Image3.png";

function Blog() {
  const blogDetails = [
    {
      img: image1,
      blogHeader:
        "35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired",
      user: "Cristofer Westervelt",
      postTime: "January 25, 2021",
      postComments: "10 Comment",
      blogText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.",
    },
    {
      img: image2,
      blogHeader: "Ridiculously powerful 2021 iPad Pro may drop this month",
      user: "Cristofer Westervelt",
      postTime: "January 25, 2021",
      postComments: "10 Comment",
      blogText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.",
    },
    {
      img: image3,
      blogHeader: "Memphis Design: the defining look of the 1980s",
      user: "Cristofer Westervelt",
      postTime: "January 25, 2021",
      postComments: "10 Comment",
      blogText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.",
    },
  ];

  const postDetails = [
    {
      user: "Cristofer Westervelt",
      postTime: "January 25, 2021",
      postComments: "10 Comment",
    },
    {
      user: "Cristofer Westervelt",
      postTime: "January 25, 2021",
      postComments: "10 Comment",
    },
    {
      user: "Cristofer Westervelt",
      postTime: "January 25, 2021",
      postComments: "10 Comment",
    },
  ];

  return (
    <div className="w-full h-full lg:h-screen flex flex-col justify-center items-center py-5 bg-[#FFF7F4]">
      <h2 className=" text-lg text-[#FF5300] ">Our Blog</h2>
      <h1 className=" text-[#373737] text-xl md:text-2xl ld:text-4xl font-semibold py-5 text-center ">
        Every Singel Update From Here
      </h1>
      <div className=" w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {blogDetails.map((blog, index) => (
          <div
            className=" flex flex-col bg-[white] px-5 py-5 rounded-lg "
            key={index}
          >
            <img className="rounded" src={blog.img} alt="" />

            <h1 className=" text-md font-semibold py-2 ">{blog.blogHeader}</h1>

            <div
              className="flex flex-row flex-wrap justify-between text-[#373737] font-light py-2 "
              key={index}
            >
              <div className="flex flex-row items-center ">
                <span class="material-symbols-outlined">timer</span>
                <h2 className=" text-xs px-1 ">{blog.postTime}</h2>
              </div>
              <div className="flex flex-row items-center ">
                <span class="material-symbols-outlined">person</span>
                <h2 className=" text-xs px-1 ">{blog.user}</h2>
              </div>
              <div className="flex flex-row items-center ">
                <span class="material-symbols-outlined">sms</span>
                <h2 className=" text-xs px-1 ">{blog.postComments}</h2>
              </div>
            </div>

            <h2 className=" text-[#7B7B7B] ">{blog.blogText}</h2>
            <button className=" w-fit bg-[#FF5300] text-[white] text-sm font-semibold py-3 px-5 rounded my-2 ">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
