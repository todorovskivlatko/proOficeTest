import React from "react";
import dotsHorizontal from "../images/dotsH.svg";
import arrowDown from "../images/arrowDown.svg";

const TopContent = () => {
  return (
    <div
      id="topContent"
      className="flex flex-col md:flex-row py-6 px-6 md:py-6 md:px-8 justify-between"
    >
      <div className="flex flex-col ">
        <p className="text-[13px] text-[#696E7C]">Program Title</p>
        <p className="text-[32px] text-black">NYC Conference</p>
      </div>
      <div className="flex flex-col">
        <p className="flex md:self-end text-[13px] text-[#222222]">Status</p>
        <div className="flex">
          <img src={dotsHorizontal} alt="dots" className="pr-2" />

          <p className="text-[18px] text-[#222222] pr-2">Upcoming</p>
          <img src={arrowDown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopContent;
