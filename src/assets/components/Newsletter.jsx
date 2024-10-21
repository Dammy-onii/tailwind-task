import React from "react";

function Newsletter() {
  return (
    <div className=" w-full h-96 flex justify-center items-center">
      <div className=" w-4/5 bg-[#FF5300] flex flex-col md:flex-row items-center justify-between px-10 py-10 rounded-lg ">
        <div className=" w-full md:w-2/4 flex flex-col text-[white] ">
          <h2 className=" font-extralight text-sm ">Suscribe Newsletter</h2>
          <h1 className=" font-semibold text-2xl ">Lets Stay In Touch</h1>
        </div>
        <div className=" w-full md:w-2/4 bg-[white] py-4 px-4 rounded-md flex flex-col md:flex-row items-center ">
          <input
            className=" w-full md:w-4/6 h-full text-lg py-2 px-3 outline-none "
            type="text"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <button className=" w-full md:w-2/6 text-md text-semibold text-[white] bg-[#FF5300] px-4 my-2 py-2 rounded ">
            Suscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
