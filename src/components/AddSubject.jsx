import React from "react";

const AddSubject = ({ time, onAddSubject }) => {
  return (
    <div
      id="add-subject-activator"
      className="flex flex-col md:flex-row items-center justify-between border border-dashed border-[#e0e2e8] p-1 my-2 gap-y-4"
    >
      <div
        className="flex md:flex sm:w-full md:w-1/2 items-center"
        id="time-and-timeGap"
      >
        <p className="flex text-md text-[#222222] mr-2">{time}</p>
        <p className="flex text-[#DFDFDF] mr-2">|</p>
        <p className="flex text-sm opacity-80 mr-2 text-[#222222]">
          2h 45min gap
        </p>
      </div>

      <div className="block sm:w-full md:flex  md:w-1/2 text-center md:text-start ">
        <button
          onClick={onAddSubject}
          className="flex text-md text-[#175fff] md:-translate-x-1/2"
        >
          <span className="flex text-black pr-2">+</span> Add a subject here
        </button>
      </div>
    </div>
  );
};

export default AddSubject;
