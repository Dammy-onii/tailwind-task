import React from "react";

function Nav() {
  return (
    <div className=" w-full h-20 flex flex-row items-center justify-center m-auto fixed top-0 left-0 text-[#373737] bg-[#FFF7F4] ">
      <div className="w-4/5 h-full flex flex-row items-center justify-center ">
        <h1 className=" w-2/4 flex text-4xl font-bold ">
          <span className="text-[#FF5300]">Digi</span>ency
        </h1>
        <div className=" w-2/4 flex-row justify-between font-medium hidden lg:flex ">
          <h2 className=" cursor-pointer hover:text-[#FF5300] ">Home</h2>
          <h2 className=" cursor-pointer hover:text-[#FF5300] ">About Us</h2>
          <h2 className=" cursor-pointer hover:text-[#FF5300] ">Services</h2>
          <h2 className=" cursor-pointer hover:text-[#FF5300] ">Portfolio</h2>
          <h2 className=" cursor-pointer hover:text-[#FF5300] ">Blog</h2>
        </div>
      </div>
    </div>
  );
}

export default Nav;
